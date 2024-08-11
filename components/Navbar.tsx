import Link from 'next/link';
import Image from 'next/image';
import { PiPlay } from 'react-icons/pi';

const Navbar = () => {
  return (
    <>
    <nav className="bg-[#002240] p-4  mx-4 md:mx-8 w-[1422px] h-20 rounded-3xl absolute top-4 backdrop-blur-2xl bg-opacity-50  ">
      <ul className='flex items-center justify-center space-x-24 font-semi-bold text-4xl font-ocr '>
        <img 
         src="/chem.png"
         className='w-20 h-12'
         
        />
        <li className=' text-orange-500 hover:text-5xl hover:transition-all cursor-pointer'>Home</li>
        <li className=' text-orange-500 hover:text-5xl hover:transition-all cursor-pointer'>Reaction</li>
        <li className=' text-orange-500 hover:text-5xl hover:transition-all cursor-pointer'>Make-Table</li>
        
         <button className='flex text-white  text-2xl bg-orange-500 w-28 h-10 text-center items-center justify-center rounded-full hover:w-32 hover:h-12 hover:transition-all hover:text-3xl'>Play <PiPlay/> </button>
         <button className='flex text-white  text-xl bg-orange-500 w-28 h-10 text-center items-center justify-center rounded-full hover:w-32 hover:h-12 hover:transition-all hover:text-2xl'>Register  </button>

      </ul>
      
    </nav>
    </>
  );
};

export default Navbar;
