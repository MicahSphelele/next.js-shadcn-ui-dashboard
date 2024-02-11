import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders"
};

type Props = {};

const  OrdersPage = ({}: Props) =>{
    return (
      <div>This is the orders page</div>
    );
  };
  
  export default OrdersPage;