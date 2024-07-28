import Link from "next/link";
import React from "react";

const page = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Product not found");
  }
  const products = await response.json();
  console.log(products);

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="max-w-[1200px] mx-auto px-[5px]">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2 className="card-title hover:underline mb-[15px] text-[#f3f3f3]">
                <Link href={`/products/${product.id}`}>{product.title}</Link>
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default page;
