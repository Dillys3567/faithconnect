import AreaChartComponent from "../../components/AreaChart/AreaChart";
import BarChart from "../../components/BarChart/BarChart";
import LineChart from "../../components/LineChart/LineChart";
import SummaryCard from "../../components/SummaryCard";
import styles from "./style.module.scss";
const Dashboard = () => {
  return (
    <div className={styles.container}>
      <img src="src\assets\images\Connect.png" alt="logo"></img>
      <div className={styles.summary_cards}>
        <SummaryCard text="Total Members" number="10" type="people" />
        <SummaryCard text="Total Male" number="10" type="male" />
        <SummaryCard text="Total Female" number="10" type="female" />
      </div>
      {/* <div className={styles.graph_group}>
        <div className={styles.graph}>
          <AreaChartComponent />
        </div>
        <div className={styles.graph}>
          <BarChart />
        </div>
        <div className={styles.graph}>
          <LineChart />
        </div>
      </div> */}
    </div>
  );
};
export default Dashboard;
