import { Brush, DoorOpen, Headset, Layers3, LayoutGrid, Newspaper, NotebookPen, Power, PowerOff, Settings } from "lucide-react"
import { NavigationOption } from "./navigation-option"
import { ScrollArea } from "../ui/scroll-area";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
    active: "dashboard" | "modules" | "notes" | "forums" | "support" | "settings" | "appearance";
    openedPanel: boolean;
}

export const NavigationMenu = ({ active, openedPanel }: Props) => {
    return (
        <ScrollArea className="transition-all max-h-screen w-full overflow-y-auto">
            <ul className={`${openedPanel ? "w-full" : "w-[50px]"} transition-all duration-500 mt-10 flex flex-col`}>
                <li className="mb-3 px-3">
                    {openedPanel ? (
                        <h1 className="text-xs text-neutral-500 font-semibold">MENU</h1>
                    ) : (
                        <div className="mb-3 -mt-1.5 w-full dark:bg-neutral-700 h-[1px] bg-neutral-300"></div>
                    )}
                </li>
                <NavigationOption openedPanel={openedPanel} variant="default" active={active === "dashboard"} icon={<LayoutGrid />} label={`${"Dashboard"}`} notification={0} />
                <NavigationOption openedPanel={openedPanel} variant="default" active={active === "modules"} icon={<Layers3 />} label={`${"Módulos"}`} notification={12} />
                <NavigationOption openedPanel={openedPanel} variant="default" active={active === "notes"} icon={<NotebookPen />} label={`${"Anotações"}`} notification={0} />
            </ul>
            <ul className={`${openedPanel ? "w-full" : "w-[50px]"} transition-all duration-500 mt-10 flex flex-col`}>
                <li className="mb-3 px-3">
                    {openedPanel ? (
                        <h1 className="text-xs text-neutral-500 font-semibold">AJUDA</h1>
                    ) : (
                        <div className="mb-3 -mt-3 w-full dark:bg-neutral-700 h-[0.5px] bg-neutral-300"></div>
                    )}
                </li>
                <NavigationOption openedPanel={openedPanel} variant="default" active={active === "forums"} icon={<Newspaper />} label={`${"Fóruns"}`} notification={0} />
                <NavigationOption openedPanel={openedPanel} variant="default" active={active === "support"} icon={<Headset />} label={`${"Suporte"}`} notification={0} />
            </ul>
            <ul className={`${openedPanel ? "w-full" : "w-[50px]"} mt-10 flex flex-col`}>
                <NavigationOption openedPanel={openedPanel} variant="default" active={active === "settings"} icon={<Settings />} label={`${"Configurações"}`} notification={0} />
                <NavigationOption openedPanel={openedPanel} variant="default" active={active === "appearance"} icon={<Brush />} label={`${"Aparência"}`} notification={0} />
                {
                    openedPanel ? (
                        <button className="flex items-center justify-start hover:text-white hover:bg-red-800/50 transition-all rounded-lg gap-2 font-semibold bg-transparent text-red-800 p-3 mt-4">
                            <Power />
                            {openedPanel && "Encerrar Sessão"}
                        </button>
                    ) : (
                        <TooltipProvider skipDelayDuration={0} delayDuration={0}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button className="flex items-center justify-start hover:text-white hover:bg-red-800/50 transition-all rounded-lg gap-2 font-semibold bg-transparent text-red-800 p-3 mt-4">
                                        <Power />
                                        {openedPanel && "Encerrar Sessão"}
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Encerrar Sessão</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )
                }
            </ul >
        </ScrollArea >
    )
}