import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

import { Customer } from "@/pages/Customer";
import { Home } from "@/pages/Home";
import { QrCode } from "@/pages/QrCode";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer/generate-qrcode" element={<Customer />} />
        <Route path="/qr-code/:customerId" element={<QrCode />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
