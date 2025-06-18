import { BrowserRouter, Routes, Route } from "react-router-dom";

import LockScreen from "./pages/lockScreen";
import Store from "./pages/home";
import FAQ from "./pages/support";
import Policies from "./pages/policies";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<LockScreen />} />
        <Route path="/support" element={<FAQ />} />
        <Route path="/policies" element={<Policies />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Store />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
