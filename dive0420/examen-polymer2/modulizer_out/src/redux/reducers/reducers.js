'use strict';

import { combineReducers } from 'redux';
import {reducer as CharactersReducer} from './characters.reducer';

export default combineReducers({
  characters: CharactersReducer
})
