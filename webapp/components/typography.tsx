import { ReactNode } from "react";

export const H1 = function ({ children }: { children: ReactNode }) {
  return <h1 className="text-4xl py-3">{children}</h1>;
};

export const H2 = function ({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl py-2">{children}</h2>;
};

export const H3 = function ({ children }: { children: ReactNode }) {
  return <h3 className="text-xl py-2">{children}</h3>;
};
