import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Card({ title, description, to, icon: Icon, image, className = '' }) {
  const content = (
    <div className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col ${className}`}>
      {image && (
        <div className="h-48 bg-xplore-green-light flex items-center justify-center">
          <div className="text-xplore-green text-6xl font-bold opacity-20">{title?.[0]}</div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        {Icon && (
          <div className="w-12 h-12 rounded-lg bg-xplore-green-light flex items-center justify-center mb-4">
            <Icon className="text-xplore-green" size={24} />
          </div>
        )}
        <h3 className="text-lg font-bold text-xplore-dark mb-2">{title}</h3>
        {description && <p className="text-xplore-gray text-sm flex-1">{description}</p>}
        {to && (
          <div className="mt-4 flex items-center text-xplore-green font-medium text-sm">
            Learn More <ArrowRight size={16} className="ml-1" />
          </div>
        )}
      </div>
    </div>
  );

  if (to) {
    return <Link to={to} className="no-underline block h-full">{content}</Link>;
  }
  return content;
}
