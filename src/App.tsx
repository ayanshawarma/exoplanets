import { Routes, Route, Link } from "react-router-dom";
import SkyView from "./pages/SkyView";
import BrowserPage from "./pages/Browser";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 flex justify-between bg-midnight text-star">
        <h1 className="text-2xl font-bold">Star</h1>
        <nav className="space-x-4">
          <Link to="/">Sky</Link>
          <Link to="/list">Exoplanets</Link>
        </nav>
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<SkyView />} />
          <Route path="list" element={<BrowserPage />} />
        </Routes>
      </main>
    </div>
  );
}
