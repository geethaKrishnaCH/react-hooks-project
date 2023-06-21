import Card from "../ui/card/Card";
import styles from "./Home.module.css";

function Home() {
  return (
    <Card cssClasses={styles.content}>
      <h1>Welcome back!</h1>
    </Card>
  );
}

export default Home;
