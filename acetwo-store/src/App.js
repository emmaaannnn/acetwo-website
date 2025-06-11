import { BrowserRouter, Routes, Route } from "react-router-dom";

import LockScreen from "./pages/lockScreen";
import Store from "./pages/store";
import FAQ from "./pages/FAQ";
import Policies from "./pages/policies";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LockScreen />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/policies" element={<Policies />} />
        <Route
          path="/store"
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
