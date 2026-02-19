import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { AutomationAudit } from './pages/AutomationAudit';
import { HowItWorks } from './pages/HowItWorks';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/audit" element={<AutomationAudit />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
