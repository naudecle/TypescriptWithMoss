interface Props {
  children: string; //anything we are going to put between 2 balises
  Click: () => void;
}
const Button = ({ children, Click }: Props) => {
  return (
    <button className="btn btn-outline-danger" onClick={Click}>
      {children}
    </button>
  );
};

export default Button;
