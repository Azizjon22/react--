import { Component } from 'react'
import AppInfo from '../components/app-info/App-info'
import SearchPanel from '../components/search-panel/Search-panel'
import AppFilter from '../components/app-filter/App-filter'
import MovieList from './movie-list/Movie-list'
import MoviesAddForm from './movies-add-form/movies-add-form'
import { v4 as uuidv4 }from 'uuid'
import './app.css'
class App extends Component{
constructor(props) {
  super(props)
  this.state ={
    data: [
      {name:"Игра престолов", viewers:881, favourite: false, like: false, id:1},
      {name:"Эртугрул", viewers:789, favourite: false, like: false, id:2},
      {name:"Артур", viewers:990, favourite: false, like: false,  id:3},
    ],
    term: '',
    filter: 'all',
  }
}
  onDelete = id => {
    this.setState(({ data }) => ({
     data: data.filter(c => c.id !== id),
    }))
  }

  addForm = item => {
    const newItem = {name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false}
    this.setState(({ data }) => ({
    data:[...data, newItem],
    }))
  }

  onToggleProp = (id, prop)  => {
    this.setState(({ data }) => ({
      data: data.map(item =>{
        if(item.id === id) {
          return{...item, [prop]: !item[prop]}
        }
        return item
      })
    }))
  }

  searchHendler =(arr, term) =>{
    if(term.length === 0){
      return arr
    }
    return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
  }

  filterHEndler = (arr, filter) =>{
    switch(filter) {
      case 'popular':
        return arr.filter(c => c.like)
        case "mostViewers":
          return arr.filter(c => c.viewers > 800)
        default:
          return arr
    }
  } 

  updateTermHendler = term => this.setState({ term })

  updateFilterHendler = filter => this.setState({ filter })



  render(){
    const { data, term, filter } = this.state
    const allMoviesCount = data.length
    const favouriteMovieCount = data.filter(c => c.favourite).length
    const visibleData = this.filterHEndler(this.searchHendler(data, term), filter)
    return (
      <div className='app font-monospace'>
       <div className='content'>
           <AppInfo allMoviesCount={allMoviesCount} favouriteMovieCount={favouriteMovieCount}/>
           <div className='search-panel'>
           <SearchPanel updateTermHendler={this.updateTermHendler}/>
           <AppFilter filter={filter} updateFilterHendler={this.updateFilterHendler}/>
         </div>
         <MovieList
           onToggleProp={this.onToggleProp} 
           data={visibleData} onDelete={this.onDelete}
           
           />
         <MoviesAddForm addForm={this.addForm}/>
       </div>
      </div>
   )
  }
   
}

export default App