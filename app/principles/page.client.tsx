"use client";
import { motion } from "framer-motion";

export default function PrinciplesClient() {
  return (
    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
      <div className="max-w-[60ch] mx-auto w-full space-y-8 pt-12">
        <div className="h-[20px] md:h-[100px]"></div>
        <div className="space-y-6 md:space-y-2" id="principles">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Principles</h1>
          <ol id="principles" className="text-slate-500 dark:text-slate-400 space-y-3">
            <li>Avoid all unnecessary meetings.</li>
            <li>All meetings shall have a clear agenda and purpose.</li>
            <li>All meetings shall be of 15 or 30 minutes by default.</li>
            <li>Prioritise deep, focused work over reactive tasks.</li>
            <li>Check instant messaging with the same frequency as email.</li>
            <li>Establish boundaries for work and personal time.</li>
            <li>Only work with people who align with your values and goals.</li>
            <li>Be free of spacial boundaries.</li>
            <li>Never undersell.</li>
            <li>Never undercommit.</li>
          </ol>
        </div>
      </div>
    </motion.div>
  );
}
