"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { LivePing } from "../components/livePing";
import { SkillBadges } from "../components/skillBadges";
import { Separator } from "@/components/ui/separator";
import GitHubCalendar from "react-github-calendar";

export default function CV() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-between pt-0 md:pt-8 p-8 min-h-screen">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
          <div className="max-w-[60ch] mx-auto w-full space-y-8 py-12">
            <div className="flex items-center gap-4">
              <Image src="/avatar.webp" width={100} height={100} className="rounded-xl" alt="A photo of Marcello Silvestri" />
              <div className="flex flex-col gap-y-1">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Marcello Silvestri</h1>
                <h2 className="text-lg text-slate-500 dark:text-slate-400">Full Stack Web Developer</h2>
                <div className="flex items-center gap-2">
                  <LivePing status="active" />
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Currently available for hire</span>
                </div>
              </div>
            </div>
            <Separator />
            <GitHubCalendar username="marcellosilvestri" weekStart={1} blockSize={7.5} hideColorLegend={true} />
            <div className="space-y-6">
              <div className="space-y-3" id="about-me">
                <div className="space-y-3" id="about-me">
                  <p className="text-slate-500 dark:text-slate-400">
                    I am a dedicated, T-shaped developer with a long story in the IT industry. I’ve worked with international organisations and currently
                    support businesses in Europe, US and Asia. Passionate about traveling, I am fluent in English, Italian, and conversational in Japanese.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4" id="skills">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50">Skills</h2>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <SkillBadges />
                </div>
              </div>
            </div>
            <div className="space-y-4" id="work-experience">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50">Notable work experience</h2>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row">
                  <span className="text-sm md:w-1/5 font-semibold text-slate-700 dark:text-slate-50">2023 — 2024</span>
                  <div className="md:w-4/5 space-y-2">
                    <h3 className="text-sm text-slate-600 dark:text-slate-300 mt-2 md:mt-0">Lega Calcio</h3>
                    <h4 className="text-md font-semibold text-slate-600 dark:text-slate-300">Fractional CTO, Tech Lead</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Led the initial phase of a comprehensive refactoring project for the Italian Football League’s suite of applications (Lega Calcio, Serie
                      A, Serie B). My job was to coordinate cross-functional teams until an internal CTO could assume control.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <span className="text-sm md:w-1/5 font-semibold text-slate-700 dark:text-slate-50">2020 — 2024</span>
                  <div className="md:w-4/5 space-y-2">
                    <h3 className="text-sm text-slate-600 dark:text-slate-300 mt-2 md:mt-0">Toyota Malta</h3>
                    <h4 className="text-md font-semibold text-slate-600 dark:text-slate-300">Developer, Tech Consultant</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Led the initial phase of a comprehensive refactoring project for the Italian Football League’s suite of applications (Lega Calcio, Serie
                      A, Serie B). My job was to coordinate cross-functional teams until an internal CTO could assume control.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <span className="text-sm md:w-1/5 font-semibold text-slate-700 dark:text-slate-50">2020 — 2024</span>
                  <div className="w-4/5 space-y-2">
                    <h3 className="text-sm text-slate-600 dark:text-slate-300 mt-2 md:mt-0">Toyota Malta</h3>
                    <h4 className="text-md font-semibold text-slate-600 dark:text-slate-300">Developer, Tech Consultant</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Led the initial phase of a comprehensive refactoring project for the Italian Football League’s suite of applications (Lega Calcio, Serie
                      A, Serie B). My job was to coordinate cross-functional teams until an internal CTO could assume control.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <span className="text-sm md:w-1/5 font-semibold text-slate-700 dark:text-slate-50">2020 — 2024</span>
                  <div className="w-4/5 space-y-2">
                    <h3 className="text-sm text-slate-600 dark:text-slate-300 mt-2 md:mt-0">Toyota Malta</h3>
                    <h4 className="text-md font-semibold text-slate-600 dark:text-slate-300">Developer, Tech Consultant</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Led the initial phase of a comprehensive refactoring project for the Italian Football League’s suite of applications (Lega Calcio, Serie
                      A, Serie B). My job was to coordinate cross-functional teams until an internal CTO could assume control.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <span className="text-sm md:w-1/5 font-semibold text-slate-700 dark:text-slate-50">2020 — 2024</span>
                  <div className="w-4/5 space-y-2">
                    <h3 className="text-sm text-slate-600 dark:text-slate-300 mt-2 md:mt-0">Toyota Malta</h3>
                    <h4 className="text-md font-semibold text-slate-600 dark:text-slate-300">Developer, Tech Consultant</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Led the initial phase of a comprehensive refactoring project for the Italian Football League’s suite of applications (Lega Calcio, Serie
                      A, Serie B). My job was to coordinate cross-functional teams until an internal CTO could assume control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
