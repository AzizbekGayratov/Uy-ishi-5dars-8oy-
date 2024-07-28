"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import Logo from "/logo.png";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="pt-[10px]">
      <div className="max-w-[1200px] mx-auto px-[5px]">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img src="/logo.png" alt="logo" className="h-[140px]" />
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
