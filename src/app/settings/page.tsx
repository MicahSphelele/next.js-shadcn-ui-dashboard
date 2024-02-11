import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings"
};

type Props = {};

const  SettingsPage = ({}: Props) =>{
    return (
      <div>This is the settings page</div>
    );
  };
  
  export default SettingsPage;