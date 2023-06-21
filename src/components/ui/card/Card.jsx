import styles from "./Card.module.css";

function Card({ children, cssClasses }) {
  return <div className={`${styles.card} ${cssClasses}`}>{children}</div>;
}

export default Card;
