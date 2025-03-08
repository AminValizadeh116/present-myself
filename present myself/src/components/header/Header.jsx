import {Link} from 'react-router'
import Logo from './../../assets/2a-removebg.png'

function Header() {
  return (
    <div className="bg-gray-800 flex justify-center">
      <div className="flex items-center justify-between w-4xl">
        <ul className="flex justify-between w-100">
            <li className='text-amber-50 hover:font-semibold '><Link to='/contents'>contents</Link></li>
            <li className='text-amber-50 hover:font-semibold'><Link to='/services'>services</Link></li>
            <li className='text-amber-50 hover:font-semibold'><Link to='/blogs'>blogs</Link></li>
            <li className='text-amber-50 hover:font-semibold'><Link to='/about'>about</Link></li>
            <li className='text-amber-50 hover:font-semibold'><Link to='/'>home</Link></li>
        </ul>
        <div className="w-15 ">
           <img src={Logo} alt="logo" /> 
        </div>
        
      </div>
    </div>
  );
}

export default Header;
