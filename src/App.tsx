import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/HomePage";
import AboutMe from "./routes/HomePage/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
