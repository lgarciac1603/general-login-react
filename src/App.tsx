import { useSelector } from "react-redux";
import { RootState } from "./context/store";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";

import "./styles/_global.scss";

function App() {
  const userId = useSelector((state: RootState) => state.session.id);

  // TODO: be more strict with session verification
  return userId && userId.length > 1 ? <Dashboard /> : <Login />;
}

export default App;
