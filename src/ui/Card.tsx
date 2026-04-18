import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="p-4 rounded-xl shadow border">
      {children}
    </div>
  );
}