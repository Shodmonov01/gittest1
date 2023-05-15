import Button from "./Button";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <h1 className="header__title">Library</h1>
        <Button text="Log in" />
      </div>
    </header>
  );
};

export default Header;
