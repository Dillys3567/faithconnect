import AreaChartComponent from "../../components/AreaChart/AreaChart";
import BarChart from "../../components/BarChart/BarChart";
import LineChart from "../../components/LineChart/LineChart";
import styles from "./style.module.scss";
const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.graph_group}>
        <div className={styles.graph}>
          <AreaChartComponent />
        </div>
        <div className={styles.graph}>
          <BarChart />
        </div>
        <div className={styles.graph}>
          <LineChart />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
