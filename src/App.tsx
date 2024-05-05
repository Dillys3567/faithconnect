import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Path } from "./routes";
import NavigationBar from "./components/NavigationBar";
import styles from "./App.module.scss";
import Dashboard from "./pages/Dashboard";
import EnterMember from "./pages/EnterMember";
import BulletinEntry from "./pages/BulletinEntry";
import DataEntry from "./pages/DataEntry";
import Trends from "./pages/Trends";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <NavigationBar />
        <Routes>
          <Route path={Path.Dashboard} element={<Dashboard />} />
          <Route path={Path.EnterMember} element={<EnterMember />} />
          <Route path={Path.BulletinEntry} element={<BulletinEntry />} />
          <Route path={Path.DataEntry} element={<DataEntry />} />
          <Route path={Path.Trends} element={<Trends />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
