import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between py-24">
        <div className="max-w-[1200px] mx-auto px-[5px]">
          <h1 className="text-9xl text-center font-bold underline text-[#f3f3f3]">
            Home page
          </h1>
          <p className="text-3xl text-center mt-[36px] text-[#f3f3f3]">
            This app is for learning
          </p>
        </div>
      </main>
    </>
  );
}
