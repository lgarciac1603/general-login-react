import LoginPage from "./pages/Login";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "./context/store";
import DashboardPage from "./pages/Dashboard";
import { SessionPayload } from "./interfaces/session";
import { validateToken } from "./services/sessionsService";

import "./styles/_global.scss";

function App() {
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);

  const { id, token } = useSelector((state: RootState) => state.session);

  useEffect(() => {
    const payload: SessionPayload = { id, token };

    const checkTokenValidity = async () => {
      const isValid = await validateToken(payload);
      setIsTokenValid(isValid);
    };

    checkTokenValidity();
  }, []);

  console.log(isTokenValid);

  if (isTokenValid) {
    return <DashboardPage />;
  } else {
    return <LoginPage />;
  }
}

export default App;
