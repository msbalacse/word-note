import ProtectedRoute from "@/Router/ProtectedRoute";

export default function NewEntry() {
  return (
    <ProtectedRoute>
      <h1>New Entry</h1>
    </ProtectedRoute>
  );
}
