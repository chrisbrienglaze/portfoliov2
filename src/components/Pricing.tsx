import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$99',
      features: ['1 project', 'Basic support', '1 revision'],
    },
    {
      name: 'Pro',
      price: '$199',
      features: ['3 projects', 'Priority support', '3 revisions', 'Custom branding'],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited projects', '24/7 support', 'Unlimited revisions', 'Custom solutions'],
    },
  ];

  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <Check size={20} className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;