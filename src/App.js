import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'
import DataTable from './dataTable'
import AddAuthorForm from './addAuthor'
import AddBookForm from './addBook'
import DeleteEntry from './delete'

function App () {
  const [isLoading, setIsLoading] = useState(false)
  const [table, setTable] = useState('')
  const [responseData, setResponseData] = useState([])
  const [renderTable, setRenderTable] = useState(false)

  useEffect(() => {
    if (isLoading === true) {
      Axios.get(`${process.env.REACT_APP_BACK_END_URL}/api`, {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'

        },
        params: {
          table: table
        }
      })
        .then(res => setResponseData(res.data))
        .then(() => setRenderTable(true) && setIsLoading(false))
        .catch(err => console.log(err))
    }
  }, [isLoading, table])

  const handleClick = (tableChoice) => {
    setTable(tableChoice)
    setIsLoading(true)
  }

  return (
    <div className="App">
      <header className="App-header">
    <div className="get">
      <h2>View library</h2>
    <button onClick={() => handleClick('authors')} >View authors</button>
    <button onClick={() => handleClick('books')} >View books</button>
    </div>
    </header>
    <div className="Body">
    {renderTable === false
      ? <div />
      : <DataTable tableState={table} dataObjectArray={responseData}/>
    }
     { <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
       {table === 'authors'
         ? <AddAuthorForm style={{ flex: 1 }}/>
         : <AddBookForm style={{ flex: 1 }}/>}
         <DeleteEntry table={table} style={{ flex: 1 }}/>
     </div>
    }
    </div>
    </div>
  )
}

export default App
