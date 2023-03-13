import { useSelector } from "react-redux";

import Landing from "./pages/landingPage";
import Budget from "./features/budget/budgetApp";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Landing />;
  } else {
    return <Budget />;
  }
}

export default App;
