import Link from "next/link";
import React from "react";
import { GiReturnArrow } from "react-icons/gi";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between py-2">
      <div className="w-[1050px] mx-auto px-[5px]">
        <div className="flex items-center justify-end gap-[10px]">
          <GiReturnArrow className="text-[#f3f3f3]" />
          <span className="text-[18px] font-bold text-[#f3f3f3]">
            <Link href="/about">Back</Link>
          </span>
        </div>

        <div className="flex items-center justify-between gap-[140px]">
          <div>
            <h1 className="text-[#f3f3f3] font-bold text-[32px]">Teacher</h1>
            <p className="text-[#f3f3f3] font-semibold text-[18px]">
              A teacher, also called a schoolteacher or formally an educator, is
              a person who helps students to acquire knowledge, competence, or
              virtue, via the practice of teaching. Informally the role of
              teacher may be taken on by anyone (e.g. when showing a colleague
              how to perform a specific task). In some countries, teaching young
              people of school age may be carried out in an informal setting,
              such as within the family (homeschooling), rather than in a formal
              setting such as a school or college. Some other professions may
              involve a significant amount of teaching (e.g. youth worker,
              pastor). In most countries, formal teaching of students is usually
              carried out by paid professional teachers. This article focuses on
              those who are employed, as their main role, to teach others in a
              formal education context, such as at a school or other place of
              initial formal education or training.
            </p>
          </div>
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-64 rounded-full">
              <span className="text-6xl font-bold">Teacher</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
