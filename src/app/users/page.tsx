

import { PageTitle } from "@/components/page-title";
import type { Metadata } from "next";
import { UsersDataTable } from "@/components/users-data-table";

export const metadata: Metadata = {
  title: "Users"
};

type Props = {};

const  UsersPage = ({}: Props) =>{
    return (
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Users" />
        <UsersDataTable />
      </div>
    );
  };
  
export default UsersPage;