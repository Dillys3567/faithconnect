import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Path } from "./routes";
import NavigationBar from "./components/NavigationBar";
import styles from "./App.module.scss";
import Dashboard from "./pages/Dashboard";
import Forms from "./pages/Forms";
import Details from "./pages/Details";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <NavigationBar />
        <Routes>
          <Route path={Path.Dashboard} element={<Dashboard />} />
          <Route path={Path.Forms} element={<Forms />} />
          <Route path={Path.Details} element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
