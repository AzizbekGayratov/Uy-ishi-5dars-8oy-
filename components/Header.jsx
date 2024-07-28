"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="pt-[10px]">
      <div className="max-w-[1200px] mx-auto px-[5px]">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={140}
              height={140}
              className="cursor-pointer"
            />
          </Link>
          <nav>
            <ul className="flex gap-[55px]">
              <li
                className={
                  pathname === "/"
                    ? "text-[24px] text-[#F458F8] font-bold underline"
                    : "text-[24px] text-[#0B3FDA] font-medium opacity-80"
                }
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={
                  pathname === "/about"
                    ? "text-[24px] text-[#F458F8] font-bold underline"
                    : "text-[24px] text-[#0B3FDA] font-medium opacity-80"
                }
              >
                <Link href="/about">About</Link>
              </li>
              <li
                className={
                  pathname === "/products"
                    ? "text-[24px] text-[#F458F8] font-bold underline"
                    : "text-[24px] text-[#0B3FDA] font-medium opacity-80"
                }
              >
                <Link href="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
