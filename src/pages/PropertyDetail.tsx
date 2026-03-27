import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { motion } from 'motion/react';
import { 
  Wifi, 
  Wind, 
  Waves, 
  Coffee, 
  Utensils, 
  ShieldCheck, 
  MapPin, 
  Users, 
  Bed, 
  Bath,
  ArrowLeft,
  CheckCircle2,
  Info
} from 'lucide-react';
import { useEffect } from 'react';

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!property) return <div className="pt-32 text-center">Property not found</div>;

  return (
    <div className="bg-[#f5f2ed] pt-24 pb-20">
      {/* 6) Top Section (Marriott Inspired) */}
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-xs uppercase tracking-widest font-bold mb-8 hover:opacity-50 transition-opacity">
          <ArrowLeft size={16} className="mr-2" /> Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">{property.name}</h1>
            <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest font-bold text-gray-500 mb-8">
              <span className="flex items-center"><MapPin size={14} className="mr-2" /> {property.neighborhood}, Mérida</span>
              <span className="flex items-center"><Users size={14} className="mr-2" /> {property.guests} Guests</span>
              <span className="flex items-center"><Bed size={14} className="mr-2" /> {property.bedrooms} Bedrooms</span>
              <span className="flex items-center"><Bath size={14} className="mr-2" /> {property.bathrooms} Baths</span>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 gap-4 aspect-[16/10]">
              <div className="col-span-2 md:col-span-1 overflow-hidden rounded-2xl">
                <img src={property.images[0]} alt={property.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="hidden md:grid grid-rows-2 gap-4">
                <div className="overflow-hidden rounded-2xl">
                  <img src={property.images[1] || property.images[0]} alt={property.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="overflow-hidden rounded-2xl relative">
                  <img src={property.images[2] || property.images[0]} alt={property.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <button className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs uppercase tracking-widest font-bold">
                    View all photos
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Module */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl sticky top-32">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <span className="text-3xl font-serif">${property.pricePerNight}</span>
                  <span className="text-xs text-gray-400 uppercase ml-2">/ night</span>
                </div>
                <div className="text-xs text-[#5A5A40] font-bold uppercase tracking-widest">
                  Available
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-2 border border-gray-100 rounded-xl overflow-hidden">
                  <div className="p-4 border-r border-gray-100">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-1">Check-in</span>
                    <span className="text-sm">Add date</span>
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-1">Check-out</span>
                    <span className="text-sm">Add date</span>
                  </div>
                </div>
                <div className="p-4 border border-gray-100 rounded-xl">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 block mb-1">Guests</span>
                  <span className="text-sm">{property.guests} Guests</span>
                </div>
              </div>

              <button className="w-full bg-[#1a1a1a] text-white py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-opacity-90 transition-all mb-4">
                Reserve Stay
              </button>
              <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">You won't be charged yet</p>
              
              <div className="mt-8 pt-8 border-t border-gray-50 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 underline">Cleaning fee</span>
                  <span>$45</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 underline">Service fee</span>
                  <span>$25</span>
                </div>
                <div className="flex justify-between font-bold pt-4">
                  <span>Total</span>
                  <span>$255</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2">
            {/* 9) Long-form Description */}
            <section className="mb-16">
              <h2 className="text-2xl font-serif mb-6">About this home</h2>
              <div className="prose prose-gray max-w-none text-gray-600 font-light leading-relaxed space-y-4">
                <p>{property.description}</p>
                <p>Enjoy the perfect blend of colonial architecture and modern amenities. Our spaces are designed to inspire productivity and relaxation in equal measure.</p>
              </div>
            </section>

            {/* 7) Amenities Section (Marriott + Placemakr) */}
            <section className="mb-16">
              <h2 className="text-2xl font-serif mb-8">What this place offers</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {property.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="text-[#5A5A40]">
                      {amenity.includes('Wi-Fi') && <Wifi size={20} />}
                      {amenity.includes('Pool') && <Waves size={20} />}
                      {amenity.includes('A/C') && <Wind size={20} />}
                      {amenity.includes('Kitchen') && <Utensils size={20} />}
                      {amenity.includes('Desk') && <Coffee size={20} />}
                      {!['Wi-Fi', 'Pool', 'A/C', 'Kitchen', 'Desk'].some(k => amenity.includes(k)) && <CheckCircle2 size={20} />}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
              <button className="mt-10 border border-ink/20 px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-ink hover:text-white transition-all">
                Show all 25 amenities
              </button>
            </section>

            {/* 8) Bedroom Configuration (Marriott) */}
            <section className="mb-16">
              <h2 className="text-2xl font-serif mb-8">Where you'll sleep</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {property.bedroomDetails.map((room, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100">
                    <Bed size={24} className="text-[#5A5A40] mb-4" />
                    <h3 className="font-bold text-sm uppercase tracking-widest mb-1">{room.name}</h3>
                    <p className="text-sm text-gray-500">{room.bedType}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 10) "All stays include" (Marriott Inspired) */}
            <section className="mb-16 bg-white p-10 rounded-3xl border border-gray-100">
              <h2 className="text-2xl font-serif mb-8">All Etnya stays include</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "24/7 Support", desc: "Local team ready to help" },
                  { title: "High-speed Wi-Fi", desc: "Fiber optic for remote work" },
                  { title: "Professional Cleaning", desc: "Hotel-grade standards" },
                  { title: "Kitchen Essentials", desc: "Everything you need to cook" },
                  { title: "Premium Linens", desc: "High thread count comfort" },
                  { title: "Starter Kit", desc: "Organic bathroom amenities" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <ShieldCheck size={20} className="text-[#5A5A40] mt-1" />
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 11) Neighborhood Section (Sonder/Outsite) */}
            <section className="mb-16">
              <h2 className="text-2xl font-serif mb-6">The Neighborhood</h2>
              <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-8 bg-gray-200">
                {/* Placeholder for Map */}
                <div className="w-full h-full flex items-center justify-center text-gray-400 uppercase tracking-widest text-xs">
                  Interactive Map Component
                </div>
              </div>
              <h3 className="text-lg font-serif mb-4">{property.neighborhood}</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {property.location.areaDescription}
              </p>
            </section>

            {/* 12) Rules & Details (Placemakr/Plum Guide) */}
            <section className="pt-16 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-xl font-serif mb-6 flex items-center">
                    <Info size={20} className="mr-2" /> House Rules
                  </h2>
                  <ul className="space-y-4">
                    {property.rules.map((rule, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-3" />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-serif mb-6">Cancellations</h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Full refund for cancellations made within 48 hours of booking, if the check-in date is at least 14 days away. 50% refund for cancellations made at least 7 days before check-in.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
