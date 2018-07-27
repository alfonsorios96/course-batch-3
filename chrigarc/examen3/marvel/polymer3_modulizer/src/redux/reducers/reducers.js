'use strict';

import { combineReducers } from 'redux';
import {reducer as CharactersReducer} from './characters.reducer.js';

export default combineReducers({
 characters: CharactersReducer,
});
