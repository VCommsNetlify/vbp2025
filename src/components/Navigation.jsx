import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
    return (
        <header className="w-full h-16 bg-[#bbc9ff] flex items-center">
            <nav className="px-4 md:px-0 mx-auto container flex items-center justify-end">
                <div className="relative h-10 w-10 md:h-12 md:w-12">
          <Image 
            src={"/vtube.png"} 
            alt="VConnect Logo" 
            fill={true} 
            className="object-contain" 
          />
        </div>
      </nav>
    </header>
    );
};

export default Navigation;
