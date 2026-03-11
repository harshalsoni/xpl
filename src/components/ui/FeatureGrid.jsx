export default function FeatureGrid({ features, columns = 3 }) {
  const colClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-1 ${colClasses[columns] || 'md:grid-cols-3'} gap-8`}>
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div key={index} className="text-center p-6">
            {Icon && (
              <div className="w-14 h-14 rounded-full bg-xplore-green-light flex items-center justify-center mx-auto mb-4">
                <Icon className="text-xplore-green" size={28} />
              </div>
            )}
            <h3 className="text-lg font-bold text-xplore-dark mb-2">{feature.title}</h3>
            <p className="text-sm text-xplore-gray">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}
