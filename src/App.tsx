import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/HomePage";

import Client from "./routes/Client";
import Recruiter from "./routes/Recruiter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>

          <Route path="client" element={<Client />} />
          <Route path="recruiter" element={<Recruiter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
