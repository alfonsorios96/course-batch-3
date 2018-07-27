'use strict';

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CHARACTERS':
            // ALWAYS return new state
            return state.concat(action.characters);
        // Return the state, nothing changed.
        default:
            return state;
    }
};

export {reducer};
