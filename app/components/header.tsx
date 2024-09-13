import CustomLink from "./CustomLink";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { ThemeToggle } from "../components/themeToggle";
import { usePathname } from "next/navigation";

export default function Header() {
  return (
    <header className="">
      {usePathname() !== "/" && (
        <div className="fixed top-4 left-4">
          <CustomLink href="/">
            <ArrowLeftIcon className="h-[1.2rem] w-[1.2rem] text-slate-500 dark:text-white" />
          </CustomLink>
        </div>
      )}
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
