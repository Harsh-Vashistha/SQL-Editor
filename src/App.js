//create custom button for code cleaning
import { useState } from 'react';
import React from 'react';
import  QueryResult from './Components/QueryResult/index'
import 'antd/dist/antd.css'

const NavBar = React.lazy(() => import( './Components/NavBar'));
const QueryHistory = React.lazy(() => import( './Components/QueryHistory/index'));

const Editor = React.lazy(() => import( './Components/Editor'));
function App() {
  const [selectedQuery,setSelectedQuery]=useState('');
  const [query,setQuery]=useState('')
  const [data,setData]=useState([]);
  const [font,setFont]=useState(12);
  return (
   
    <div style={{overflowY:'hidden',overflowX:'hidden'}}>
      <NavBar setSelectedQuery={setSelectedQuery} selectedQuery={query} font={font} setData={setData} setFont={setFont}/>
      <div>
        <Editor setSelectedQuery={setSelectedQuery} setQuery={setQuery} font={font}/>
      <div style={{position:'fixed',width:'18%',top:0,height:'100%',right:0,overflowX:'auto',}}>
      <QueryHistory setSelectedQuery={setSelectedQuery} setData={setData}/> 
        </div>  
      </div>
     
    
    <div style={{paddingBottom:10,boxShadow:' 0 200px 200px 0 rgba(0,20,0,2)'}}>
      <div style={{overflowX:'auto',overflowY:'auto',width:"80%",marginLeft:20,}}>
            <QueryResult setSelectedQuery={setSelectedQuery} selectedQuery={selectedQuery} data={data}/>
      </div>
    </div>
    
    </div>

    
  );
}

export default App;
