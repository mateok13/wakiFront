import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '../pages/Home';
import AuthPage from '../pages/AuthPage';
import Profile from '../pages/Profile';
import Match from '../pages/Match';
import ScoutPlayers from '../pages/ScoutPlayers';
import Divisions from '../pages/Divisions';
import MyPredictions from '../pages/MyPredictions';
import Details from '../pages/Details';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import PersonalData from '../pages/PersonalData';
import Notifications from '../pages/Notifications';
import Help from '../pages/Help';
import Setting from '../pages/Setting';
import RewardsDivision from '../pages/RewardsDivision';
import PlayerDetails from '../pages/PlayerDetails';

export default function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* Rutas privadas */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/personal-data" element={<PersonalData />} />
          <Route path="/profile/notifications" element={<Notifications />} />
          <Route path="/profile/help" element={<Help />} />
          <Route path="/match" element={<Match />} />
          <Route path="/match/mypredictions" element={<MyPredictions />} />
          <Route path="/scout-players" element={<ScoutPlayers />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/details" element={<Details />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/rewards-division" element={<RewardsDivision />} />
          <Route path="/player-details" element={<PlayerDetails />} />
        </Route>

        {/* Ruta para la página de error 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

// Componente PageWrapper para animar cada vista
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}