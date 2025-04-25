import { Route, Routes } from "react-router-dom";
import LandingPage from "./routes/LandingPage";

function App() {
  return (
    <div className="main min-h-screen bg-[linear-gradient(to_bottom,rgb(52,52,52),rgba(27,27,27,1))]">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Placeholder routes for future pages */}
        <Route path="/competitions" element={<div className="p-6">Competitions</div>} />
        <Route path="/winners" element={<div className="p-6">Winners</div>} />
        <Route path="/referral" element={<div className="p-6">Referral</div>} />
      </Routes>
    </div>
  );
}
export default App;
