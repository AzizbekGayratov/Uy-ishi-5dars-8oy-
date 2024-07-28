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
            <h1 className="text-[#f3f3f3] font-bold text-[32px]">Student</h1>
            <p className="text-[#f3f3f3] font-semibold text-[18px]">
              Студе́нт (от лат. studens «усердно работающий человек, занимающийся
              работой и учебой») — учащийся высшего, в некоторых государствах и
              странах и среднего учебного заведения. Понятие «студент»
              существует со времён Древнего Рима, хотя вкладывавшийся в него
              смысл существенно различался в разные эпохи и в разных культурах.
              В целом, это понятие относилось к учащимся на достаточно
              продвинутом этапе, когда (с учётом характера
              учебно-образовательной деятельности) неуместно говорить о
              воспитании или прививании простейших навыков, как в отношении
              детей. Обычно студент — это человек от юношеского до 25—30-летнего
              возраста. В СССР и постсоветской России под «студентом», как
              правило, подразумева-ли/-ют получающего высшее образование. В
              середине 2010-х гг. таких лиц было порядка трёх миллионов. Иногда
              студентами называют учащихся техникумов и даже профессиональных
              училищ, а также лиц, занимающихся на курсах, например языковых,
              для взрослых.
            </p>
          </div>
          <div className="avatar placeholder">
            <div className="bg-[#f3f3f3] border-8 border-neutral text-neutral-content w-64 rounded-full">
              <span className="text-6xl font-bold text-neutral">Student</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
