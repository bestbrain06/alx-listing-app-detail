import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} StayFinder. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-400">
          Built with ❤️ using Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
