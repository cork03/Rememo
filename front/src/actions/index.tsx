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

// createUser

export const CREATE_USER_REQUESTED = "CREATE_USER_REQUESTED"
export const CREATE_USER_SUCCEEDED = "CREATE_USER_SUCCEEDED"
export const CREATE_USER_FAILED = "CREATE_USER_FAILED"

export const createUser = ({payload}: any) => {
    return {type: CREATE_USER_REQUESTED,payload}
}

export const actionCreators = {
    showModal,
    hideModal
}
