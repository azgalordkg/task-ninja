import { CheckMark, HashTag } from "@/components/icons";

export const PURCHASE_PLANS = [
  {
    id: 0,
    duration: "6 months",
    price: 2,
    description: "Billed every 6 months",
  },
  {
    id: 1,
    duration: "12 months",
    price: 1.5,
    description: "Billed annually",
  },
  {
    id: 2,
    duration: "1 months",
    price: 3,
    description: "Billed monthly",
  },
];

export const PURCHASE_ADVANTAGES = [
  { id: 0, title: "Recurring Tasks" },
  { id: 1, title: "Unlimited Tag Creation", icon: HashTag },
  { id: 2, title: "Unlimited Daily Planning", icon: CheckMark },
];
