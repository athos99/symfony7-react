import React from "react";
import {Header} from "./Header";

export function HomePage() {
  return (
      <>
          <Header></Header>
    <div className="text-center p-5 text-xl">
      <h1 className="text-xl text-slate-900">Welcome to React Tools!</h1>
    </div>
      </>
  );
}
