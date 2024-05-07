import React from 'react';
import Image from "next/image";
import Link from "next/link";


export default function Feed() {
    // text-center text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] to-[#3B82F6]
    return (
        <div className="my-16 mx-16 text-center text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#15ea9c] to-[#eb1781]">
            Hello!
            <br />
            <br />
            Try to use docker to deploy web to aws.
            <div className="my-16 justify-center flex items-center space-x-32">
                <Link href={"/"} className="flex-shrink-0">
                    <Image src="/pics/docker-logo-blue.png" alt="docker" width={250} height={250} className="rounded-full hover:scale-150 transition-transform duration-250 ease-out" />
                </Link>
                <Link href={"/"} className="flex-shrink-0">
                    <Image src="/pics/Amazon_Web_Services-Logo.wine.png" alt="aws" width={250} height={250} className="rounded-full hover:scale-150 transition-transform duration-250 ease-out" />
                </Link>
            </div>

        </div>
    )
}
