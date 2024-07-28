import React from "react";
import Link from "next/link";
import { GiReturnArrow } from "react-icons/gi";

const page = async ({ params }) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const product = await response.json();
  return (
    <main className="flex flex-col items-center justify-between py-2">
      <div className="w-[1200px] mx-auto px-[5px]">
        <div>
          <div className="card card-side shadow-xl">
            <figure className="w-[700px]">
              <img src={product.image} alt={product.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[40px] text-[#f3f3f3] leading-[48px] font-bold mb-[35px]">
                {product.title}
              </h2>
              <p className="text-[#f3f3f3] text-[24px]">
                {product.description}
              </p>
              <div className="card-actions justify-end">
                <div className="flex items-center gap-[10px]">
                  <GiReturnArrow className="text-neutral" />
                  <span className="text-[18px] font-bold text-neutral">
                    <Link href="/products">Back</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
