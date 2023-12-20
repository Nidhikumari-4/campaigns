import React from "react";

import SideMenu from "./components/SideMenu";
import Campaigns from "./pages/Campaigns";

const App = () => {
  return (
    <div className="bg-[#F6F9FF] max-w-[96rem] h-auto flex flex-row">
      <SideMenu />
      <Campaigns />
    </div>
  );
};

export default App;
