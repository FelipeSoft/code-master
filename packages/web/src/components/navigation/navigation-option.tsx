import Link from "next/link";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

type Props = {
    label: string;
    icon: React.ReactNode;
    notification: number;
    active: boolean;
    openedPanel: boolean;
    variant: "default" | "destructive"
}

export const NavigationOption = ({ openedPanel, active, icon, label, notification, variant }: Props) => {
    return active ? (
        <li className="w-full transition-all">
            {openedPanel ? (
                <Link href="/" className={`${variant === "destructive" ? "dark:border-red-950 bg-gradient-to-t dark:from-red-800/10 dark:to-red-950" : "shadow-blue-950/50 shadow-xl dark:border-neutral-800 bg-gradient-to-t dark:from-neutral-800 dark:to-neutral-950"} rounded-lg p-3 flex items-center justify-between border`}>
                    <h1 className="flex items-center gap-2 dark:text-white text-black">
                        {icon}
                        {label}
                    </h1>
                    {notification !== 0 && openedPanel && (
                        <span className="text-xs rounded-full bg-black text-white dark:bg-white dark:text-black px-1.5">
                            <div className="sr-only">Notification from dashboard (number)</div>
                            12
                        </span>
                    )}
                    {notification !== 0 && !openedPanel && (
                        <span className="h-2 w-2 rounded-full bg-blue-600 absolute right-2 top-2">
                            <div className="sr-only">Notification from dashboard (number)</div>
                        </span>
                    )}
                </Link>
            ) : (
                <TooltipProvider skipDelayDuration={0} delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="/" className={`${variant === "destructive" ? "dark:border-red-950 bg-gradient-to-t dark:from-red-800/10 dark:to-red-950" : "shadow-blue-950/50 shadow-xl dark:border-neutral-800 bg-gradient-to-t dark:from-neutral-800 dark:to-neutral-950"} rounded-lg p-3 flex items-center justify-between border`}>
                                <h1 className="flex items-center gap-2 dark:text-white text-black">
                                    {icon}
                                    {openedPanel && label}
                                </h1>
                                {notification !== 0 && openedPanel && (
                                    <span className="text-xs rounded-full bg-black text-white dark:bg-white dark:text-black px-1.5">
                                        <div className="sr-only">Notification from dashboard (number)</div>
                                        12
                                    </span>
                                )}
                                {notification !== 0 && !openedPanel && (
                                    <span className="h-2 w-2 rounded-full bg-blue-600 absolute right-2 top-2">
                                        <div className="sr-only">Notification from dashboard (number)</div>
                                    </span>
                                )}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            {label}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </li>
    ) : (
        <li className="w-full transition-all">
            {
                openedPanel ? (
                    <Link href="/" className={`relative group rounded-lg transition-all p-3 flex items-center justify-between ${variant === "destructive" ? "hover:border hover:border-red-800/50 hover:bg-red-800/50" : ""}`}>
                        {openedPanel && variant !== "destructive" && <div className="absolute left-1 group-hover:opacity-100 opacity-0 transition-all h-2 w-2 rounded-full bg-blue-600"></div>}
                        <h1 className={`${openedPanel && "group-hover:pl-2"} transition-all flex items-center gap-2 ${variant === "destructive" ? "text-red-800 group-hover:text-white" : "text-neutral-500"}`}>
                            {icon}
                            {label}
                        </h1>
                        {notification !== 0 && openedPanel && (
                            <span className="text-xs rounded-full bg-black text-white dark:bg-white dark:text-black px-1.5">
                                <div className="sr-only">Notification from dashboard (number)</div>
                                12
                            </span>
                        )}
                        {notification !== 0 && !openedPanel && (
                            <span className="h-2 w-2 rounded-full bg-blue-600 absolute right-2 top-2">
                                <div className="sr-only">Notification from dashboard (number)</div>
                            </span>
                        )}
                    </Link >
                ) : (
                    <TooltipProvider skipDelayDuration={0} delayDuration={0}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="/" className={`relative group rounded-lg transition-all p-3 flex items-center justify-between ${variant === "destructive" ? "hover:border hover:border-red-800/50 hover:bg-red-800/50" : ""}`}>
                                    {openedPanel && variant !== "destructive" && <div className="absolute left-1 group-hover:opacity-100 opacity-0 transition-all h-2 w-2 rounded-full bg-blue-600"></div>}
                                    <h1 className={`${openedPanel && "group-hover:pl-2"} transition-all flex items-center gap-2 ${variant === "destructive" ? "text-red-800 group-hover:text-white" : "text-neutral-500"}`}>
                                        {icon}
                                        {openedPanel && label}
                                    </h1>
                                    {notification !== 0 && openedPanel && (
                                        <span className="text-xs rounded-full bg-black text-white dark:bg-white dark:text-black px-1.5">
                                            <div className="sr-only">Notification from dashboard (number)</div>
                                            12
                                        </span>
                                    )}
                                    {notification !== 0 && !openedPanel && (
                                        <span className="h-2 w-2 rounded-full bg-blue-600 absolute right-2 top-2">
                                            <div className="sr-only">Notification from dashboard (number)</div>
                                        </span>
                                    )}
                                </Link >
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>{label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )
            }
        </li>
    )
}   