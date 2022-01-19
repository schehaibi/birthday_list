import React,{useState} from 'react';
import List from './List';
import data from './data'
const App=()=>{
    const [people,setpeople]=useState(data)
    return(<main>
        <section className="container">
            <h3>{people.length} birthday today</h3>
            <List persons={people}/>
            <button onClick={()=>{setpeople([])}}>Clear All</button>
        </section>
       
    </main>);
}
export default App;