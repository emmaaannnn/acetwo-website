import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LockScreen from "./pages/lockScreen";
import Store from "./pages/home";
import FAQ from "./pages/support";
import Policies from "./pages/policies";
import ProtectedRoute from "./components/protectedRoute";

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectTo = params.get("redirect");
    if (redirectTo) {
      navigate(redirectTo);
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename="/">
      <RedirectHandler />
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
