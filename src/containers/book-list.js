import React, {Component} from 'react';
//Glue between react and redux
import {connect} from 'react-redux';
//Actions
import {selectBook} from '../actions/index';
//Make action generated flow through all reducers
import {bindActionCreators} from 'redux';

class BookList extends Component {

    //Helper function to generate the list
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                    </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//Take application state as an argument
//Array of books and active book
//Glue between react and redux
function mapStateToProps(state) {
    //Whatever get returned will show up as props inside of BookList
    return {
        //Whenever the application state changes the component will re-render
        books: state.books
    };
}

//Anything returned from this function will end up as props on BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called the result should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

//Export container
//Takes a function & component and produces a container
//Need to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);