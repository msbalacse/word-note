import ProtectedRoute from "@/Router/ProtectedRoute";
import Home from "./Component/Home";
import MyTable from "./Component/MyTable";
import NewEntry from "./Component/NewEntry";

export default function App() {
  console.log("home");
  console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
  return (
    <ProtectedRoute>
      <h1>Word Note</h1>
      <Home />
      <NewEntry />
      <MyTable />
    </ProtectedRoute>
  );
}
