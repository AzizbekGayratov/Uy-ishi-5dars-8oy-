import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between py-24">
      <div className="max-w-[1200px] mx-auto px-[5px]">
        <div className="flex items-center gap-[100px]">
          <div className="bg-[#f3f3f3] rounded-3xl text-[#5865E8] font-bold text-[24px]">
            <Link
              href="/about/student"
              className="inline-block px-[104px] py-[28px] hover:bg-[#5865E8] hover:text-[#f3f3f3] transition duration-300 rounded-3xl"
            >
              Student
            </Link>
          </div>
          <div className="bg-[#f3f3f3] rounded-3xl text-[#F458F8] font-bold text-[24px]">
            <Link
              href="/about/teacher"
              className="inline-block px-[104px] py-[28px] hover:bg-[#F458F8] hover:text-[#f3f3f3] transition duration-300 rounded-3xl"
            >
              Teacher
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
