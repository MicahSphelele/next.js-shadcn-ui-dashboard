import { OrdersDataTable } from "@/components/orders-data-table";
import { PageTitle } from "@/components/page-title";
import { UsersDataTable } from "@/components/users-data-table";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Orders"
};

type Props = {};

const  OrdersPage = ({}: Props) =>{
    return (
      <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Orders" />
      <OrdersDataTable />
    </div>
    );
  };
  
  export default OrdersPage;