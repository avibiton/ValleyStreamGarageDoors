export interface Coupon {
  code: string;
  amount: string;
  service: string;
  subtitle: string;
  expiry: string;
  fine: string;
}

export const COUPONS: Coupon[] = [
  {
    code: "SPRING10",
    amount: "10% OFF",
    service: "Spring Replacement",
    subtitle: "Torsion · Extension · High-Cycle",
    expiry: "12/31/2026",
    fine: "Free estimate · Exp 12/31/2026 · Not valid with other offers",
  },
  {
    code: "NEWDOOR250",
    amount: "$250 OFF",
    service: "New Door Installation",
    subtitle: "Clopay · Amarr · Wayne Dalton",
    expiry: "12/31/2026",
    fine: "Free in-home estimate · Exp 12/31/2026 · Not valid with other offers",
  },
  {
    code: "OPENER99",
    amount: "$99 OFF",
    service: "New Opener Install",
    subtitle: "LiftMaster or Genie · Battery · MyQ",
    expiry: "12/31/2026",
    fine: "Exp 12/31/2026 · Not valid with other offers",
  },
  {
    code: "TUNEUP20",
    amount: "$20 OFF",
    service: "Annual Tune-Up",
    subtitle: "22-Point Safety Inspection",
    expiry: "12/31/2026",
    fine: "Exp 12/31/2026 · Not valid with other offers",
  },
  {
    code: "FREE911",
    amount: "FREE",
    service: "Service Call With Repair",
    subtitle: "Same-Day Emergency · 24/7",
    expiry: "12/31/2026",
    fine: "Exp 12/31/2026 · Not valid with other offers",
  },
];
