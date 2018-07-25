'use strict';

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_QUESTION':
            // ALWAYS return new state
            return [
                ...state,
                action.question
            ];
        // Return the state, nothing changed.
        default:
            return state;
    }
};

export {reducer};
