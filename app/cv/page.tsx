"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import CustomLink from "../components/customLink";
import { motion } from "framer-motion";
import { LivePing } from "../components/livePing";
import { SkillBadges } from "../components/skillBadges";
import { Separator } from "@/components/ui/separator";
import GitHubCalendar from "react-github-calendar";

export default function CV() {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-grow justify-between pt-0 md:pt-8 p-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
          <div className="max-w-[60ch] mx-auto w-full space-y-8 pt-12">
            <div className="flex items-center gap-4">
              <Image src="/avatar.webp" width={100} height={100} className="rounded-xl" alt="A photo of Marcello Silvestri" />
              <div className="flex flex-col gap-y-1">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Marcello Silvestri</h1>
                <h2 className="text-lg text-slate-500 dark:text-slate-400">Full Stack Web Developer</h2>
                <div className="flex items-center gap-2">
                  <LivePing status="active" />
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    Currently{" "}
                    <CustomLink href="https://cal.com/silvestri/meeting?user=silvestri&duration=15&date=2024-09-24&month=2024-09">
                      available for hire
                    </CustomLink>
                  </span>
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
                <div className="flex flex-col md:flex-row gap-2 md:gap-0">
                  <span className="text-sm md:w-1/5 font-semibold text-slate-700 dark:text-slate-50">2023 — Today</span>
                  <div className="md:w-4/5 space-y-2">
                    <div className="flex items-center gap-3">
                      <Image src="/logos/serie-a.svg" width={35} height={35} alt="Serie A logo" />
                      <div>
                        <h3 className="text-sm text-slate-600 dark:text-slate-300">Serie A</h3>
                        <h4 className="text-md font-semibold text-slate-600 dark:text-slate-300">Fractional CTO, Project Lead</h4>
                      </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Led the kick-off of a refactoring project for the{" "}
                      <CustomLink href="https://www.legaseriea.it/en" title="Italian Football League">
                        Italian Football League
                      </CustomLink>{" "}
                      applications through an Italian startup. Initially coordinated a small team of developers and product managers until an internal CTO took
                      over, while continuing to provide consulting services to the startup.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-0">
                  <span className="text-sm md:w-1/5 font-semibold text-slate-700 dark:text-slate-50">2020 — Today</span>
                  <div className="md:w-4/5 space-y-2">
                    <div className="flex items-center gap-3">
                      <Image src="/logos/toyota.svg" width={35} height={35} alt="Toyota logo" />
                      <div>
                        <h3 className="text-sm text-slate-600 dark:text-slate-300">Toyota Malta</h3>
                        <h4 className="text-md font-semibold text-slate-600 dark:text-slate-300">Developer, Tech Consultant</h4>
                      </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Currently managing the official{" "}
                      <CustomLink href="https://toyota.com.mt/" title="Toyota Malta">
                        Toyota Malta
                      </CustomLink>{" "}
                      website, serving as the primary liaison for Debono Group, the official distributor in Malta.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-0">
                  <span className="text-sm md:w-1/5 font-semibold text-slate-700 dark:text-slate-50">2022 — 2022</span>
                  <div className="md:w-4/5 space-y-2">
                    <div className="flex items-center gap-3">
                      <Image src="/logos/planetwin.webp" width={35} height={35} alt="Planetwin365 logo" />
                      <div>
                        <h3 className="text-sm text-slate-600 dark:text-slate-300">Planetwin365</h3>
                        <h4 className="text-md font-semibold text-slate-600 dark:text-slate-300">Data Analyst</h4>
                      </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Worked with PlanetWin365, part of{" "}
                      <CustomLink href="https://sks365.com/" title="SKS365">
                        SKS365
                      </CustomLink>{" "}
                      group, to enhance the user experience and interface of one of their websites in preparation for the 2022 World Cup. Completed the project
                      within a tight two-month timeframe, resulting in a lasting impact on the site’s affiliate revenue generation.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-0">
                  <span className="text-sm md:w-1/5 font-semibold text-slate-700 dark:text-slate-50">2021 — 2021</span>
                  <div className="md:w-4/5 space-y-2">
                    <div className="flex items-center gap-3">
                      <Image src="/logos/pfizer.svg" width={35} height={35} alt="Pfizer logo" />
                      <div>
                        <h3 className="text-sm text-slate-600 dark:text-slate-300">Pfizer</h3>
                        <h4 className="text-md font-semibold text-slate-600 dark:text-slate-300">Developer</h4>
                      </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Led the development of a diversity and inclusivity platform for{" "}
                      <CustomLink href="https://www.pfizer.it/" title="Pfizer Italy">
                        Pfizer Italy
                      </CustomLink>
                      , ensuring GDPR compliance and optimal UX/UI. Worked with several multinational teams, delivering the project on budget with minimal
                      post-launch issues. Successfully decommissioned after its lifecycle completion.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-0">
                  <span className="text-sm md:w-1/5 font-semibold text-slate-700 dark:text-slate-50">2020 — 2022</span>
                  <div className="md:w-4/5 space-y-2">
                    <div className="flex items-center gap-3">
                      <Image src="/logos/kritic.svg" width={35} height={35} alt="Kritic logo" />
                      <div>
                        <h3 className="text-sm text-slate-600 dark:text-slate-300">Kritic</h3>
                        <h4 className="text-md font-semibold text-slate-600 dark:text-slate-300">Developer, Tech Consultant</h4>
                      </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Developed and maintained a full-scale e-sports platform built with Laravel and deployed with Laravel Forge on DigitalOcean.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-0">
                  <span className="text-sm md:w-1/5 font-semibold text-slate-700 dark:text-slate-50">2019 — 2021</span>
                  <div className="md:w-4/5 space-y-2">
                    <div className="flex items-center gap-3">
                      <Image src="/logos/italchamind.svg" width={35} height={35} alt="Italian Chamber of Commerce in the UK logo" />
                      <div>
                        <h3 className="text-sm text-slate-600 dark:text-slate-300">Italian Chamber of Commerce in the UK</h3>
                        <h4 className="text-md font-semibold text-slate-600 dark:text-slate-300">Developer, Tech Consultant</h4>
                      </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Developed the website of the <CustomLink href="https://www.italchamind.org.uk/">Italian Chamber of Commerce in the UK</CustomLink>,
                      integrating an automated membership system and a custom-built private area accessible in both Italian and English. It now serves as a key
                      communication tool for the Chamber and is regularly visited by hundreds of users monthly.
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
