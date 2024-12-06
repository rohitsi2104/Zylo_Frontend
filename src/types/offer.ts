export interface OfferCardData {
  id: number;
  title: string;
  amount: string;
  discount: string;
  discountedAmount: string;
  duration: number;
  description: string;
  colorPalette?: "blue" | "orange" | "pinkPurple";
}