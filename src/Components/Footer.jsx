import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20">
          {/* my-20 */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100021845257379"
                target="_blank"
              >
                <FaFacebook className="cursor-pointer" size={24} />
              </a>
              <a href="https://x.com/Amitkum73951900" target="_blank">
                <FaTwitterSquare className="cursor-pointer" size={24} />
              </a>
              <a
                href="https://www.instagram.com/amit_kashyapa_/"
                target="_blank"
              >
                <FaInstagramSquare className="cursor-pointer" size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm md:text-base lg:text-lg">
                &copy; 2024 Amit. All rights reserved.
              </p>
              <p className="text-sm md:text-base lg:text-lg">
                Supportive partner ❤️Radha
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
