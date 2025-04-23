import { Route, Routes } from "react-router-dom";
import LandingPage from "./routes/LandingPage";

<<<<<<< Updated upstream
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Placeholder routes for future pages */}
      <Route path="/competitions" element={<div className="p-6">Competitions</div>} />
      <Route path="/winners" element={<div className="p-6">Winners</div>} />
      <Route path="/referral" element={<div className="p-6">Referral</div>} />
    </Routes>
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
