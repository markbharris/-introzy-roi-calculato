import React, { useState } from "react";

export default function App() {
  const [partners, setPartners] = useState(100);
  const [engagement, setEngagement] = useState(10);
  const [deals, setDeals] = useState(2);
  const [sale, setSale] = useState(1000);

  const [pPartners, setPPartners] = useState(120);
  const [pEngagement, setPEngagement] = useState(20);
  const [pDeals, setPDeals] = useState(3);

  const calcRevenue = (p, e, d) => p * (e / 100) * d * sale;

  const baseline = calcRevenue(partners, engagement, deals);
  const projected = calcRevenue(pPartners, pEngagement, pDeals);
  const lift = projected - baseline;

  return (
    <div style={{ fontFamily: "Arial", padding: 40 }}>
      <h1>Introzy ROI Calculator</h1>

      <h2>Baseline</h2>
      <input value={partners} onChange={e => setPartners(e.target.value)} /> Partners<br/>
      <input value={engagement} onChange={e => setEngagement(e.target.value)} /> Engagement %<br/>
      <input value={deals} onChange={e => setDeals(e.target.value)} /> Deals / Partner<br/>
      <input value={sale} onChange={e => setSale(e.target.value)} /> Avg Sale ($)<br/>

      <h2>Projected</h2>
      <input value={pPartners} onChange={e => setPPartners(e.target.value)} /> Partners<br/>
      <input value={pEngagement} onChange={e => setPEngagement(e.target.value)} /> Engagement %<br/>
      <input value={pDeals} onChange={e => setPDeals(e.target.value)} /> Deals / Partner<br/>

      <h2>Results</h2>
      <p>Baseline Revenue: ${baseline.toLocaleString()}</p>
      <p>Projected Revenue: ${projected.toLocaleString()}</p>
      <p><b>Monthly Lift: ${lift.toLocaleString()}</b></p>
    </div>
  );
}
