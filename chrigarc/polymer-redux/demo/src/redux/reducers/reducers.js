'use strict';

import { combineReducers } from 'redux';
import {reducer as QuestionsReducer} from './questions.reducers';

export default combineReducers({
    questions: QuestionsReducer
});
