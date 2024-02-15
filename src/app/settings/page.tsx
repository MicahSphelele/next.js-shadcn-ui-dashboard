
import { PageTitle } from "@/components/page-title";
import { SettingsView } from "@/components/settings-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings"
};

type Props = {};

const  SettingsPage = ({}: Props) =>{
    return (
      <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Settings" />
      <SettingsView />
    </div>
    );
  };
  
  export default SettingsPage;