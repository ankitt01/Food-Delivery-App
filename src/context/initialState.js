import {fetchUser} from "../utils/fetchData"

const userInfo  = fetchUser() //fetched from the local storage

export const initialState = {
    user: userInfo
}