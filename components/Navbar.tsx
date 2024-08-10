import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#002240] p-4  mx-4 md:mx-8 w-[1422px] h-20 rounded-3xl absolute top-4 backdrop-blur-2xl bg-opacity-50  ">
      <ul className='flex items-center justify-center space-x-24 font-semi-bold text-4xl'>
        <li className=' text-orange-500 '>Home</li>
        <li className=' text-orange-500 '>Reaction</li>
        <li className=' text-orange-500 '>Make Table</li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
