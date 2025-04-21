"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

const HeaderDashboard = ({ session }: { session: Session | null }) => {
  const router = useRouter();
  const [loadingLogout, setLoadingLogout] = React.useState<boolean>(false);
  const logout = async () => {
    setLoadingLogout(true);
    await signOut()
      .then(() => {
        router.push("/");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoadingLogout(false);
      });
  };
  const { setTheme } = useTheme();
  return (
    <Card className="w-full flex shadow-md bg-white/70 dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {session ? "Dashboard PMB" : "Penerimaan Mahasiswa Baru"}
        </CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-300">
          {session
            ? "Laporan PMB untuk Rektor"
            : "Monitoring Penerimaan Mahasiswa Baru ITI"}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="flex flex-col">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
      <CardFooter className="text-sm">
        {session ? (
          <React.Fragment>
            <Button
              className="mr-2 hover:scale-110 active:scale-90 transition-all duration-100 cursor-pointer "
              onClick={() => logout()}
              disabled={loadingLogout}
            >
              {loadingLogout ? "Keluar..." : "Keluar"}
            </Button>
            &nbsp;untuk keluar dari sistem
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link href="/login" className="underline hover:font-bold">
              Login
            </Link>{" "}
            &nbsp;untuk perbarui data
          </React.Fragment>
        )}
      </CardFooter>
    </Card>
  );
};

export default HeaderDashboard;
