import React from "react";

/**
 * Reusable dashboard statistic card.
 * Props:
 * - label: The metric name displayed to the user.
 * - value: The metric value displayed in the card.
 */
function DashboardCard({ label, value }) {
  return (
    <article className="dashboard-card">
      <p>{label}</p>
      <h2>{value}</h2>
    </article>
  );
}

/**
 * Small CRM dashboard example connected to the selected use case.
 */
export default function Dashboard() {
  const stats = [
    { label: "Customers", value: "1,248" },
    { label: "Orders", value: "326" },
    { label: "Revenue", value: "$48,620" },
  ];

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>CRM Dashboard</h1>
        <p>Overview of customers, orders, and revenue.</p>
      </header>

      <section className="dashboard-grid" aria-label="Sales statistics">
        {stats.map((stat) => (
          <DashboardCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
          />
        ))}
      </section>
    </main>
  );
}
