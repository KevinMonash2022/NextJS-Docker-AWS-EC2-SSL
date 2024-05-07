import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex items-center justify-between mx-16 border rounded-3xl bg-gradient-to-r from-cyan-200 to-pink-200 p-4">
            <div className="mx-16">
                <Link href={"/"} className="flex-shrink-0">
                    <Image src="/pics/logo_kevin.png" alt="Logo" width={50} height={50} className="rounded-full hover:scale-125 transition-transform duration-300 ease-out" />
                </Link>
            </div>
            <div className="mx-16 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] to-[#de22bb] hidden md:block">
                {"I'm Kevin"}
            </div>
            <div className="flex space-x-8">
                <Link href="https://github.com/KevinMonash2022" target="_blank">
                    <Image className="bg-cyan-200 rounded-full p-1 scale-110 hover:scale-150 transition-transform duration-300 ease-out" src="/pics/github-icon.svg" alt="Github Icon" width={50} height={50} />
                </Link>
                <Link href="https://www.linkedin.com/in/kaixin-zhang-mel2022/" target="_blank">
                    <Image className="bg-cyan-200 rounded-full p-1 scale-110 hover:scale-150 transition-transform duration-300 ease-out" src="/pics/linkedin-icon.svg" alt="Linkedin Icon" width={50} height={50} />
                </Link>
            </div>
        </div>
    )
}

