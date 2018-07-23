import React from 'react'
import Article from './Article'
import  artikles from '../fixture'

function App() {
    return(
        <div>
            <h1>App name</h1>
            <Article article={artikles[0]}/>
        </div>
    )
}
export default App;