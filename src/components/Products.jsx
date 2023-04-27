import React, { useEffect, useState } from "react";
import Card from "./Card";
import Spinner from "./Loading/Spinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const fetchApi = async () => {
    const api = await fetch(`https://dummyjson.com/products`);
    const { products } = await api.json();
    setProducts(products);
    setLoading(false);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className=" flex flex-wrap gap-8 justify-center container mx-auto pb-10">
      {isLoading ? (
        <Spinner />
      ) : (
        products?.map((product) => <Card key={product.id} product={product} />)
      )}
    </div>
  );
};

export default Products;
