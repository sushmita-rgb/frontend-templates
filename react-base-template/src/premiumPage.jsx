function PremiumCard({
  planId,
  tiername,
  pricing,
  pricingper,
  perks = [],
  notperks = [],
  mostPopular = false,
  className = "",
  onSubscribe,
}) {
  const handleSubscribe = () => {
    if (onSubscribe) {
      onSubscribe({
        planId,
        tiername,
        pricing,
        pricingper,
      });
    }
  };

  return (
    <div
      className={`w-96 p-6
        bg-[var(--primary-light)]
        border border-[var(--primary)]/30
        rounded-2xl
        transition-all duration-300
        shadow-[0_0_20px_rgba(22,163,74,0.2)]
        hover:shadow-[0_0_35px_rgba(22,163,74,0.35)]
        ${className}
        ${mostPopular ? "scale-105 lg:scale-110 z-10" : "scale-100"}
      `}
    >
      <div className="card-body">
        {mostPopular && (
          <span
            className="
              bg-[var(--primary)]
              text-white
              px-3 py-1
              rounded-full
              text-xs
              font-semibold
              shadow-[0_0_10px_rgba(22,163,74,0.7)]
            "
          >
            Most Popular
          </span>
        )}

        <div className="flex justify-between mt-2">
          <h2 className="text-3xl text-[var(--text-dark)] font-bold">
            {tiername}
          </h2>
          <span className="text-xl text-[var(--primary-dark)]">
            &#8377;{pricing}/{pricingper}
          </span>
        </div>

        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {perks.map((perk, i) => (
            <li key={`perk-${planId}-${i}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-green-700">{perk}</span>
            </li>
          ))}

          {notperks.map((perk, i) => (
            <li key={`notperk-${planId}-${i}`} className="opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-base-content/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="line-through text-[var(--primary-dark)]/60">
                {perk}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <button
            onClick={handleSubscribe}
            className="btn btn-primary btn-block"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Premium() {
  // 👉 backend later replace with API data
  const plans = [
    {
      planId: "elite",
      tiername: "Tier 1 (Elite)",
      pricing: 49,
      pricingper: "mo",
      mostPopular: true,
      perks: [
        "24/7 personal mentor",
        "Advanced AI analytics",
        "Team collaboration",
        "Cloud backups",
        "Custom enterprise themes",
      ],
      notperks: [],
      className: "lg:order-2 order-1",
    },
    {
      planId: "pro",
      tiername: "Tier 2 (Pro)",
      pricing: 19,
      pricingper: "mo",
      mostPopular: false,
      perks: [
        "Unlimited chat support",
        "Priority mentor access",
        "AI-powered recommendations",
        "Custom profile themes",
      ],
      notperks: ["Team collaboration", "Cloud backups"],
      className: "lg:order-1 order-2",
    },
    {
      planId: "basic",
      tiername: "Tier 3 (Basic)",
      pricing: 0,
      pricingper: "mo",
      mostPopular: false,
      perks: [
        "Limited chat support",
        "Community access",
        "Standard response time",
      ],
      notperks: [
        "Priority mentor access",
        "AI-powered recommendations",
        "Custom profile themes",
        "Team collaboration",
        "Cloud backups",
      ],
      className: "order-3 lg:order-3",
    },
  ];

  const handleSubscribe = (plan) => {
    console.log("Selected plan →", plan);

    // 👉 backend team will connect:
    // POST /api/subscription/create
    // with plan.planId
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-6 justify-center items-center">
      {plans.map((plan) => (
        <PremiumCard
          key={plan.planId}
          {...plan}
          onSubscribe={handleSubscribe}
        />
      ))}
    </div>
  );
}
