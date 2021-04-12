import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
    productId: string;
    productName: string;
    productDescription: string;
  };
  
  export default function AddProductForm() {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));
  
    return (
      <form onSubmit={onSubmit}>
        <h1>Add Product Form</h1>
        <label>Product Id</label>
        <input {...register("productId")} placeholder=" Id of Product" />
        <label>Product Name</label>
        <input {...register("productName")} placeholder=" Name of Product" />
        <label>Product Description</label>
        <input {...register("productDescription")} placeholder=" Description" />
        <input type="submit" />
      </form>
    );
  }