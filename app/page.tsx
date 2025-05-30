import Image from "next/image";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import SmartFood from "./Components/Smart Food/Smart Food";
import WhatMakes from "./Components/What Makes/What Makes";
import Scan from "./Components/Scan./Scan";
import Integrate from "./Components/Integrate/Integrate";
import WhatYouGet from "./Components/What You Get/What You Get";
import Howitsworks from "./Components/How its works/How its works";
import Frequently from "./Components/Frequently/Frequently";
import OurTechnology from "./Components/Our Technology/Our Technology";
import Unlock from "./Components/Unlock/Unlock";

export default function Page() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <SmartFood />
      <div id="what-makes">
        <WhatMakes />
      </div>
      <div id="scan">
        <Scan />
      </div>
      <div id="integrate">
        <Integrate />
      </div>
      <WhatYouGet />
      <div id="how-its-works">
      <Howitsworks />
      </div>
      <Frequently />
      <OurTechnology />
      <Unlock />
    </>
  );
}