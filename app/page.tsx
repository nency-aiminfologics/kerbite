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

// import FallingChips from "./Components/FallingChips/FallingChips";


export default function page() {
  return (
    <>
      <Navbar />
      <Home />
      <SmartFood />
      <WhatMakes />
      <Scan />
      <Integrate />
      <WhatYouGet />
      <Howitsworks />
      <Frequently />
      <OurTechnology />
      <Unlock />
      {/* <FallingChips/> */}

    </>
  );
}
