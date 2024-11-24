import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/HomePage";
import Projects from "./routes/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
