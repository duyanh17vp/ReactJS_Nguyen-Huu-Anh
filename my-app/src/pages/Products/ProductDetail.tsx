import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "./Service/Product";
  
  export default function ProductDetail(product: IProduct) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

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
            <h2>Detail</h2>
            <div>
                <h4>ID: {product.id}</h4>
                <div>Name: {product.productName}</div>
                <div>Supplier: {product.productSupplier}</div>
                <div>Price: {product.productPrice}</div>
                <div>Description: {product.productDescription}</div>
            </div>
            {error && <p>Something went wrong!</p>}
        </div>
    );
  }