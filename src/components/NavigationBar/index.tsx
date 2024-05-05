import { useState } from "react";
import styles from "./style.module.scss";
import { Link, useLocation } from "react-router-dom";
import { Path } from "../../routes";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState("Dashboard");

  const onMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.container}>
      <ul className={styles.nav_leading}>
        <li>
          <Link
            to={Path.Dashboard}
            onClick={() => {
              setIsOpen(false);
              setSelected("Dashboard");
            }}
            className={
              selected == "Dashboard" ? styles.selected : styles.menu_item
            }
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to={Path.EnterMember}
            onClick={() => {
              setIsOpen(false);
              setSelected("Enter Member");
            }}
            className={
              selected == "Enter Member" ? styles.selected : styles.menu_item
            }
          >
            Enter Member
          </Link>
        </li>
        <li>
          <Link
            to={Path.DataEntry}
            onClick={() => {
              setIsOpen(false);
              setSelected("Data Entry");
            }}
            className={
              selected == "Data Entry" ? styles.selected : styles.menu_item
            }
          >
            Data Entry
          </Link>
        </li>
        <li>
          <Link
            to={Path.BulletinEntry}
            onClick={() => {
              setIsOpen(false);
              setSelected("Bulletin Entry");
            }}
            className={
              selected == "Bulletin Entry" ? styles.selected : styles.menu_item
            }
          >
            Bulletin Entry
          </Link>
        </li>
        {/* <li>
          <Link
            to={Path.Trends}
            onClick={() => {
              setIsOpen(false);
              setSelected("Trends");
            }}
            className={
              selected == "Trends" ? styles.selected : styles.menu_item
            }
          >
            Trends
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavigationBar;

// F2F7FF - white - rgb(242, 247, 255)
// 0B409C - blue - rgb(11, 64, 156)
// 10316B - navy - rgb(16, 49, 107)
// FDBE34 - yellow - rgb(253, 190, 52)
