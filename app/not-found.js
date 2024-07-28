import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <main className="flex flex-col items-center justify-between">
        <div className="max-w-[800px] mx-auto px-[5px]">
          <div className="flex items-center justify-between">
            <div className="max-w-[600px]">
              <h2 className="text-[200px] font-semibold leading-[252px] text-[#f4d3f3]">
                404
              </h2>
              <p className="text-[57px] font-semibold leading-[72px] text-[#d5d3f4]">
                Page Not Found
              </p>
              <span className="font-medium text-[32px] leading-[40px] text-[#dff9f8]">
                Sorry, we couldn&apos;t find the page you&apos;re looking for
              </span>
            </div>
            <div className="flex flex-col">
              <Image src="/logo.png" alt="logo" width={340} height={340} />
              <Link
                href="/"
                className="inline-block px-[30px] py-[16px] bg-[#5865E8] rounded-2xl text-center text-[#f3f3f3] font-semibold"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
