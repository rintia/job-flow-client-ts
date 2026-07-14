import Link from "next/link";
import Logo from "../common/Logo";
import Container from "./Container";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Jobs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
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

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-medium text-white transition "
            >
              Register
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}