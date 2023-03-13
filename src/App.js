import Landing from "./pages/landingPage";
import Budget from "./features/budget/budgetApp";

function App() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Landing />;
  } else {
    return <Budget />;
  }
}

export default App;
