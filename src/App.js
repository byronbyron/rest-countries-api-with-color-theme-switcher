import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Country from './pages/Country'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="country/*" element={<Country />} />
      </Routes>
    </div>
  );
}
