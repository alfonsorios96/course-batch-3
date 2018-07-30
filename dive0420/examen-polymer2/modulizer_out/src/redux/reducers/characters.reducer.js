'use strict';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CHARACTERS':
        return state.characters = action.characters;
    default:
      return state;
  }
};

export {reducer};
