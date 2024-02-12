import { PageTitle } from "@/components/page-title";
import { Card, CardContent, CardProps } from "@/components/card";
import type { Metadata } from "next";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { BarChart } from "@/components/bar-chart";

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

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {
          cardData.map((item, i) => <Card 
          key={i} 
          label={item.label}
          amount={item.amount}
          description={item.description}
          icon={item.icon}
          />)
        }
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContent> 
            <p className="p-4 font-semibold">Overview</p>
            <BarChart />
          </CardContent>
          <CardContent></CardContent>
      </section>
    </div>
  );
};

export default HomePage;
