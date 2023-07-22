import TaskItem from "./listItem"
import s from "./list.module.scss"
const list = (props) =>{
    let listInfo = []
    switch(props.filter){
        case 'active': {
            // console.log('active')
            listInfo = props.tasks.filter((taskItem)=>{
            if(taskItem.status === "active"){
                return taskItem
                } else{
                    return null
                }
            })
            break
            }
            case 'completed': {
                listInfo = props.tasks.filter((taskItem)=>{
                if(taskItem.status === "completed"){
                    return taskItem
                    } else{
                        return null
                    }
                })
                break
                }
            default: {
                listInfo = props.tasks
                break
            }
        }
    const ListCollection = listInfo.map((listItem)=>{
        return <TaskItem
        key={listItem}
        status={listItem.status}
        text={listItem.text}
        />
    })

            return(
                <div className={s.list}>
                {ListCollection}
                </div>
            )
    }
export default list