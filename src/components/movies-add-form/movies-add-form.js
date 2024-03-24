import { Component } from 'react'
import './movies-add-form.css'



class MoviesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            views: '',
        }
    }

    changeHendlerInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addFormHendler = (e) => {
        e.preventDefault()
        this.props.addForm ({name: this.state.name , viewers: this.state.views})
        this.setState({
            name: '',
            views: '',
        })
    }
    
    render(){
        const {name,views} = this.state
        
        return (
            <div className='movies-add-form'>
                <h3>Добавить новый фильм</h3>
                <form className='add-form d-flex' onSubmit={this.addFormHendler}> 
                        <input
                         name='name'
                         onChange={this.changeHendlerInput}
                         type='text'
                         className='form-control new-post-label'
                         placeholder='Что за фильм?'
                         value={name}
                        />
                        <input
                         name='views'
                         onChange={this.changeHendlerInput}
                         type='number'
                         className='form-control new-post-label'
                         placeholder="Сколько раз его просмотрели?"
                         value={views}
                        />
                        <button type='submit' className='btn btn-outline-dark'> 
                         Добавлять
                        </button>
                 </form>
            </div>
          )
    }
}

export default MoviesAddForm