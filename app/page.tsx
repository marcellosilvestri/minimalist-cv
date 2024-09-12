"use client";

import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./components/themeToggle";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-between pt-0 md:pt-8 p-8 min-h-screen">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
          <div className="max-w-[60ch] mx-auto w-full space-y-8 py-12">
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
                  Read my developer CV{" "}
                  <Link href="/cv" title="Marcello Silvestri's CV" className="underline text-blue-500 dark:text-orange-400">
                    here
                  </Link>
                  . I'm also on{" "}
                  <Link
                    href="https://github.com/marcellosilvestri"
                    title="Marcello Silvestri's Github"
                    target="_blank"
                    className="underline text-blue-500 dark:text-orange-400">
                    Github
                  </Link>
                  ,{" "}
                  <Link
                    href="https://x.com/shirubusutori"
                    title="Marcello Silvestri's Twitter"
                    target="_blank"
                    className="underline text-blue-500 dark:text-orange-400">
                    Twitter
                  </Link>
                  ,{" "}
                  <Link
                    href="https://www.linkedin.com/in/silvestrimarcello/"
                    title="Marcello Silvestri's LinkedIn"
                    target="_blank"
                    className="underline text-blue-500 dark:text-orange-400">
                    LinkedIn
                  </Link>
                  , and{" "}
                  <Link
                    href="https://www.instagram.com/"
                    title="Marcello Silvestri's Instagram"
                    target="_blank"
                    className="underline text-blue-500 dark:text-orange-400">
                    Instagram
                  </Link>
                  .
                </p>
              </div>
              <div className="space-y-2" id="my-companies">
                <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-50">My companies</h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Wiredmark (
                  <Link href="https://www.wiredmark.co.uk" title="Wiredmark" target="_blank" className="underline text-blue-500 dark:text-orange-400">
                    wiredmark.co.uk
                  </Link>
                  ) is my digital marketing company. Best suited if you want to do SEO or run ads and need a team of creatives who can suppory you.
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  Silvestri Consulting (
                  <Link
                    href="https://www.silvestri.consulting"
                    title="Silvestri Consulting"
                    target="_blank"
                    className="underline text-blue-500 dark:text-orange-400">
                    silvestri.consulting
                  </Link>
                  ) is my consulting company. This is the way to go if you need my services directly and don't want/need anyone else.
                </p>
              </div>
              <div className="space-y-2" id="other-projects">
                <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-50">Other projects</h2>
                <ul className="list-disc list-inside text-slate-500 dark:text-slate-400">
                  <li>
                    {" "}
                    I have a blog at{" "}
                    <Link href="https://silvestri.blog" title="Ichimai" target="_blank" className="underline text-blue-500 dark:text-orange-400">
                      silvestri.blog
                    </Link>
                    , which I use to share my thoughts and ideas.
                  </li>
                  <li>
                    Ichimai (
                    <Link href="https://ichimai.app" title="Ichimai" target="_blank" className="underline text-blue-500 dark:text-orange-400">
                      ichimai.app
                    </Link>
                    ) is my net worth tracking platform. Currently in development.
                  </li>
                </ul>
              </div>
              <div className="space-y-2" id="lets-talk">
                <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-50">Let's talk</h2>
                <p className="text-slate-500 dark:text-slate-400">
                  If you'd like to have a chat, you can{" "}
                  <Link
                    href="https://cal.com/silvestri/meeting?user=silvestri&duration=15&date=2024-09-24&month=2024-09"
                    title="Book a meeting with Marcello Silvestri"
                    target="_blank"
                    className="underline text-blue-500 dark:text-orange-400">
                    book a meeting with me
                  </Link>
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
