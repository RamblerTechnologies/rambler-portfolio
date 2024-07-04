import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-wrap items-center justify-between m-auto">
        <Link href="#about-us" className="h-auto w-auto flex items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="w-auto h-auto"
              priority
            />
            <div className="font-bold ml-[10px] hidden md:block text-gray-300">
              Rambler Technologies
            </div>
          </div>
        </Link>

        <div className="w-full md:w-auto h-full flex flex-col md:flex-row items-center justify-between md:mr-20 mt-2 md:mt-0">
          <div className="flex items-center justify-between w-full md:w-auto h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-[20px] py-[10px] rounded-full text-gray-200 space-x-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-5 mt-2 md:mt-0">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
