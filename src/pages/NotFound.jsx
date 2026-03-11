import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-xplore-green mb-4">404</h1>
        <h2 className="text-2xl font-bold text-xplore-dark mb-4">Page Not Found</h2>
        <p className="text-xplore-gray mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Button to="/">Return to Home</Button>
      </div>
    </div>
  );
}
