import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IProduct } from "./Service/Product";


export function CreateProduct() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = handleSubmit(async (data : IProduct) => {
      try {
        await axios.post("http://localhost:5000/products", {
          productName: data.productName,
          productSupplier: data.productSupplier,
          productPrice: data.productPrice,
          productDescription: data.productDescription,
        });
      } catch (err) {
        setError(err);
      }
    });
    
    useEffect(() => {
        (async () => {
            axios
            .get("http://localhost:5000/products")
            .then((res) => res.data)
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => setError(err));
        })();
    }, []);

    return (<div>
        <form onSubmit={onSubmit}>
            <h1>Add Product Form</h1>
            <label>Product Name</label>
            <input {...register("productName")} placeholder=" Name of Product" />
            <label>Product Supplier</label>
            <input {...register("productSupplier")} placeholder=" Supplier of Product" />
            <label>Product Price</label>
            <input {...register("productPrice")} placeholder=" Price of Product" />
            <label>Product Description</label>
            <input {...register("productDescription")} placeholder=" Description" />
            <input type="submit" value="Add"/>
        </form>
      
    </div>
    );
}