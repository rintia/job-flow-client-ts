import Link from "next/link";
import Container from "../layout/Container";
import Logo from "../common/Logo";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-slate-900 text-slate-300">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 bg-white p-2">
              <Logo />
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              JobFlow connects talented freelancers with trusted clients.
              Discover projects, hire professionals, and grow your career.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/jobs" className="hover:text-white">
                  Browse Jobs
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Dashboard */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Dashboard
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-white"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/jobs/add"
                  className="hover:text-white"
                >
                  Post a Job
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/my-jobs"
                  className="hover:text-white"
                >
                  My Jobs
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/my-bids"
                  className="hover:text-white"
                >
                  My Bids
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-3 text-sm">
              <p>📍 Dhaka, Bangladesh</p>

              <p>
                ✉️{" "}
                <a
                  href="mailto:contact@jobflow.com"
                  className="hover:text-white"
                >
                  contact@jobflow.com
                </a>
              </p>

              <p>
                ☎️{" "}
                <a
                  href="tel:+8801700000000"
                  className="hover:text-white"
                >
                  +880 1700-000000
                </a>
              </p>

              <div className="flex gap-4 pt-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Facebook
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} JobFlow. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}