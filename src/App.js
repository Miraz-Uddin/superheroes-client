import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navigator from "./components/Navigator";
import ParallelQueries from "./components/ParallelQueries";
import RqFriend from "./components/RqFriend";
import RqSuperhero from "./components/RqSuperhero";
import RqSuperheroes from "./components/RqSuperheroes";
import Superheroes from "./components/Superheroes";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/superheroes" element={<Superheroes />} />
          <Route path="/rq-superheroes" element={<RqSuperheroes />} />
          <Route path="/rq-superheroes/:heroId" element={<RqSuperhero />} />
          <Route path="/rq-friends/:friendId" element={<RqFriend />} />
          <Route path="/rq-parallel" element={<ParallelQueries />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
