import { Route, Routes } from "react-router-dom";
import LandingPage from "./routes/LandingPage";

<<<<<<< Updated upstream
function App() {
  return (
    <div className="main min-h-screen bg-[linear-gradient(45deg,var(--pw-grad-start),var(--pw-grad-end))]">
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
=======
import RafflePage from "./rafflePage";

const App: React.FC = () => {
  return <RafflePage />;
};
export default App
>>>>>>> Stashed changes
