export default function PricingTable({ plans }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        <thead>
          <tr className="bg-xplore-green text-white">
            <th className="py-4 px-6 text-left font-semibold">Plan</th>
            {plans.map((plan, i) => (
              <th key={i} className="py-4 px-6 text-center font-semibold">{plan.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {plans[0]?.features.map((_, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="py-3 px-6 font-medium text-xplore-dark">
                {plans[0].features[rowIndex].label}
              </td>
              {plans.map((plan, colIndex) => (
                <td key={colIndex} className="py-3 px-6 text-center text-xplore-gray">
                  {plan.features[rowIndex].value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
