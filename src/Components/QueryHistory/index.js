import React, { useEffect } from "react";
import {savedHistory,queryList} from '../../Data/savedHistory'
import 'antd/dist/antd.css'
import './index.css'
import { Collapse, List } from 'antd';
import mapQueryToData from "../../utils/mapQueryToData";
import getSelectedQueryData from "../../utils/getSelectedQueryData";

const { Panel } = Collapse;
const QueryHistory=({setSelectedQuery,setData})=>{
    const handleClick=(e)=>{
       
        setData(getSelectedQueryData((mapQueryToData(e.target.textContent))))
    }


    return(
      <>
      <h2 style={{color:'white',paddingLeft:20,backgroundColor:'crimson'}}>SAVED QUERIES</h2>
        <Collapse defaultActiveKey={['1']} >
            {
                  savedHistory.map((a,b)=>{
                    const list=queryList[a.name]
                                return (
                                    <Panel header={a.name}>
                                        {
                                            list.map((query,key)=>{
                                                
                                                return(
                                                    <div className='el' style={{display:'flex',}}>
                                                    
                                                <h5  className='savedQuery' onClick={(e)=>handleClick(e) } onHove style={{paddingBottom:10,cursor:'pointer'}}>
                                                   <p style={{color:'black'}}>{query.name}</p>
                                                </h5>
                                               </div>
                                                )
                                            })
                                        }
                                   
                                   </Panel>
                                )
                                
                            })
            }
      {/* <Panel header="This is panel header 1" key="1">
        <p>{"As"}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{'as'}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{"as"}</p>
      </Panel> */}
    </Collapse>
    </>
    )
    
}
export default QueryHistory