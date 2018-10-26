import {CLICK_SQUARE, TIME_TRAVEL} from "../actions/actions";

const initialState = {
    history:  [{
        squares: Array(9).fill(null),
      }],
    current: Array(9).fill(null),
    xNext: true,
    stepNumber: 0,

}

function tictactoeReducer(state=initialState, action) {
    switch(action.type){
        case CLICK_SQUARE:
            return {...state,
                history: action.history.concat([{
                    squares: action.current
                }]),
                current: action.current,
                xNext: !action.xNext,
                stepNumber: action.history.length
            }

        case TIME_TRAVEL:
            return {...state, 
                stepNumber: action.move, 
                xNext: (action.move % 2) === 0}

        default:
            return state;
    }
}

export default tictactoeReducer