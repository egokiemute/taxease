import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-7xl xl:px-8 md:px-6 sm:px-3 px-4 mx-auto">
      {children}
    </div>
  );
};

export default Container;
