import { ReactNode } from "react";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      <div className="max-w-md mx-auto h-full bg-main-background pb-[50px]">
        {children}
      </div>
    </div>
  );
}
