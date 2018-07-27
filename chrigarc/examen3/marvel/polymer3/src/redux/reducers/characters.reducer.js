'use strict';

const reducer = (state = [], action = null) => {
    switch (action.type) {
        case 'ADD_CHARACTERS':
            // ALWAYS return new state
            return state.concat(action.characters);
        case 'CLEAR':
            return [];
        // Return the state, nothing changed.
        default:
            return state;
    }
};
export {reducer};
