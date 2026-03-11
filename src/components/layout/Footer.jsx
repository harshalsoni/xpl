import { Link } from 'react-router-dom';
import { footerLinks } from '../../data/navigation';
import AddressLookup from '../ui/AddressLookup';

export default function Footer() {
  return (
    <footer>
      {/* Address Lookup */}
      <div className="bg-xplore-green-light py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-xplore-dark mb-2">
            Find out if Xplore Internet Service is in your neighbourhood.
          </h2>
          <p className="text-xplore-gray mb-6">
            Already an Xplore customer?{' '}
            <Link to="/my-account" className="text-xplore-green font-medium">
              Sign in now
            </Link>{' '}
            to check availability in your area.
          </p>
          <AddressLookup />
        </div>
      </div>

      {/* Footer links */}
      <div className="bg-xplore-dark text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Shop</h3>
              <ul className="space-y-2">
                {footerLinks.shop.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-gray-300 hover:text-white no-underline transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-gray-300 hover:text-white no-underline transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">About</h3>
              <ul className="space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-gray-300 hover:text-white no-underline transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact Xplore</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Sales: <a href="tel:18776053106" className="text-gray-300 hover:text-white no-underline">1-877-605-3106</a></li>
                <li>Support: <a href="tel:18668416001" className="text-gray-300 hover:text-white no-underline">1-866-841-6001</a></li>
                <li>Email: <a href="mailto:support@xplore.ca" className="text-gray-300 hover:text-white no-underline">support@xplore.ca</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Xplore Inc. "Xplore" is a trade-mark of Xplore Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
