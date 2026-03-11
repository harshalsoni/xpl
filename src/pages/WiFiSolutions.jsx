import { Wifi, Home, Router } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import Card from '../components/ui/Card';

export default function WiFiSolutions() {
  return (
    <div>
      <HeroSection
        title="Wi-Fi Solutions"
        description="Get the best Wi-Fi experience throughout your home with our range of solutions."
        size="md"
        bgColor="bg-gradient-to-br from-cyan-600 to-blue-700"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              icon={Home}
              title="Whole Home Wi-Fi"
              description="Minimizes Wi-Fi dead zones with strategic cube locations. Smart-home friendly with easy-to-manage smartphone app. Only $10/month."
              to="/shop/wifi-solutions/whole-home-wi-fi"
            />
            <Card
              icon={Router}
              title="Wireless Router"
              description="Impeccable performance with incredible range and speeds. Security features and ease of use. Only $6/month."
              to="/shop/wifi-solutions/wireless-router"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-xplore-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-xplore-dark mb-4">24/7/365 Technical Support</h2>
          <p className="text-xplore-gray">
            Our Technical Support team is available 24 hours a day, seven days a week, three hundred and sixty-five
            days a year to answer any questions you may have.
          </p>
        </div>
      </section>
    </div>
  );
}
