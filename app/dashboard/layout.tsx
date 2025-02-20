import ProtectedRoute from "@/Router/ProtectedRoute";
import { ReactNode } from "react";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ProtectedRoute>
      <Navbar />
      {children}
    </ProtectedRoute>
  );
};

export default DashboardLayout;
