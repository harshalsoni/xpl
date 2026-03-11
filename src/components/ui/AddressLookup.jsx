import { useState } from 'react';
import { MapPin, Search } from 'lucide-react';

export default function AddressLookup({ compact = false }) {
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Checking availability for: ${address}\n\nThis is a demo - in production this would query the Xplore coverage API.`);
  };

  return (
    <form onSubmit={handleSubmit} className={`flex ${compact ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row'} gap-3 max-w-xl mx-auto`}>
      <div className="relative flex-1">
        <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-xplore-gray" />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address..."
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-xplore-green focus:border-transparent text-xplore-dark"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-6 py-3 bg-xplore-green text-white font-semibold rounded-lg hover:bg-xplore-green-dark transition-colors"
      >
        <Search size={18} />
        Check Availability
      </button>
    </form>
  );
}
