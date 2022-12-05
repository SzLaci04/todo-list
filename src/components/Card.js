import style from "./Card.module.css";
import {useState} from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Card(props)
{
    const [modalIsOpen, setModalIsOpen] =useState(false);
    function deleteCard()
    {
        setModalIsOpen(true);
    }
    function CloseModal()
    {
        setModalIsOpen(false);
    }
    return (
        <div className="card w-auto ml-1 mt-1 border border-dark">
            <div className={"card-body "+style.kartya}>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text">{props.description}</p>
                <button className="btn btn-dark" onClick={deleteCard}>DELETE</button>
                {modalIsOpen && <Modal onCancel={CloseModal}  onConfirm={CloseModal}/>}
                {modalIsOpen && <Backdrop onCancel={CloseModal}/>}
            </div>
        </div>
    )
}
export default Card;