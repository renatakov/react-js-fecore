import {configureStore} from "@reduxjs/toolkit"
import notesReducer from "./reducers/notesReducer"
const store = configureStore({
    reducer: {
        notesPage: notesReducer
    }
})

export default store