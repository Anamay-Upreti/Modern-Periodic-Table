import Link from 'next/link';
import Image from 'next/image';
import { PiPlay } from 'react-icons/pi';
import Reactions from './Reactions';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#002240] to-[#001f3d] p-4 mx-4 md:mx-8 w-[1422px] h-20 rounded-3xl absolute top-4 backdrop-blur-2xl bg-opacity-50">
      <ul className="flex items-center justify-center space-x-24 font-semibold text-4xl font-ocr">
        <img src="/chem.png" className="w-20 h-12" alt="Chemistry Logo" />

        {/* List Items with Text Glow Effect */}
        <li className="text-orange-500 cursor-pointer hover:text-orange-300 hover:scale-105 transition-transform">
          <Link href="/">Home</Link>
        </li>
        <li className="text-orange-500 cursor-pointer hover:text-orange-300 hover:scale-105 transition-transform">
          <Link href="/reactions">Reaction</Link>  {/* Add Link here */}
        </li>
        <li className="text-orange-500 cursor-pointer hover:text-orange-300 hover:scale-105 transition-transform">
          <Link href="/make-table">Make-Table</Link>
        </li>

        {/* Buttons with Glowing Hover Effect */}
        <button className="flex text-white text-2xl bg-orange-500 w-28 h-10 text-center items-center justify-center rounded-full hover:bg-orange-400 hover:shadow-md transition-shadow">
          Play <PiPlay className="ml-2" />
        </button>

        {/* Register Button with Link to Registration Page */}
        <Link href="/register">
          <button className="flex text-white text-xl bg-orange-500 w-28 h-10 text-center items-center justify-center rounded-full hover:bg-orange-400 hover:shadow-md transition-shadow">
            Register
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
