import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Modal } from "react-bootstrap";

const ProductInfo = ({ data, modal, handleClose, handleAction }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleAction(data);
    handleClose();
    alert("Changes saved");
  };

  return (
    <Modal show={modal} onHide={handleClose} size="md" centered>
      <Modal.Body>
        <Form.Label>ID: {data?.id || "new id"}</Form.Label>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder={data?.title || "title"}
              {...register("title", {
                required: "title is required",
              })}
            />
            <Form.Label style={{ color: "red" }}>
              {errors.title && <span>{errors.title.message}</span>}
            </Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="price"
              placeholder={data?.price || "price"}
              {...register("price", {
                required: "price is required",
              })}
            />
            <Form.Label style={{ color: "red" }}>
              {errors.price && <span>{errors.price.message}</span>}
            </Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="description"
              placeholder={data?.description || "description"}
              {...register("description", {
                required: "description is required",
              })}
            />
            <Form.Label style={{ color: "red" }}>
              {errors?.description && (
                <span>{errors?.description.message}</span>
              )}
            </Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              placeholder={data?.image || "image url"}
              {...register("image", {
                required: "image is required",
              })}
            />
            <Form.Label style={{ color: "red" }}>
              {errors?.image && <span>{errors?.image.message}</span>}
            </Form.Label>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="category"
              placeholder={data?.category || "category"}
              {...register("category", {
                required: "category is required",
              })}
            />
            <Form.Label style={{ color: "red" }}>
              {errors?.category && <span>{errors?.category.message}</span>}
            </Form.Label>
          </Form.Group>
          <Form.Group
            className="d-flex flex-row justify-content-between"
            controlId="formBasicCheckbox"
          >
            <Button variant="dark" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="dark" type="submit">
              Save
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ProductInfo;
