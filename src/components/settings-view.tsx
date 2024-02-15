"use client";

import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table"

type Setting = {
    category: string;
    value: string | number | boolean;
  }

export const SettingsView  = () => {
    return (<DataTable columns={columns} data={data} /> )
};

const columns: ColumnDef<Setting>[] = [
    {
      accessorKey: "category",
      header: "Category"
    },
    {
      accessorKey: "value",
      header: "Value"
    }
  ];
  const data: Setting[] = [
    {
      category: "Account",
      value: true
    },
    {
      category: "Notifications",
      value: false
    },
    {
      category: "Language",
      value: "English"
    },
    {
      category: "Theme",
      value: "Dark"
    }
  ];