import ListContainer from "../../assets/List/ListContainer"
import ModalContainer from "../../assets/Modal/ModalContainer"
const Main = (props) => {
    
    return(
        <>
        <ListContainer  list={props.list}/>
        {props.isOpenModal && <ModalContainer
        title="Modal wish"
        text="Confirm add to wish"
        />}
        </>
    )
}

export default Main