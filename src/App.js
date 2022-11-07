//create custom button for code cleaning
import { useState } from 'react';
import React from 'react';
import  QueryResult from './Components/QueryResult/index'
import 'antd/dist/antd.css'
import { GlobalHotKeys } from 'react-hotkeys';

const NavBar = React.lazy(() => import( './Components/NavBar'));
const QueryHistory = React.lazy(() => import( './Components/QueryHistory/index'));
const handlers =()=> {

};

const Editor = React.lazy(() => import( './Components/Editor'));
const keyMap = {
  DOWNLOAD_JSON_FILE: "Shift+j",
  DOWNLOAD_CSV_FILE: "Shift+c",
};

function App() {
  const [selectedQuery,setSelectedQuery]=useState('');
  const [query,setQuery]=useState('')
  const [data,setData]=useState([]);
  return (
   
    <div style={{overflowY:'hidden',overflowX:'hidden'}}>
      <NavBar setSelectedQuery={setSelectedQuery} selectedQuery={query} setData={setData}/>
      <div>
        <Editor setSelectedQuery={setSelectedQuery} setQuery={setQuery}/>
      <div style={{position:'fixed',width:'18%',top:0,height:'100%',right:0,overflowY:'auto',overflowX:'auto'}}>
      <QueryHistory setSelectedQuery={setSelectedQuery} setData={setData}/> 
        </div>  
      </div>
     
    
    <div style={{paddingBottom:10}}>
      <div style={{overflowX:'auto',overflowY:'auto',width:"80%",marginLeft:20,boxShadow:' 0 4px 8px 0 rgba(0,2,0,0.2)'}}>
            <QueryResult setSelectedQuery={setSelectedQuery} selectedQuery={selectedQuery} data={data}/>
      </div>
    </div>
    
    </div>

    
  );
}

export default App;
