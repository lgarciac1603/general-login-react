import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./context/store";
import { SessionPayload } from "./interfaces/session";
import { validateToken } from "./services/sessionsService";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";

import "./styles/_global.scss";

function App() {
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { id, token } = useSelector((state: RootState) => state.session);

  useEffect(() => {
    if (id && token) {
      const payload: SessionPayload = { id, token };
      const checkTokenValidity = async () => {
        try {
          const isValid = await validateToken(payload);
          setIsTokenValid(isValid);
        } catch (err) {
          setError("Error validating token. Please try again later.");
          setIsTokenValid(false);
        }
      };
      checkTokenValidity();
    } else {
      setIsTokenValid(false);
    }
  }, [id, token]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (isTokenValid === null) {
    return <div>Loading...</div>;
  }
  return isTokenValid ? <DashboardPage /> : <LoginPage />;
}

export default App;
