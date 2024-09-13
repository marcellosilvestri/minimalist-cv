"use client";

import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import CustomLink from "./components/customLink";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-grow justify-between pt-0 md:pt-8 p-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
          <div className="max-w-[60ch] mx-auto w-full space-y-8 pt-12">
            <Image src="/avatar.webp" width={100} height={100} className="rounded-xl" alt="A photo of Marcello Silvestri" />
            <div className="space-y-6">
              <div className="space-y-3" id="about-me">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Marcello Silvestri</h1>
                <p className="text-slate-500 dark:text-slate-400">
                  I'm a part-time CTO with a background as a full stack web developer and digital marketer, currently running two businesses while building my
                  very first digital platform.
                </p>
              </div>
              <div className="space-y-2" id="more-about-me">
                <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-50">More about me</h2>
                <p className="text-slate-500 dark:text-slate-400">
                  You can read my developer CV{" "}
                  <CustomLink href="/cv" title="Marcello Silvestri's CV">
                    here
                  </CustomLink>
                  .
                </p>
              </div>
              <div className="space-y-2" id="my-companies">
                <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-50">My companies</h2>
                <p className="text-slate-500 dark:text-slate-400">
                  <CustomLink href="https://www.wiredmark.co.uk" title="Wiredmark">
                    Wiredmark
                  </CustomLink>{" "}
                  is my digital marketing company. Best suited if you want to do SEO, run ads, or need a team of creatives who can support you.
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  <CustomLink href="https://www.silvestri.consulting/en/" title="Silvestri Consulting">
                    Silvestri Consulting
                  </CustomLink>{" "}
                  is my consulting company. It's the way to go if you need my services directly and don't want/need anyone else.
                </p>
              </div>
              <div className="space-y-2" id="other-projects">
                <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-50">Other projects</h2>
                <ul className="list-disc list-inside text-slate-500 dark:text-slate-400">
                  <li>
                    {" "}
                    I have a blog at{" "}
                    <CustomLink href="https://silvestri.blog" title="Marcello Silvestri's Blog">
                      silvestri.blog
                    </CustomLink>
                    , which I use to share my thoughts and ideas.
                  </li>
                  <li>
                    <CustomLink href="https://ichimai.app" title="Ichimai">
                      Ichimai
                    </CustomLink>{" "}
                    is my net worth tracking platform. Currently in development.
                  </li>
                </ul>
              </div>
              <div className="space-y-2" id="lets-talk">
                <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-50">Let's talk</h2>
                <p className="text-slate-500 dark:text-slate-400">
                  If you'd like to have a chat, you can{" "}
                  <CustomLink
                    href="https://cal.com/silvestri/meeting?user=silvestri&duration=15&date=2024-09-24&month=2024-09"
                    title="Book a meeting with Marcello Silvestri">
                    book a meeting with me
                  </CustomLink>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
