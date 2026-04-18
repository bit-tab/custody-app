import type  { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {children}
    </div>
  );
}