"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const skills1 = ["HTML", "CSS", "PHP", "Laravel", "JavaScript", "jQuery", "React", "Next.js", "Tailwind CSS"];
const skills2 = ["Node.js", "Express", "MongoDB", "MySQL", "Git", "Docker", "Linux", "React", "Next.js"];

const rightToLeftVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

const leftToRightVariants = {
  animate: {
    x: ["-100%", "0%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

export function SkillBadges() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null on server-side and initial client-side render
  }

  const themeClass = mounted && resolvedTheme === "dark" ? "skill-badges-container-dark" : "";

  return (
    <div className="relative overflow-hidden">
      <div className={`skill-badges-container ${themeClass}`}>
        <motion.div className="flex gap-2 mb-2 whitespace-nowrap" variants={rightToLeftVariants} animate="animate">
          {[...skills1, ...skills1, ...skills1, ...skills1, ...skills1, ...skills1, ...skills1, ...skills1, ...skills1, ...skills1].map((skill, index) => (
            <Badge key={`${skill}-${index}`} variant="outline" className="whitespace-nowrap">
              {skill}
            </Badge>
          ))}
        </motion.div>
        <motion.div className="flex gap-2 whitespace-nowrap" variants={leftToRightVariants} animate="animate">
          {[...skills2, ...skills2, ...skills2, ...skills2, ...skills2, ...skills2, ...skills2, ...skills2, ...skills2, ...skills2].map((skill, index) => (
            <Badge key={`${skill}-${index}`} variant="outline" className="whitespace-nowrap">
              {skill}
            </Badge>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
