import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { handleClearCart } from "../../redux/action";
import SuccessPurchase from "../modal/SuccessPurchase";
import { selectTotalPrice } from "../../redux/selector";

const TotalPrice = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  const [successPurchase, setSuccessPurchase] = useState(false);
  const navigate = useNavigate();
  const handleSuccess = () => {
    setSuccessPurchase(true);
    setTimeout(() => {
      navigate("/");
      handleClearCart(dispatch);
    }, 2000);
  };
  if (totalPrice === "0.00") {
    return <></>;
  }
  return (
    <Card
      style={{ width: "45%" }}
      className="p-0 d-flex flex-row justify-content-between"
    >
      <Card.Text className="fw-bold fs-4 m-2">
        SubTotal: $ {Math.abs(totalPrice)}
      </Card.Text>
      <Button variant="dark" className="p-3" onClick={handleSuccess}>
        Purchase
      </Button>
      <SuccessPurchase
        show={successPurchase}
        onHide={() => setSuccessPurchase(false)}
      />
    </Card>
  );
};

export default TotalPrice;
