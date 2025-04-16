"use client";
import TextScroller from "./textslider";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Header component
export default function Header() {
  const router = useRouter();
  return (
    <>
      {/* Red slider for sm devices */}
      <nav className="h-[40px] z-[9997] flex w-full top-0 fixed lg:hidden text-blue-50 border-b-2 border-blue-200 #D1FAE5font-medium items-center justify-center bg-blue-950">
        <TextScroller />
      </nav>
      <motion.div
        initial={{ opacity: 0, x: -0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <header className="fixed z-[9998] grid lg:mt-0 mt-[40px] px-5 grid-cols-2 md:grid-cols-3 grid-rows-1 top-0 left-0 right-0 w-full h-[68px] bg-stone-100 border-b-2 border-zinc-800">
          <div className="w-full hidden md:flex flex-row items-center justify-start space-x-6"></div>
          <div className="w-full flex items-center flex-row justify-center">
            <h1
              onClick={() => router.replace("/")}
              className="text-2xl font-semibold cursor-pointer active:scale-[0.98] text-blue-950"
            >
              $P&S
            </h1>
          </div>
        </header>
        {/* Red slider for lg devices */}
        <nav className="h-[40px] mt-[68px] w-full hidden lg:flex text-blue-50 border-b-2 border-blue-200 font-medium items-center justify-center bg-blue-950">
          <TextScroller />
        </nav>
      </motion.div>
    </>
  );
}
