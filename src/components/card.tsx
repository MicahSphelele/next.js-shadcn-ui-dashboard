import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { HTMLAttributes } from "react";

export type CardProps = {
    label: string
    icon: LucideIcon
    amount: string
    description: string
}

export const Card = (props : CardProps) => {
    return (<CardContent>
        <section className="flex justify-between gap-2">
            <p className="text-sm">{props.label}</p>
            <props.icon className="h-4 w-4 text-gray-400" />
        </section>
        <section className="flex flex=col gap-1">
            <h2 className="text-2xl font-semibold">{props.amount}</h2>
            <p className="text-xs text-gray-500">{props.description}</p>
        </section>
    </CardContent>)
};

export const CardContent = (props : HTMLAttributes<HTMLDivElement>) =>
 (<div { ...props } className={cn("flex flex-col w-full gap-3 rounded-xl border p-5 shadow", props.className)} />);