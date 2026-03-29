import { motion } from 'motion/react';
import { properties } from '../data/properties';
import { Search, Calendar, Users, ArrowRight, Wifi, Shield, Zap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-[#f5f2ed]">
      {/* 1) Homepage Hero (Cinematic Video) */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            {/* Replace this URL with your hosted video link (e.g., from Cloudinary or Mux) */}
            <source src="https://cdn.coverr.co/videos/preview/720p/coverr-palm-trees-in-the-wind-5215.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-white"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block opacity-70">Boutique Remote Work Stays</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.85] mb-8 tracking-tighter">
              Live & Work <br /> <span className="italic">in Mérida</span>
            </h1>
            <p className="text-lg md:text-xl font-light mb-10 opacity-80 leading-relaxed max-w-lg">
              Curated residences for modern nomads. Experience the soul of Yucatán with professional standards.
            </p>
            
            {/* Search / Booking Bar */}
            <div className="bg-white p-2 rounded-full shadow-2xl flex flex-col md:flex-row items-center max-w-3xl text-ink">
              <div className="flex-1 flex items-center px-6 py-3 border-b md:border-b-0 md:border-r border-gray-100 w-full">
                <Search size={18} className="text-gray-400 mr-3" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Neighborhood</span>
                  <input type="text" placeholder="Santa Ana, Santiago..." className="text-sm outline-none w-full bg-transparent" />
                </div>
              </div>
              <div className="flex-1 flex items-center px-6 py-3 border-b md:border-b-0 md:border-r border-gray-100 w-full">
                <Calendar size={18} className="text-gray-400 mr-3" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Dates</span>
                  <span className="text-sm text-gray-400">Add dates</span>
                </div>
              </div>
              <div className="flex-1 flex items-center px-6 py-3 w-full">
                <Users size={18} className="text-gray-400 mr-3" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Guests</span>
                  <span className="text-sm text-gray-400">2 Guests</span>
                </div>
              </div>
              <button className="bg-[#1a1a1a] text-white p-4 rounded-full md:ml-2 hover:scale-105 transition-transform">
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3) Value Prop Strip */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: <Wifi size={24} />, title: "Fast Wi-Fi", desc: "Reliable fiber optic" },
              { icon: <Shield size={24} />, title: "Secure Stays", desc: "Professional management" },
              { icon: <Zap size={24} />, title: "Work Ready", desc: "Dedicated desk spaces" },
              { icon: <MapPin size={24} />, title: "Local Heart", desc: "Best neighborhoods" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-4 text-[#5A5A40]">{item.icon}</div>
                <h3 className="text-xs uppercase tracking-widest font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: "Mérida in Motion" Lifestyle Section */}
      <section className="py-32 bg-[#f5f2ed]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#5A5A40] mb-6 block">The Vibe</span>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-[1.1]">Mérida <br /> <span className="italic">in Motion</span></h2>
              <p className="text-lg text-gray-600 font-light mb-10 leading-relaxed">
                Experience the rhythm of the city. From morning coffee in Santa Ana to quiet afternoons in your design-led studio, Etnya is where productivity meets the soul of Yucatán.
              </p>
              <div className="flex items-center space-x-6">
                <button className="bg-[#1a1a1a] text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-opacity-80 transition-all">
                  Explore Lifestyle
                </button>
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center text-[10px] font-bold">
                    +50
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 relative">
              <div className="aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl relative group">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  {/* Swap this with your Google Drive direct link or hosted URL */}
                  <source src="https://cdn.coverr.co/videos/preview/720p/coverr-a-man-working-on-a-laptop-in-a-cafe-5658.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Floating Badge */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-xl flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Live from Mérida</span>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#5A5A40] rounded-full -z-10 opacity-20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 4) Property Cards (Outsite + Sonder Inspired) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#5A5A40] mb-4 block">Our Catalog</span>
            <h2 className="text-4xl md:text-5xl font-serif">Curated Residences</h2>
          </div>
          <Link to="/" className="text-xs uppercase tracking-widest font-bold border-b border-ink pb-1 hover:opacity-50 transition-opacity hidden md:block">
            View All 15 Properties
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.slice(0, 6).map((prop) => (
            <Link key={prop.id} to={`/property/${prop.id}`} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <img 
                  src={prop.images[0]} 
                  alt={prop.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                  {prop.neighborhood}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-serif mb-1">{prop.name}</h3>
                  <p className="text-sm text-gray-500 font-light">{prop.bedrooms} BR • {prop.guests} Guests</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold">${prop.pricePerNight}</span>
                  <span className="text-[10px] text-gray-400 uppercase block">per night</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5) Community Section (Outsite + Locke Inspired with Background Image) */}
      <section className="relative py-32 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/merida-community-bg/1920/1080" 
            alt="Community Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/community/800/800" 
                alt="Community" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#5A5A40] p-12 rounded-full hidden lg:block shadow-xl">
              <span className="text-4xl font-serif italic">Mérida</span>
            </div>
          </div>
          
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-6 block">The Experience</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">More than just <br /> a place to sleep.</h2>
            <p className="text-lg text-gray-300 font-light mb-10 leading-relaxed">
              We build spaces for those who live without borders. Whether you're here for a week or a month, you'll find a community of like-minded creatives and professionals, and a neighborhood that welcomes you as a local.
            </p>
            <ul className="space-y-6 mb-12">
              {[
                "Thoughtful common areas for quiet productivity",
                "Local neighborhood connections & guides",
                "Shared standards of taste and hospitality",
                "Curated events and social texture"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4">
                  <div className="w-1.5 h-1.5 bg-[#5A5A40] rounded-full" />
                  <span className="text-sm uppercase tracking-widest font-medium opacity-80">{item}</span>
                </li>
              ))}
            </ul>
            <button className="border border-white/30 px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-ink transition-all">
              Join the Community
            </button>
          </div>
        </div>
      </section>

      {/* NEW: Neighborhood Spotlight (Full-bleed Background Image) */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/merida-neighborhood/1920/1080" 
            alt="Mérida Neighborhood" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-3xl px-6">
          <span className="text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Explore the City</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-8 italic">The soul of Yucatán</h2>
          <p className="text-lg font-light mb-10 opacity-90 leading-relaxed">
            From the vibrant markets of Santiago to the quiet, tree-lined streets of Itzimná, Mérida is a city of layers. We help you peel them back.
          </p>
          <button className="bg-white text-ink px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:scale-105 transition-transform">
            View Neighborhood Guide
          </button>
        </div>
      </section>
    </div>
  );
}
