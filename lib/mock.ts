export const balance = {
  sats: 1250000,
  fiat: 2400,
};

export const transactions = [
  { id: "t1", type: "deposit", amount: 500000, date: "2025-10-10" },
  { id: "t2", type: "withdraw", amount: -200000, date: "2025-10-12" },
  { id: "t3", type: "deposit", amount: 300000, date: "2025-10-13" },
];

export const loans = [
  {
    id: "l1",
    status: "active",
    amount: 1000000,
    duration: "6 months",
    rate: 5.5,
  },
  {
    id: "l2",
    status: "closed",
    amount: 250000,
    duration: "3 months",
    rate: 4.0,
  },
];

export const analytics = {
  revenue: [
    { date: "2025-07", value: 1200 },
    { date: "2025-08", value: 1500 },
    { date: "2025-09", value: 1800 },
    { date: "2025-10", value: 2400 },
  ],
  repayRate: 92,
};
