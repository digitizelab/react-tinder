import {combineReducers} from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
    //Mapping of state
    books: BooksReducer
});

export default rootReducer;
