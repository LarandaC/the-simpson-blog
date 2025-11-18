import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Personajes } from "./routes/Personajes";
import { NotFound } from "./routes/NotFound";
import { PersonajeDetalle } from "./routes/PersonajeDetalle";
import "./index.css";
import { Location } from "./routes/Location";
import { Episode } from "./routes/Episode";
import { TheSimpsonApi } from "./routes/TheSimpsonApi";

function App() {
  return (
    <>
      <BrowserRouter basename="/the-simpson-blog">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/personajes/:id" element={<PersonajeDetalle />} />
          <Route path="/lugares" element={<Location />} />
          <Route path="/episodios" element={<Episode />} />
          <Route path="/the-simpsons-api" element={<TheSimpsonApi />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
