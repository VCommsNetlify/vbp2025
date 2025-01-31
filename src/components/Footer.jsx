import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-[#181818] py-4 md:px-0 px-4 text-white">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Link href="#contact-us">Contact Us</Link>
                    <Link href="#faqs">FAQs</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <p>
                        <span className="hidden md:inline">Copyright</span> &copy; {new Date().getFullYear()} The V
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
