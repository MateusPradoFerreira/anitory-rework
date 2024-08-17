import { Outlet } from "react-router-dom";
import { MainHeader } from "../components/main-header";
import { MainSidebar } from "../components/main-sidebar";
import { cn } from "@/app/core/lib/utils";
import { useContext } from "react";
import { AppContext } from "../contexts/app-context";

export function MainLayout() {

  const { sidebarActive } = useContext(AppContext);

  return (
    <div className={cn("w-screen h-screen grid grid-cols-[64px_1fr] grid-rows-1 transition-all duration-300", sidebarActive && "grid-cols-[242px_1fr]")}>
      <MainSidebar />
      <div className="grid grid-rows-[64px_1fr]">
        <MainHeader />
        <main className="overflow-auto px-6 py-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
} 