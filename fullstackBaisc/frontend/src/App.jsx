import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log("Api server Error: " + error)
    })
  })

  return (
    <>
      <h1>Chai Aur FullStack</h1>
      <p>JOKES {jokes.length}</p> 
      <button onClick={() => fetchJoke()}>Fetch Joke</button>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h2>{joke.first_name}</h2>
            <h2>{joke.email}</h2>
            <h2>{joke.gender}</h2>
            {/* <p>{joke.punchline}</p> */}
          </div>
        ))
      }
    </>
  )
}

export default App
