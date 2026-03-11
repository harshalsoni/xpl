import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import Button from '../components/ui/Button';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', reason: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! This is a demo — in production, this would submit to the Xplore contact system.');
  };

  return (
    <div>
      <HeroSection
        title="Contact Us"
        description="Have questions? We're here to help. Reach out to our friendly team."
        size="md"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-xplore-dark mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-xplore-dark mb-1">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-xplore-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-xplore-dark mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-xplore-green"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-xplore-dark mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-xplore-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-xplore-dark mb-1">Contact Reason</label>
                  <select
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-xplore-green"
                  >
                    <option value="">Select a reason</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-xplore-dark mb-1">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-xplore-green"
                    required
                  />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-xplore-green-light rounded-xl p-6">
                <h3 className="font-bold text-xplore-dark mb-4 flex items-center gap-2">
                  <Phone size={20} className="text-xplore-green" /> Sales Inquiries
                </h3>
                <p className="text-xplore-gray mb-1">
                  Call: <a href="tel:18776053106" className="text-xplore-green font-medium">1-877-605-3106</a>
                </p>
                <div className="flex items-start gap-2 mt-3 text-sm text-xplore-gray">
                  <Clock size={16} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Mon to Fri 7 am to 11 pm ET</p>
                    <p>Weekends 8 am to 11 pm ET</p>
                  </div>
                </div>
              </div>

              <div className="bg-xplore-green-light rounded-xl p-6">
                <h3 className="font-bold text-xplore-dark mb-4 flex items-center gap-2">
                  <Phone size={20} className="text-xplore-green" /> Customer Service & Support
                </h3>
                <p className="text-xplore-gray mb-1">
                  Call: <a href="tel:18668416001" className="text-xplore-green font-medium">1-866-841-6001</a>
                </p>
                <div className="flex items-start gap-2 mt-3 text-sm text-xplore-gray">
                  <Clock size={16} className="mt-0.5 flex-shrink-0" />
                  <p>Available 24/7/365</p>
                </div>
              </div>

              <div className="bg-xplore-green-light rounded-xl p-6">
                <h3 className="font-bold text-xplore-dark mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-xplore-green" /> Xplore Head Office
                </h3>
                <p className="text-xplore-gray text-sm">
                  300 Lockhart Mill Road P.O. Box 9060,<br />
                  Woodstock, NB E7M 6B5
                </p>
              </div>

              <div className="bg-xplore-green-light rounded-xl p-6">
                <h3 className="font-bold text-xplore-dark mb-4 flex items-center gap-2">
                  <MapPin size={20} className="text-xplore-green" /> Corporate Office
                </h3>
                <p className="text-xplore-gray text-sm">
                  625 Cochrane Drive - Suite 1000,<br />
                  Markham, Ontario, L3R 9R9
                </p>
              </div>

              <div className="bg-xplore-green-light rounded-xl p-6">
                <h3 className="font-bold text-xplore-dark mb-4 flex items-center gap-2">
                  <Mail size={20} className="text-xplore-green" /> Other Inquiries
                </h3>
                <ul className="text-sm text-xplore-gray space-y-1">
                  <li>Business: <a href="tel:18556387381" className="text-xplore-green">1-855-638-7381</a></li>
                  <li>Careers: <a href="mailto:careers@xplore.ca" className="text-xplore-green">careers@xplore.ca</a></li>
                  <li>Media: <a href="mailto:media.inquiries@xplore.ca" className="text-xplore-green">media.inquiries@xplore.ca</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="py-12 bg-xplore-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-xplore-dark mb-4">Accessibility Center</h2>
          <p className="text-xplore-gray leading-relaxed mb-4">
            At Xplore, we're committed to ensuring our services are accessible to all customers.
            Whether you need accessible contact methods, documentation in alternate formats, or
            information on our Accessibility Policy, you can reach out using the following methods:
          </p>
          <ul className="text-xplore-gray space-y-2 list-disc list-inside">
            <li>Email: <a href="mailto:accessible@xplore.ca" className="text-xplore-green">accessible@xplore.ca</a></li>
            <li>Phone: 1-866-841-6001</li>
            <li>Chat with our support agents</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
