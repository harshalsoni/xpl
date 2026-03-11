import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items, title = 'Frequently Asked Questions (FAQs)' }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-xplore-light">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-xplore-dark mb-10">{title}</h2>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left font-medium text-xplore-dark hover:bg-gray-50 transition-colors"
              >
                <span className="pr-4">{item.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-xplore-green transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-xplore-gray leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
