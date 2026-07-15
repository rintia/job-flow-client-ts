"use client";

import { authService } from "@/services/auth.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Logo from "../common/Logo";
import Container from "./Container";
import { useCurrentUser } from "@/hooks/useCurrentUser";

import {
  Menu,
  X,
  User,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import type { AppUser } from "@/types/auth";







const navLinks = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Jobs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];



export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, loading } = useCurrentUser();

  const router = useRouter();

  const currentUser = user as AppUser;



  console.log(user);

  const handleLogout = async () => {
    try {
      await authService.signOut();
      toast.success("Logged out successfully");
      router.push("/");
      router.refresh();
    } catch {
      toast.error("Logout failed");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors  hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {loading ? (
              <span className="text-sm text-slate-500">Loading...</span>
            ) : user ? (
              <>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 rounded-full border px-2 py-1 hover:bg-slate-100"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>

                  <span className="hidden md:block">
                    {user?.name}
                  </span>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 top-14 w-52 rounded-xl border bg-white shadow-xl">

                    <Link
                      href={currentUser?.role === "admin"
                        ? "/dashboard/admin"
                        : "/dashboard" } className="flex items-center gap-2 px-4 py-3 hover:bg-slate-100"
                    >
                      <LayoutDashboard size={18} className="mr-2" />
                      Dashboard
                    </Link>

                    <Link
                      href="/dashboard/profile"
                      className="flex items-center gap-2 px-4 py-3 hover:bg-slate-100"
                    >
                      <User size={18} />
                      Profile
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>

                  </div>
                )}
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 hover:bg-slate-100"
                >
                  {link.label}
                </Link>
              ))}

              <hr className="my-3" />

              {user ? (
                <>

                    <Link
                      href={currentUser?.role === "admin"
                        ? "/dashboard/admin"
                        : "/dashboard" } className="flex items-center gap-2 px-4 py-3 hover:bg-slate-100"
                    >
                      <LayoutDashboard size={18} className="mr-2" />
                      Dashboard
                    </Link>

                  <button
                    onClick={async () => {
                      setMobileMenuOpen(false);
                      await handleLogout();
                    }}
                    className="px-4 py-3 text-left text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 hover:bg-slate-100"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 hover:bg-slate-100"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}