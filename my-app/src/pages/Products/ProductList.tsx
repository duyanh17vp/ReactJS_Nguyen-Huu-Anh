import * as React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IProduct } from "./Service/Product";
import ProductDetail from "./ProductDetail";
  
  export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));

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

    return (
        <div>
            <h1>PostList</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Supplier</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {products &&
                products.length > 0 &&
                products.map((product: IProduct) => (
                    <tr key={product.id}>
                    <th scope="row">{product.id}</th>
                    <td>{product.productName}</td>
                    <td>{product.productSupplier}</td>
                    <td>{product.productPrice}</td>
                    <td>{product.productDescription}</td>
                    <td><a href="#">Detail</a>  <a href="#">Delete</a></td>
                </tr>
                ))}
                </tbody>
            </table>
            {error && <p>Something went wrong!</p>}
            
        </div>
    );
  }