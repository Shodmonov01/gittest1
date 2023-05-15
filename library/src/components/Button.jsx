const Button = ({ text, secondClassName, handleClick }) => {
  return (
    <button onClick={handleClick} className={`btn + ${secondClassName}`}>
      {text}
    </button>
  );
};

export default Button;
