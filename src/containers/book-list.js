import React, {Component} from 'react';
//Glue between react and redux
import {connect} from 'react-redux';

class BookList extends Component {

    //Helper function to generate the list
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
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

//Export container
//Takes a function & component and produces a container
export default connect(mapStateToProps)(BookList);