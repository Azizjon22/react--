import React from 'react'
import './App-filter.css'
const AppFilter = ( { updateFilterHendler, filter } ) => {
  return (
    <div className='btn-group'>
      {btnsArr.map(btn => (
         <button key={btn.name} className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => updateFilterHendler(btn.name)} type='button'>
         {btn.lable}
       </button>
      ))}
    </div>
  )
}

  const btnsArr = [
    {name: 'all', lable: 'все фильмы'},
    {name: 'popular', lable: 'Популярные фильмы'},
    {name: 'mostViewers', lable: "Самые просматриваемые фильмы"},

  ]

export default AppFilter