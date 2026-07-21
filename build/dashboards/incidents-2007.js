// Reconstructed 2007 incident dataset for "Eyes on the Prize".
// Magnitudes are simulated to match what is legible in 5_BadDashboard.png:
// the clearly-readable severity bars (142/147/114/156/206 = 765 total) anchor
// everything; category/facility/trend profiles echo the visible bar shapes.
// BOTH redeemed dashboards read from this one object, so they provably show
// the same 765 incidents the villain showed.
window.INCIDENTS_2007 = {
  year: 2007,
  total: 765,
  priorYearTotal: 812,          // 2006 -> 2007 is down 5.8%
  priorYearHighSevRate: 0.41,   // severity mix got worse: 41% -> 47.3%

  // Severity is ORDINAL (NMI < Sev 1 < ... < Sev 4). Sum = 765.
  severity: [
    { key: "NMI",   label: "Near miss",   count: 142 },
    { key: "S1",    label: "Severity 1",  count: 147 },
    { key: "S2",    label: "Severity 2",  count: 114 },
    { key: "S3",    label: "Severity 3",  count: 156 },
    { key: "S4",    label: "Severity 4",  count: 206 },
  ],
  highSevKeys: ["S3", "S4"],    // "high severity" = Sev 3 + Sev 4 = 362 (47.3%)

  // Category totals sum to 765; `high` = Sev 3-4 within that category (sum = 362).
  categories: [
    { label: "Customer site",      total: 300, high: 120 },
    { label: "Spill / release",    total: 140, high: 85 },
    { label: "Injury / illness",   total: 120, high: 70 },
    { label: "Transportation",     total: 75,  high: 42 },
    { label: "Equipment / prop.",  total: 55,  high: 25 },
    { label: "Security",           total: 30,  high: 12 },
    { label: "Nonconformance",     total: 25,  high: 5 },
    { label: "Complaints",         total: 20,  high: 3 },
  ],

  // Facilities, sum = 765. Houston is the worst site.
  facilities: [
    { label: "Houston",     count: 210 },
    { label: "Cleburne",    count: 155 },
    { label: "Mobile",      count: 130 },
    { label: "Chattanooga", count: 110 },
    { label: "Omaha",       count: 95 },
    { label: "Sweetwater",  count: 65 },
  ],

  // Monthly: total per month sums to 765; open per month sums to 89 (backlog
  // concentrated in recent months). closed = total - open.
  months: [
    { m: "Jan", total: 52, open: 0 },
    { m: "Feb", total: 55, open: 0 },
    { m: "Mar", total: 60, open: 1 },
    { m: "Apr", total: 64, open: 1 },
    { m: "May", total: 70, open: 2 },
    { m: "Jun", total: 78, open: 2 },
    { m: "Jul", total: 74, open: 3 },
    { m: "Aug", total: 70, open: 4 },
    { m: "Sep", total: 66, open: 6 },
    { m: "Oct", total: 62, open: 12 },
    { m: "Nov", total: 58, open: 24 },
    { m: "Dec", total: 56, open: 34 },
  ],
  openTotal: 89,
  openHighSev: 34,              // of the 89 open, 34 are Sev 3-4
  goalPerMonth: 55,            // executive "on track?" reference

  // Contributing cause collapsed to top-5 + Other (sum = 765) — the direct
  // rebuttal to the villain's 13-slice 3D pie ("category overload").
  causes: [
    { label: "Inattention to detail",     count: 230 },
    { label: "Defective / failed part",   count: 150 },
    { label: "Requirement violation",     count: 120 },
    { label: "Other human error",         count: 95 },
    { label: "Insufficient practice",     count: 70 },
    { label: "Other",                     count: 100 },
  ],
};
