import type  { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6 bg-white dark:bg-gray-800 min-h-screen">
        {children}
      </main>
    </div>
  );
}