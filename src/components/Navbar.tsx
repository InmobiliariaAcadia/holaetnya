import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif tracking-widest uppercase">
          Etnya
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-medium">
          <Link to="/" className="hover:opacity-50 transition-opacity">Properties</Link>
          <Link to="/" className="hover:opacity-50 transition-opacity">Community</Link>
          <Link to="/" className="hover:opacity-50 transition-opacity">About</Link>
          <button className="bg-[#1a1a1a] text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition-all">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col space-y-4 text-sm uppercase tracking-widest md:hidden shadow-xl"
          >
            <Link to="/" onClick={() => setIsOpen(false)}>Properties</Link>
            <Link to="/" onClick={() => setIsOpen(false)}>Community</Link>
            <Link to="/" onClick={() => setIsOpen(false)}>About</Link>
            <button className="bg-[#1a1a1a] text-white py-3 rounded-full">Book Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
