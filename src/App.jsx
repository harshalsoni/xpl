import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import FiveGUltra from './pages/FiveGUltra';
import FiveGGo from './pages/FiveGGo';
import Fibre from './pages/Fibre';
import Satellite from './pages/Satellite';
import Cottage from './pages/Cottage';
import Network from './pages/Network';
import Shop from './pages/Shop';
import InternetPackages from './pages/InternetPackages';
import HomePhone from './pages/HomePhone';
import WiFiSolutions from './pages/WiFiSolutions';
import WholeHomeWiFi from './pages/WholeHomeWiFi';
import WirelessRouter from './pages/WirelessRouter';
import XtraCare from './pages/XtraCare';
import ReferAFriend from './pages/ReferAFriend';
import ContactUs from './pages/ContactUs';
import Experts from './pages/Experts';
import CustomerStories from './pages/CustomerStories';
import Blog from './pages/Blog';
import Business from './pages/Business';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="5gultra" element={<FiveGUltra />} />
        <Route path="5g-go" element={<FiveGGo />} />
        <Route path="fibre" element={<Fibre />} />
        <Route path="fibre-lookup" element={<Fibre />} />
        <Route path="satellite-internet-canada" element={<Satellite />} />
        <Route path="cottage" element={<Cottage />} />
        <Route path="network" element={<Network />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/internet-packages" element={<InternetPackages />} />
        <Route path="shop/new-xplore-home-phone" element={<HomePhone />} />
        <Route path="shop/wifi-solutions" element={<WiFiSolutions />} />
        <Route path="shop/wifi-solutions/whole-home-wi-fi" element={<WholeHomeWiFi />} />
        <Route path="shop/wifi-solutions/wireless-router" element={<WirelessRouter />} />
        <Route path="shop/xtra-care" element={<XtraCare />} />
        <Route path="shop/refer-a-friend" element={<ReferAFriend />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="experts-in-rural-connectivity" element={<Experts />} />
        <Route path="connecting-rural-canadians" element={<CustomerStories />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<Blog />} />
        <Route path="business" element={<Business />} />
        <Route path="my-account" element={<NotFound />} />
        <Route path="support" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
