import Documentation from "@/components/documentation";
import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";
import Logo from '../../public/assets/resource/logo_principal.svg'

export default function Template({children}: Readonly<{children: ReactNode}>){
    return (
        <main className="bg-hero-primary bg-cover w-100 h-lvh flex flex-col gap-4 justify-center items-center">
            <Logo />
            <section className="bg-primary w-[75%] h-[75%] rounded-[20px]">
                <div className="flex flex-row p-2 gap-2 relative h-[100%]">
                    <div className="flex-[.2] md:flex-[.1]">
                        <Sidebar />
                    </div>
                    <div className="flex-1 bg-secondary rounded-[20px] p-2">
                        {children}
                    </div>
                    <div className="w-[470px] bg-secondary rounded-[20px] p-2">
                        <Documentation />
                    </div>
                </div>
            </section>
        </main>
    )
} 