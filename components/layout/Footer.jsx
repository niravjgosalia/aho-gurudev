import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const navLinks = [
    { label: "About Pujya Gurudevshri", href: "#" },
    { label: "Celebrations", href: "#" },
    { label: "Social Impact", href: "#" },
  ];

  const resources = [
    { label: "Daily Offering", href: "#" },
    { label: "Testimonials", href: "#" },
    { label: "Event Calendar", href: "/events/0" },
    { label: "Contact Us", href: "#" },
  ];

  const socials = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <footer className="relative bg-[#5E2A29] text-[#F3F2DD] overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #C9A96A 50%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/tag.png"
                alt="Aho Gurudev"
                width={721}
                height={139}
                className="h-12 w-auto"
                style={{ filter: "brightness(1.3)" }}
              />
            </div>
            <p
              className="text-[15px] leading-[1.7] text-[#F3F2DD]/80 max-w-md"
              style={{ fontFamily: "var(--font-seasons), serif" }}
            >
              The grace of the Guru. The gratitude of the devotees.
            </p>
            <p className="text-[13px] leading-[1.7] text-[#F3F2DD]/60 max-w-md mt-3">
              A historic year-long celebration honouring 60 years of Pujya
              Gurudevshri's enlightened existence — across 60+ cities and 6
              continents.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 text-[12px] tracking-[0.25em] uppercase text-[#C9A96A]">
              <span className="h-px w-8 bg-[#C9A96A]/60" />
              26 Sep 2025 — 26 Sep 2026
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[12px] tracking-[0.3em] uppercase text-[#C9A96A] mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-[#F3F2DD]/85 hover:text-[#C9A96A] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[12px] tracking-[0.3em] uppercase text-[#C9A96A] mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-[#F3F2DD]/85 hover:text-[#C9A96A] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[12px] tracking-[0.3em] uppercase text-[#C9A96A] mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[#F3F2DD]/85 hover:text-[#C9A96A] transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#F3F2DD]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[12px] text-[#F3F2DD]/60 tracking-wide">
            © {new Date().getFullYear()} Shrimad Rajchandra Mission Dharampur.
            All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[12px] text-[#F3F2DD]/60">
            <Link href="#" className="hover:text-[#C9A96A] transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-[#C9A96A] transition-colors">
              Terms
            </Link>
            <span className="tracking-[0.3em] uppercase text-[#C9A96A]/80">
              Diamond Jubilee · 1966 — 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
