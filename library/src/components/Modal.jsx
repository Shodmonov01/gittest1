import Button from "./Button";

const Modal = ({active, clickEvent, submitEvent}) => {
    return (
    <>
      <div className={`modal ${active}`}>+
      <form onSubmit={submitEvent} className="modal__form" id="addBookForm">
        <h3 className="modal__form-title">Add new book</h3>

        <input
          type="text"
          className="modal__input"
          placeholder="Title"
          id="title"
        />
        <input
          type="text"
          className="modal__input"
          placeholder="Author"
          id="author"
        />
        <input
          type="number"
          className="modal__input"
          placeholder="Pages"
          id="pages"
        />

        <div className="is__read">
          <label htmlFor="isread">Have you read it?</label>
          <input className="modal__checkbox" id="isRead" type="checkbox" />
        </div>
        {/* <button className="btn submit-btn" id="add-button">Submit</button> */}
        <Button text="Submit" secondClassName="submit-btn" />
      </form>
      </div>
       <div onClick={clickEvent} className={`modal-layer ${active}`}></div>
    </>
    )
}

export default Modal;