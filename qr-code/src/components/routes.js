import { BrowserRouter, Routes, Route } from "react-router-dom";

import QrCodeGenerator from "./QrCodeGenerator";
import InterfaceQR from "./interface";
import InfoCard from "./infoCard";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QrCodeGenerator />} />
        <Route path="/:id/InterfaceQR" element={<InterfaceQR />} />
        <Route path="/:id" element={<InfoCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
