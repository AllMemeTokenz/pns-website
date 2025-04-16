"use client";
import { motion } from "framer-motion";
import { telegramLink, tokenCA, twitterLink } from "@/config";
import toast from "react-hot-toast";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <main className="flex flex-col max-w-[100vw] w-screen overflow-y-auto mt-[96px] lg:mt-0 overflow-x-hidden justify-center items-center h-full ">
        <section className="w-full flex mb-5 lg:mb-0 lg:mt-0 flex-col items-center justify-between lg:px-[111px] px-5 xl:px-[190px]">
          {tokenCA && (
            <section className="w-full flex mb-5 lg:mb-0 lg:mt-0 flex-col lg:flex-row items-center justify-between lg:px-[111px] px-5 xl:px-[190px]">
              <div className="flex my-10 xl:mx-9 w-full flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-2 text-center text-blue-950">
                  $P&S CA
                </h2>
                <h3 className="text-xl font-semibold mb-8 text-center text-blue-950">
                  Hit the copy button so you won&apos;t get the address wrong!{" "}
                </h3>
                <div className="font-semibold flex flex-col sm:flex-row items-center justify-center text-center sm:space-x-5 space-y-3 sm:space-y-0 relative px-6 border border-blue-950 shadow-[1px_1px_0_#483f3b] transition-all ease-linear duration-100 bg-blue-100 text-blue-950 text-[17px] py-3 rounded-xl">
                  <span className="break-all sm:break-normal">
                    BFZs6LmP4KfxbGo4bMX7HBXq3755Dc1x4hgz9fgUbs4N
                  </span>
                  <a
                    onClick={() => {
                      navigator.clipboard
                        .writeText(tokenCA)
                        .then(() => {
                          toast.success("Copied to clipboard");
                        })
                        .catch(() => {
                          toast.error("Could not copy");
                        });
                    }}
                    className="font-semibold cursor-pointer px-4 uppercase border  border-blue-950 shadow-[2px_2px_0_#483f3b] active:shadow-[0.5px_0.5px_0_#483f3b] active:translate-x-[1px] active:translate-y-[1px] text-blue-50 active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-blue-950/80 active:bg-blue-950/90 bg-blue-950 70 text-[17px] py-2 rounded-xl"
                  >
                    COPY
                  </a>
                </div>
              </div>
            </section>
          )}

          {/* DexScreener Chart Section */}
          <section className="w-full flex mt-10 mb-10 flex-col items-center justify-center">
            <motion.div
              className="w-full max-w-4xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-bold text-[28px] lg:text-[32px] text-center mb-6 text-blue-950">
                $P&S Chart
              </h2>
              <div className="border border-blue-950 shadow-[2px_2px_0_#483f3b] rounded-xl overflow-hidden">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "125%",
                  }}
                  className="dexscreener-embed"
                >
                  <iframe
                    src="https://dexscreener.com/solana/6M19HGw9Pb7XMReRJqRueSGhgoyKo6hWf7N51qLm5cYA?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=1&chartType=usd&interval=15"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                      border: 0,
                    }}
                    title="DexScreener Chart"
                  />
                </div>
              </div>
              <style jsx>{`
                @media (min-width: 1400px) {
                  .dexscreener-embed {
                    padding-bottom: 65%;
                  }
                }
              `}</style>
            </motion.div>
          </section>

          {/* Whitepaper Section */}
          <section className="w-full flex mt-20 flex-col items-center justify-center px-6 md:px-16">
            <motion.div
              className="flex flex-col w-full text-center items-center justify-start"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="font-bold text-[32px] lg:text-[36px] xl:text-[40px] text-blue-950">
                $P&S WHITEPAPER
              </h1>
              <h2 className="font-medium leading-7 text-lg xl:text-xl text-blue-950 max-w-2xl mt-2">
                $P&S ($P&S): FAviation Technology in the Crypto World In the
                aviation world.
                <br />
                Pitot and Static Systems are essential elements used to measure
                the airspeed, altitude, and vertical speed of an aircraft.
              </h2>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <a
                href="/whitepaper/p&s-whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold cursor-pointer px-4 uppercase border border-blue-950 shadow-[2px_2px_0_#483f3b] active:shadow-[0.5px_0.5px_0_#483f3b] active:translate-x-[1px] active:translate-y-[1px] text-blue-50 active:scale-[0.99] transition-all ease-linear duration-100 hover:bg-blue-950/80 active:bg-blue-950/90 bg-blue-950/90 text-[17px] py-2 rounded-xl flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Whitepaper
              </a>
            </motion.div>

            <motion.div
              className="mt-6 text-blue-950/80 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              Learn about our technology, tokenomics, and the future of P&S
            </motion.div>
          </section>

          <div className="w-full flex flex-row space-x-2 items-center justify-center mt-10 mb-16">
            <a
              id="twitterButton"
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-blue-400/80 border border-[#483f3b] shadow-[2px_2px_0_#483f3b] active:shadow-[0.5px_0.5px_0_#483f3b] active:translate-x-[1px] active:translate-y-[1px] active:bg-[#afa895]/90 bg-blue-200/70 rounded-xl active:scale-[0.99] transition-all ease-linear duration-100"
            >
              <svg
                width="43"
                height="43"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_45_5124)">
                  <path
                    d="M21.5222 18.2441L27.4785 11.3203H26.0671L20.8952 17.3321L16.7644 11.3203H12L18.2466 20.4113L12 27.6719H13.4115L18.8732 21.3232L23.2356 27.6719H28L21.5218 18.2441H21.5222ZM19.5889 20.4914L18.956 19.5861L13.9201 12.3829H16.0882L20.1522 18.1961L20.7851 19.1014L26.0677 26.6576H23.8997L19.5889 20.4917V20.4914Z"
                    fill="#162456"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_45_5124">
                    <rect
                      width="16"
                      height="16.36"
                      fill="#065F46"
                      transform="translate(12 11.3203)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              id="telegramButton"
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-blue-400/80 border border-[#483f3b] shadow-[2px_2px_0_#483f3b] active:shadow-[0.5px_0.5px_0_#483f3b] active:translate-x-[1px] active:translate-y-[1px] active:bg-[#afa895]/90 bg-blue-200/70 rounded-xl active:scale-[0.99] transition-all ease-linear duration-100"
            >
              <svg
                width="43"
                height="43"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4621 21.0913L9.80904 19.5753C9.80904 19.5753 9.25295 19.3496 9.43201 18.838C9.46887 18.7325 9.54323 18.6428 9.76566 18.4885C10.7967 17.7699 28.8485 11.2816 28.8485 11.2816C28.8485 11.2816 29.3582 11.1098 29.6588 11.2241C29.7331 11.2471 29.8 11.2894 29.8527 11.3468C29.9053 11.4042 29.9417 11.4745 29.9583 11.5506C29.9907 11.6849 30.0043 11.8232 29.9986 11.9613C29.9972 12.0807 29.9827 12.1915 29.9718 12.3651C29.8618 14.1391 26.5717 27.3785 26.5717 27.3785C26.5717 27.3785 26.3748 28.1532 25.6695 28.1797C25.4962 28.1853 25.3235 28.156 25.1618 28.0934C25.0001 28.0308 24.8526 27.9363 24.7281 27.8156C23.3441 26.6251 18.5605 23.4102 17.5034 22.7032C17.4796 22.6869 17.4595 22.6658 17.4445 22.6411C17.4296 22.6164 17.4201 22.5888 17.4167 22.5602C17.4019 22.4857 17.4829 22.3934 17.4829 22.3934C17.4829 22.3934 25.8125 14.9894 26.0342 14.2122C26.0513 14.1519 25.9865 14.1222 25.8994 14.1486C25.3462 14.3521 15.7557 20.4086 14.6972 21.077C14.621 21.1001 14.5405 21.105 14.4621 21.0913Z"
                  fill="#162456"
                />
              </svg>
            </a>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
