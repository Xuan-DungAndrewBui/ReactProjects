export const CLICK_SQUARE = 'CLICK_SQUARE';
export const TIME_TRAVEL = 'TIME_TRAVEL';

export const clickSquare = (history, current, xNext) => ({
    type: CLICK_SQUARE,
    history: history,
    current: current,
    xNext: xNext
})

export const timeTravel = (move) => ({
    type: TIME_TRAVEL,
    move: move,
})

