import React from "react";

import SideMenu from "./components/SideMenu";
import Campaigns from "./pages/Campaigns/Campaigns";

const App = () => {
  return (
    <div className="bg-[#F6F9FF] h-auto flex flex-row">
      <SideMenu />
      <Campaigns />
    </div>
  );
};

export default App;
