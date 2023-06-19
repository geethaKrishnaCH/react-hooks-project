import styles from "./Button.module.css";
function Button({ children, onClick, type, disabled }) {
  return (
    <button
      type={type ? type : "button"}
      className={styles.button}
      onClick={onClick}
      disabled={disabled ? disabled : false}
    >
      {children}
    </button>
  );
}

export default Button;
