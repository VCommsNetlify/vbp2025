import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
    return (
        <header className=" w-full h-16  py-2  bg-white">
            <nav className="px-4 md:px-0 mx-auto container flex items-center justify-between">
                {/* <div className="relative h-16 w-28 md:w-36">
                    <Image src={"/vconnect.png"} alt="VConnect Logo" fill={true} className="object-contain" />
                </div> */}
                <div className="relative h-12 w-20">
                    <Link href="https://vtube.net">
                        <Image src={"/vtube.png"} alt="VConnect Logo" fill={true} className="object-contain" />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
