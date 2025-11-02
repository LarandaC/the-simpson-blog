import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Personajes } from "./routes/Personajes";
import { NotFound } from "./routes/NotFound";
import { PersonajeDetalle } from "./routes/PersonajeDetalle";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/personajes/:id" element={<PersonajeDetalle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
