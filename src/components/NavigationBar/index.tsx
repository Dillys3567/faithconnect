import { useState } from "react";
import styles from "./style.module.scss";
import { Link, useLocation } from "react-router-dom";
import { Path } from "../../routes";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.container}>
      <ul className={styles["nav-leading"]}>
        <img alt="logo"></img>
        <li>
          <Link to={Path.Dashboard} onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to={Path.Forms} onClick={() => setIsOpen(false)}>
            Forms
          </Link>
        </li>
        <li>
          <Link to={Path.Details} onClick={() => setIsOpen(false)}>
            Details
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
