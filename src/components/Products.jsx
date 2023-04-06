import React, { useEffect, useState } from "react";
import Card from "./Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchApi = async () => {
    const api = await fetch(`https://dummyjson.com/products`);
    const { products } = await api.json();
    setProducts(products);
    console.log(products);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className=" flex flex-wrap gap-8 justify-center container mx-auto pb-10">
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
