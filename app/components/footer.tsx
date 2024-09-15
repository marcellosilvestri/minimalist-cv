import { TwitterLogoIcon, GitHubLogoIcon, LinkedInLogoIcon, InstagramLogoIcon, CalendarIcon } from "@radix-ui/react-icons";
import CustomLink from "./customLink";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="p-8 max-w-[350px] md:max-w-full mx-auto text-slate-500 dark:text-slate-400 text-center text-xs">
      <div className="flex justify-center gap-4 mb-4">
        <CustomLink href="https://x.com/shirubusutori" hideIcon={true}>
          <TwitterLogoIcon className="w-5 h-5" />
        </CustomLink>
        <CustomLink href="https://github.com/marcellosilvestri/" hideIcon={true}>
          <GitHubLogoIcon className="w-5 h-5" />
        </CustomLink>
        <CustomLink href="https://www.linkedin.com/in/silvestrimarcello/" hideIcon={true}>
          <LinkedInLogoIcon className="w-5 h-5" />
        </CustomLink>
        <CustomLink href="https://www.instagram.com/heyitsmarcello/" hideIcon={true}>
          <InstagramLogoIcon className="w-5 h-5" />
        </CustomLink>
        <CustomLink href="https://cal.com/silvestri/meeting/" hideIcon={true}>
          <CalendarIcon className="w-5 h-5" />
        </CustomLink>
      </div>
      <div>
        <span className="font-semibold">&copy;2024 — Marcello Silvestri. All rights reserved.</span>
        <br />
        Silvestri&reg; and Silvestri Consulting&reg; are registered trademarks of Silvestri Consulting Ltd.
      </div>
      <div className="mt-3">
        Want a website like this? Check out my{" "}
        <CustomLink href="https://github.com/marcellosilvestri/minimalist-cv" hideIcon={true}>
          GitHub repository
        </CustomLink>
        .
      </div>
    </footer>
  );
}
