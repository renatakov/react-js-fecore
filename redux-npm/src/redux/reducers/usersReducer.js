const  CREATE_USER = 'CREATE_USER';
const UPDATE_NEW_USER = 'UPDATE_NEW_USER';
const DELETE_USER = 'DELETE_USER';

let initState = {
    users: [
        {
            id: 1,
            name: 'John',
            age: 21,
        },
        {
            id: 2,
            name: 'Alexander',
            age: 31,
        }
    ],
    countUsers: 2,
    newUser:{
        id: null,
        name: '',
        age: null,
    }
}

const createUser = (state) => {
    return {
        ...state,
            users:[
                ...state.users,
                {...state.newUser}
            ],
            newUser: {
                id: null,
                name: null,
                age: null,
            },
            countUsers: state.countUsers + 1
    }
}
/*
{…}}
countUsers: 2
newUser: 
age: null
id: null
name: ""
users: 
0: {id: 1, name: 'John', age: 21}
1: {id: 2, name: 'Alexander', age: 31}
*/
const updateNewUser = (state, action) => {
    console.log(state)
    if(action.inputForm === "name"){
        return{
            ...state,
                newUser:{
                    ...state.newUser,
                    id: state.users[state.users.length - 1].id + 1,
                    name: action.inputData
                }
        }
    }
    if(action.inputForm === "age"){
        return{
            ...state,
                newUser:{
                    ...state.newUser,
                    id: state.users[state.users.length - 1].id + 1,
                    age: action.inputData
                }

        }
    }
}

const deleteUser = (state, action) => {
    let updatedUsers = state.users.filter((user) =>{
    if(user.id !== action.idToDelete){
        return user
    }
    })
    return{
        ...state,
        users: [
            ...updatedUsers,
        ],
        countUsers: state.countUsers - 1
    }
}

export const usersReducer = (state = initState, action) =>{
    console.log(action)
    switch(action.type){
        case CREATE_USER:{
            return createUser(state)
        }
        case UPDATE_NEW_USER:{
            return updateNewUser(state, action)
        }
        case DELETE_USER:{
            return deleteUser(state, action)
        }
        default:{
            return state
        }
    }
}

export const createUserAC = ()=>({
        type: CREATE_USER
    })

export const updateNewUserAC = (inputForm, inputData) =>({
type: UPDATE_NEW_USER,
inputForm,
inputData
})

export const deleteUserAC = (idToDelete) =>({
        type: DELETE_USER,
        idToDelete
    })