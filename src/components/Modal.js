import style from "./Modal.module.css";

function Modal(props)
{
    function cancelHandler()
    {
        props.onCancel();
    }

    function confirmHandler()
    {
        props.onConfirm();
    }
    return(
        <div className={style.modal}>
            <h3>Biztos törölni akarod?</h3>
            <button className={"btn btn-primary "+style.btn_yes} onClick={cancelHandler}>Igen</button>
            <button className={"btn btn-danger "+ style.btn_no} onClick={confirmHandler}>Nem</button>
        </div>
    );
}

export default Modal;