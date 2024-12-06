import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { OfferCardData } from "../types/offer";
import { SVGDecorations, PricingCard } from "../components";
import { Loadable } from "../components";

const colors: OfferCardData["colorPalette"][] = ["blue", "orange", "pinkPurple"];

function transformOffersData(apiData: any[]): OfferCardData[] {
  return apiData.map((plan, index) => {
    const amount = parseFloat(plan.amount);
    const discountPercentage = parseFloat(plan.discount);
    const discount = Math.round((amount * discountPercentage) / 100).toLocaleString();
    const discountedAmount = Math.round((amount - (amount * discountPercentage) / 100)).toLocaleString();
    const colorPalette = colors[index % colors.length];

    return {
      id: index + 1,
      title: plan.title,
      amount: amount.toLocaleString(),
      discount,
      discountedAmount,
      duration: plan.duration,
      description: plan.description,
      colorPalette,
    };
  });
}

function OffersCard() {
  const { request, loading, error } = useApi();
  const [offersData, setOffersData] = useState<OfferCardData[]>([]);

  const fetchOffersData = async () => {
    const response = await request("get", "/offers/");
    if (response.data) {
      console.log("Data:", response.data);
      const data = transformOffersData(response.data);
      setOffersData(data);
    } else {
      console.log("Error:", response.error);
    }
  };

  useEffect(() => {
    fetchOffersData();
  }, []);

  return (
    <section className="min-h-screen py-12 bg-gray-100">
      <div className="container mx-auto text-center relative">
        <h2 className="text-5xl font-extrabold mb-12 text-gray-800 tracking-wider">
          Zylo Special Offers
        </h2>
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <SVGDecorations />
        </div>

        {loading ? (
          <div className="text-2xl font-bold text-gray-500">Loading offers...</div>
        ) : error ? (
          <div className="text-2xl font-bold text-red-500">Failed to load offers. Please try again later.</div>
        ) : (
          <div className="relative flex flex-wrap justify-center gap-10 p-8 transition-all ease-in-out">
            {offersData.length === 1 ? (
              <div className="w-full flex justify-center">
                <PricingCard data={offersData[0]} />
              </div>
            ) : (
              offersData.map((data, index) => (
                <PricingCard key={index} data={data} />
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Loadable(OffersCard);