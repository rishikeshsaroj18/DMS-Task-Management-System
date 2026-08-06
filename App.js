import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EditDocument from "./pages/EditDocument";
import ViewDocument from "./pages/ViewDocument";
import AddTask from "./pages/AddTask";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/edit/:id" element={<EditDocument />} />
      <Route path="/view/:id" element={<ViewDocument />} />
      <Route path="/add" element={<AddTask />} />
    </Routes>
  );
}
