import { UsersReducer } from "./reducers/usersReducer"

let store = {
    _state: {
        usersPage:[
            {
                id: 1,
                name: "Alex"
            },
            {
                id: 2,
                name: "John"
            }
        ],
        postsPage:[
            {
                id: 1,
                text: "Post 1"
            }
        ]
    },
    getState(){
        return this._state
    },
    dispatch(action){
        this._state = UsersReducer(this._state, action)
    }
}

export default store;