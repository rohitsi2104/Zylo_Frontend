import Routes from "./routes";
import { useUser } from "./store/UserContext";

function App() {
  const { isLoggedIn } = useUser();
  return (
    <Routes isLoggedIn={isLoggedIn}/>
  )
}

export default App