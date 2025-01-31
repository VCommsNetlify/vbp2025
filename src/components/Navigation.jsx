import Image from "next/image";
import React from "react";

const Navigation = () => {
    return (
        <header className=" w-full h-24  py-4  bg-white">
            <nav className="px-4 md:px-0 mx-auto container flex items-center justify-between">
                {/* <div className="relative h-16 w-28 md:w-36">
                    <Image src={"/vconnect.png"} alt="VConnect Logo" fill={true} className="object-contain" />
                </div> */}
                <div className="relative h-20 w-20 md:w-24">
                    <Image src={"/vtube.png"} alt="VConnect Logo" fill={true} className="object-contain" />
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
