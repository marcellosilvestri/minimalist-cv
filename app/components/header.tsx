// TODO: separate the navigations into separate components

"use client";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../components/themeToggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-900 flex items-center justify-between px-8 py-4 z-10 border-b">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={130} height={130} className="md:w-[130px] w-[90px] dark:brightness-0 dark:invert" />
      </Link>

      <div className="flex items-center space-x-4">
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md ${
                    isActive("/") ? "bg-slate-100 dark:bg-slate-800" : ""
                  }`}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/cv" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md ${
                    isActive("/cv") ? "bg-slate-100 dark:bg-slate-800" : ""
                  }`}>
                  CV
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/principles" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md ${
                    isActive("/principles") ? "bg-slate-100 dark:bg-slate-800" : ""
                  }`}>
                  Principles
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <ThemeToggle />

        {/* Mobile Navigation */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <button aria-label="Menu" className="p-2">
              <HamburgerMenuIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-screen rounded-none space-y-2 px-8 py-2 border-b border-r-0 border-l-0 border-t-0 bg-white dark:bg-slate-900 shadow-none">
            <DropdownMenuItem asChild className="focus:bg-transparent hover:bg-transparent pl-0">
              <Link href="/" className={`w-full ${isActive("/") ? "font-bold" : ""}`}>
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="focus:bg-transparent hover:bg-transparent pl-0">
              <Link href="/cv" className={`w-full ${isActive("/cv") ? "font-bold" : ""}`}>
                CV
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="focus:bg-transparent hover:bg-transparent pl-0">
              <Link href="/principles" className={`w-full ${isActive("/principles") ? "font-bold" : ""}`}>
                Principles
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
