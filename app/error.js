"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="max-w-[500px] mx-auto px-[5px] mt-[80px]">
        <h2 className="text-[80px] font-semibold leading-[72px] text-[#f4d3f3] mb-[30px]">
          {/* {error.message} */}
          Something went wrong!
        </h2>
        <button
          onClick={() => reset()}
          className="inline-block px-[30px] py-[16px] bg-[#5865E8] rounded-2xl text-center text-[#f3f3f3] font-semibold hover:bg-[#f3f3f3] hover:text-[#5865E8] transition duration-300"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
