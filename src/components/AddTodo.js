import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
    }

    render() {
        return (
            <form 
                style={{ display: 'flex' }}
                onSubmit={this.onSubmit}
            >
                <input 
                    type='test' 
                    name='title'
                    style={{ flex: '10', padding: '5px' }}
                    placeholder='add Todo ...'
                    value={ this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type='submit'
                    value='Submit'
                    className='btn'
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

export default AddTodo
