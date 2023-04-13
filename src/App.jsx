import React, { useState } from 'react'
import SearchList from './SearchList'
import allSearchResults from './allSearchResults'

function App() {

     const [matchedQueries, setMatchedQueries] = useState([])

     console.log('App rendered')

     function handleChange(value) {
          let temp = []
          if (value) {
               allSearchResults.forEach(
                    item => {
                         let transformedItem = item.toLowerCase() //transform each string item to lowercase
                         if (transformedItem.includes(value.toLowerCase())) temp.push(item) //push original untransformed item
                    }
               )
               temp.length == 0 && temp.push('No item found')
          }
          setMatchedQueries(temp)
     }

     return (
          <div className='container'>
               <div className="header flex">
                    <input type="text" placeholder='Search' onChange={(event) => handleChange(event.target.value)} />
               </div>
               <div className="content flex">
                    <ul>
                         {matchedQueries.map(item => <SearchList key={item} item={item} />)}
                    </ul>
               </div>
          </div>
     )
}

export default App