import { combineReducers} from 'redux'
import modal from './Modal'
import cards from './Cards'

const reducer = combineReducers({
    modal,
    cards
})

export default reducer
