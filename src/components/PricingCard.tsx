import { OfferCardData } from "../types"

function PricingCard({ data }: { data: OfferCardData }) {
  const bgColors = {
    blue: "from-blue-50 to-blue-200 text-blue-900",
    orange: "from-orange-50 to-orange-200 text-orange-900",
    pinkPurple: "from-pink-50 to-purple-200 text-purple-900",
  };

  const selectedPalette = bgColors[data.colorPalette || "blue"];

  return (
    <div
      className={`max-w-sm rounded-lg overflow-hidden shadow-xl bg-gradient-to-r ${selectedPalette} p-6 transition-transform hover:scale-105 duration-300`}
    >
      <div className="text-center text-xl font-extrabold tracking-wider mb-2">
        {data.title}
      </div>
      <div className="text-center text-lg font-bold tracking-wider">
        {data.duration} DAYS
      </div>

      <div className="text-center mt-4">
        <div className="text-4xl font-extrabold">₹{data.discountedAmount}</div>
        <div className="text-sm font-semibold line-through">
          ₹{data.amount}
        </div>
        <div className="text-md font-bold">Save ₹{data.discount}</div>
      </div>

      <div className="mt-6 text-center bg-green-100 text-green-800 font-semibold py-2 px-4 rounded-full">
        {data.description}
      </div>

      <div className="mt-6 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg">
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default PricingCard;