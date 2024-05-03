import styles from "./style.module.scss";
import { FaPeopleLine, FaPerson, FaPersonDress } from "react-icons/fa6";
interface Props {
  text: string;
  number: string;
  type: string;
}
const SummaryCard: React.FC<Props> = ({ text, number, type }) => {
  return (
    <div className={styles.container}>
      <div className={styles.details_column}>
        <span>{text}</span>
        <span>{number}</span>
      </div>
      {type == "people" ? (
        <FaPeopleLine className={styles.icon} />
      ) : type == "male" ? (
        <FaPerson className={styles.icon} />
      ) : (
        <FaPersonDress className={styles.icon} />
      )}
    </div>
  );
};
export default SummaryCard;
