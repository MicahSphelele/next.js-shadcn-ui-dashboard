import { PageTitle } from "@/components/page-title";
import { Card, CardContent, CardProps } from "@/components/card";
import type { Metadata } from "next";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { BarChart } from "@/components/bar-chart";
import { SalesCard, SalesProps } from "@/components/sales-card";

export const metadata: Metadata = {
  title: "Home",
};

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "R45, 231.99",
    description: "+20.1 from last month",
    icon: DollarSign,
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    description: "+180.1 from last month",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "+12,234",
    description: "+180.1 from last month",
    icon: CreditCard,
  },
  {
    label: "Active now",
    amount: "+501",
    description: "+201 since last hour",
    icon: Activity,
  },
];

const salesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+R1,999.00"
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    saleAmount: "+R1,999.00"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+R39.00"
  },
  {
    name: "William Kim",
    email: "will@email.com",
    saleAmount: "+R299.00"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+R39.00"
  }
];

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((item, i) => (
          <Card
            key={i}
            label={item.label}
            amount={item.amount}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">You made 256 sales this month</p>
          </section>
          {salesData.map((item, i) => (
            <SalesCard
              key={i}
              email={item.email}
              name={item.name}
              saleAmount={item.saleAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
};

export default HomePage;
