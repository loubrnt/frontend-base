import { Link } from 'react-router-dom';
import reactLogo from '../../assets/react.svg';
import { APP_NAME } from '../../config/config';
import { capitalize, getGreeting } from '../../utils/helpers';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={reactLogo} alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-indigo-600">
            {/* Using the config variable */}
            {APP_NAME} 
          </span>
        </Link>
      </div>
      
      <div className="text-sm text-gray-500">
        {/* Using the utility functions */}
        {getGreeting()}, {capitalize('user')}!
      </div>
    </nav>
  );
};

export default Navbar;