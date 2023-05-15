import Button from "./Button";

const MainBody = ({clickEvent}) => {
    return(
    <main className="main">
      <div className="wrapper main__wrapper">
      <Button handleClick={clickEvent} text = "+ Add Book" secondClassName = "add-btn"/>
      <div className="book-collection"></div>
      </div>
    </main>
    );
};

export default MainBody