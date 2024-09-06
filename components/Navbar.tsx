import Link from 'next/link';
import Image from 'next/image';
import { PiPlay } from 'react-icons/pi';

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#002240] p-4 mx-4 md:mx-8 w-[1422px] h-20 rounded-3xl absolute top-4 backdrop-blur-2xl bg-opacity-50">
        <ul className="flex items-center justify-center space-x-24 font-semi-bold text-4xl font-ocr">
          <img src="/chem.png" className="w-20 h-12" />
          
          {/* List Items with Text Glow Effect */}
          <li className="text-orange-500 cursor-pointer hover:text-orange-300 hover:[text-shadow:0_0_10px_#ff7518,0_0_20px_#ff7518,0_0_30px_#ff7518]">
            Home
          </li>
          <li className="text-orange-500 cursor-pointer hover:text-orange-300 hover:[text-shadow:0_0_10px_#ff7518,0_0_20px_#ff7518,0_0_30px_#ff7518]">
            Reaction
          </li>
          <li className="text-orange-500 cursor-pointer hover:text-orange-300 hover:[text-shadow:0_0_10px_#ff7518,0_0_20px_#ff7518,0_0_30px_#ff7518]">
            Make-Table
          </li>

          {/* Buttons with Glowing Hover Effect */}
          <button className="flex text-white text-2xl bg-orange-500 w-28 h-10 text-center items-center justify-center rounded-full hover:bg-orange-400 hover:[box-shadow:0_0_10px_#ff7518,0_0_20px_#ff7518]">
            Play <PiPlay />
          </button>
          <button className="flex text-white text-xl bg-orange-500 w-28 h-10 text-center items-center justify-center rounded-full hover:bg-orange-400 hover:[box-shadow:0_0_10px_#ff7518,0_0_20px_#ff7518]">
            Register
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
