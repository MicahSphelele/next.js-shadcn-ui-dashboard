"use client";

import Image from "next/image";
import React from "react";

export type SalesProps = {
  name: string;
  email: string;
  saleAmount: string;
};

export const SalesCard = ({}: SalesProps) => {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
            <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
                <Image src="" alt="avater" width={200} height={200}/>
            </div>
      </section>
    </div>
  );
};
