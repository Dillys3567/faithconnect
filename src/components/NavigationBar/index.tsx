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
      <ul className={styles.nav_leading}>
        <li>
          <Link
            to={Path.Dashboard}
            onClick={() => setIsOpen(false)}
            className={styles.menu_item}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to={Path.EnterMember}
            onClick={() => setIsOpen(false)}
            className={styles.menu_item}
          >
            Enter Member
          </Link>
        </li>
        <li>
          <Link
            to={Path.Details}
            onClick={() => setIsOpen(false)}
            className={styles.menu_item}
          >
            Details
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

// F2F7FF - white - rgb(242, 247, 255)
// 0B409C - blue - rgb(11, 64, 156)
// 10316B - navy - rgb(16, 49, 107)
// FDBE34 - yellow - rgb(253, 190, 52)
