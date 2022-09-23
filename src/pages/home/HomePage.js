import React from "react";
import Image from "react-bootstrap/Image";
import GoShopping from "../../component/button/GoShopping";
const HomePage = () => {
  return (
    <>
      <Image
        fluid
        className="d-block mx-auto"
        alt="img"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDUFCgvb3-GiVimPpfcWH7_kXV-gGEFVGiRM8f3-ulXRRF54jUqfbC3zrnMcqw-huNKC8&usqp=CAU"
        }
      />
      <GoShopping />
    </>
  );
};

export default HomePage;
