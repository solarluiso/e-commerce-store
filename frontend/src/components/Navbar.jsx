import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
      <div className="container mx-auto px-4 py-3">
        <Link
          to="/"
          className="text-2xl font-bold text-emerald-400 flex items-center space-x-2"
        >
          e-commerce
        </Link>
        <nav className="flex flex-wrap items-center gap-4">
          <Link>Home</Link>
          <Link>Cart/Dashboard</Link>
          <Link>Sign Up/Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
