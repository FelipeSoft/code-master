import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ReactNode, useState } from "react";
import { NavigationMenu } from "../navigation/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Code, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

type Props = {
    children: ReactNode;
    title: string;
    active: "dashboard" | "modules" | "notes" | "forums" | "support" | "settings" | "appearance";
}

const MasterLayout = ({ children, active, title }: Props) => {
    const [opened, setOpened] = useState(false);

    return (
        <div>
            <main className="relative flex">
                <div>
                    <nav className="sticky top-[16px] w-max m-4 flex flex-col">
                        <div className={`flex gap-4 ${opened ? "w-[251.28px]" : ""}`}>
                            {/* <Link href="/profile" className=" border dark:border-neutral-700 bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-950 dark:hover:shadow-xl dark:hover:shadow-blue-950/50 transition-all rounded-lg p-4 flex items-center gap-4">
                                <div className="rounded-full border-2 dark:border-neutral-700 w-max p-1">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="">
                                    <h2>CodeMaster</h2>
                                    <p className="flex gap-2 items-center text-neutral-500">
                                        @code_master
                                        <span className="text-xs text-black bg-white rounded-full px-2.5 py-0.5">Pro</span>
                                    </p>
                                </div>
                            </Link> */}
                            <TooltipProvider skipDelayDuration={0} delayDuration={0}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button onClick={() => setOpened(!opened)} className="h-[50px] w-[50px] border dark:border-neutral-700 bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-950 dark:hover:shadow-xl dark:hover:shadow-blue-950/50 transition-all rounded-lg flex items-center justify-center gap-4">
                                            {
                                                opened ? <PanelLeftClose /> : <PanelLeftOpen />
                                            }
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">
                                        <p>{opened ? "Fechar o Menu" : "Abrir o Menu"}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            {
                                opened && <div className="flex items-center gap-2 font-semibold">
                                    <Code className="text-blue-600" />
                                    <p className="text-xl">CodeMaster</p>
                                </div>
                            }
                        </div>
                        <NavigationMenu openedPanel={opened} active={active} />
                    </nav>
                </div>
                <div style={{ width: opened ? "calc(100% - 300px)" : "calc(100% - 99px)", height: "400vh" }} className="transition-all duration-500 w-full border dark:border-neutral-700/70 bg-neutral-800/50 rounded-lg my-4">
                    <header className="h-[84.8px] border-b dark:border-neutral-700/70 relative">
                        <div className="py-4 px-8 w-full h-full flex items-center">
                            <h1 className="font-semibold text-xl">{title}</h1>
                        </div>
                        <div className="bg-black w-full h-[3px] absolute bottom-0"></div>
                    </header>
                    <section className="p-8 transition-all">
                        {children}
                    </section>
                </div>
            </main>
            <footer className="px-8 pb-8">
                Rodapé Humilde
            </footer>
        </div>
    )
}

export default MasterLayout;