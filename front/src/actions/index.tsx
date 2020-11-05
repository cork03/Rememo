// modal

export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

const showModal = ({component}: any) => {
    return {
        type: SHOW_MODAL,
        payload: component
    }
}
const hideModal = () => {
    return {
        type: HIDE_MODAL
    }
}

// fetchCards

export const FETCH_CARDS_REQUESTED = "FETCH_CARDS_REQUESTED"
export const FETCH_CARDS_SUCCEEDED = "FETCH_CARDS_SUCCEEDED"
export const FETCH_CARDS_FAILED = "FETCH_CARDS_FAILED"

const fetchCards = (cards: any) => {
    return {type: FETCH_CARDS_REQUESTED,payload: cards}
}


// createUser

export const CREATE_USER_REQUESTED = "CREATE_USER_REQUESTED"
export const CREATE_USER_SUCCEEDED = "CREATE_USER_SUCCEEDED"
export const CREATE_USER_FAILED = "CREATE_USER_FAILED"

export const createUser = ({payload}: any) => {
    return {type: CREATE_USER_REQUESTED,payload}
}

// userLogin

export const USER_LOGIN_REQUESTED = "USER_LOGIN_REQUESTED"
export const USER_LOGIN_SUCCEEDED = "USER_LOGIN_SUCCEEDED"
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED"

export const userLogin = ({payload}: any) => {
    return {type: USER_LOGIN_REQUESTED,payload}
}

export const actionCreators = {
    showModal,
    hideModal,
    createUser,
    userLogin,
    fetchCards
}
