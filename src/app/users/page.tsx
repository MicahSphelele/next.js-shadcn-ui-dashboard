import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users"
};

type Props = {};

const  UsersPage = ({}: Props) =>{
    return (
      <div>This is the users page</div>
    );
  };
  
  export default UsersPage;