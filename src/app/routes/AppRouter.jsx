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

export default function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* Rutas públicas */}
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/auth" element={<PageWrapper><AuthPage /></PageWrapper>} />

        {/* Rutas privadas */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
          <Route path="/profile/personal-data" element={<PageWrapper><PersonalData /></PageWrapper>} />
          <Route path="/profile/notifications" element={<PageWrapper><Notifications /></PageWrapper>} />
          <Route path="/profile/help" element={<PageWrapper><Help /></PageWrapper>} />
          <Route path="/match" element={<PageWrapper><Match /></PageWrapper>} />
          <Route path="/match/mypredictions" element={<PageWrapper><MyPredictions /></PageWrapper>} />
          <Route path="/scout-players" element={<PageWrapper><ScoutPlayers /></PageWrapper>} />
          <Route path="/divisions" element={<PageWrapper><Divisions /></PageWrapper>} />
          <Route path="/details" element={<PageWrapper><Details /></PageWrapper>} />
          <Route path="/setting" element={<PageWrapper><Setting /></PageWrapper>} />
          <Route path="/rewards-division" element={<PageWrapper><RewardsDivision /></PageWrapper>} />
          <Route path="/player-details" element={<PageWrapper><PlayerDetails /></PageWrapper>} />
        </Route>

        {/* Ruta para la página de error 404 */}
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}