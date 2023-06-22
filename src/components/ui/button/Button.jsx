import BootstrapButton from "react-bootstrap/Button";
function Button({ children, onClick, type, disabled, size, color, outline }) {
  const variant = outline ? `outline-${color}` : color;

  return (
    <BootstrapButton
      variant={variant}
      size={size}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </BootstrapButton>
  );
}

export default Button;
