// action types

// modal

export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

// action creaters

const showModal = () => {
    return {
        type: SHOW_MODAL,
    }
}

const hideModal = () => {
    return {
        type: HIDE_MODAL
    }
}

export const actionCreators = {
    showModal,
    hideModal
}
