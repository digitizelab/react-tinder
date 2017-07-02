//Reducers are only called for an action
//State argument is not application state, only the state
//this reducer is responsible for
//Same state keeps flowing into the reducer over and over
export default function (state = null, action) {
    //Don't mutate the state
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}