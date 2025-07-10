import React from "react";
import Link from "next/link";
import { ChartLine, ChevronLast, LogOut } from "lucide-react";
import Image from "next/image";
import DashboardIcon from "@/public/image/dashboardIcon.svg";
import DashLogo from "@/public/image/dashboardLogo.svg";

function Sidebar() {
  return (
    <aside className="flex flex-col justify-between px-5 py-10 w-full max-w-[220px] h-screen rounded-3xl bg-white">
      <div>
        <div className="flex justify-between">
          <Image src={DashLogo} alt="" />
          <button className="p-1 rounded bg-[#f3f3f3] hover:bg-pink-light transition cursor-pointer">
            <ChevronLast />
          </button>
        </div>
      </div>
      <nav className="flex flex-col gap-9">
        <div className="flex flex-col gap-3">
          <span className="text-sm text-secondary mb-3 pl-1">Visão geral</span>
          <button className="flex gap-2 p-2  bg-pink-light rounded-lg">
            <Image src={DashboardIcon} alt="" />
            <Link href={"/dashboard"}>
              <span className="text-[16px]">Board</span>
            </Link>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-sm text-secondary mb-3 pl-1">Análise</span>
          <Link
            className="flex gap-2 p-2 rounded-lg hover:bg-pink-light transition cursor-pointer"
            href={"/analytics"}
          >
            {" "}
            <ChartLine />
            Resumo mensal
          </Link>
        </div>
      </nav>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-secondary mb-3 pl-1">Gerenciamento</span>
        <Link
          className="flex gap-2 p-2 rounded-lg hover:bg-pink-light transition cursor-pointer"
          href={"/login"}
        >
          <LogOut />
          Sair
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
