import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif mb-6 uppercase tracking-widest">Etnya</h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Boutique stays for modern nomads in the heart of Mérida. We combine the comfort of home with the standards of premium hospitality.
            </p>
          </div>
          
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Explore</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">All Properties</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Community</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Neighborhoods</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.instagram.com/etnya.mid/" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:contact@etnya.com.mx" className="hover:text-gray-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400">Mérida, Yucatán, México</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 Etnya. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
