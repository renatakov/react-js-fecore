import s from "./modal.module.scss"
const Modal = (props) => {

    return(
        <div className={s.container}>
            <div className={s.container_window}>
                <div className={s.container_window_header}>
                    <p className={s.container_window_header_text}>Modal Wih</p>
                </div>
                <div className={s.container_window_body}>
                    <p className={s.container_window_body_text}>Confirm Wish</p>
                </div>
                <div className={s.container_window_body_btns}>
                <button onClick={props.cancelWish} className={`${s.container_window_body_btns_item} ${s.btn_cancel}`}>Cancel</button>
                <button onClick={props.confirmWish} className={`${s.container_window_body_btns_item} ${s.btn_buy}`}>Add To Wish</button>
                </div>
            </div>
        </div>
    )
}

export default Modal