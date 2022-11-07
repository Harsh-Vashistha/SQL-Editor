import React from "react";
import 'antd/dist/antd.css'
import CustomButton from "../CustomButton";
import mapQueryToData from "../../utils/mapQueryToData";
import getSelectedQueryData from "../../utils/getSelectedQueryData";
import Select  from 'antd/lib/select';
import {items} from '../../Data/fontItems'
const NavBar=({selectedQuery,setFont,font,setData})=>{
    const handleClick=()=>{
        setData(getSelectedQueryData(mapQueryToData(selectedQuery)));
    }
    const handleChange = (value) => {
        setFont(value);
      };
      
    return(
        <div style={{width:'100%',height:33,backgroundColor:'#304C89',textAlign:'left',display:'flex',}}>
            <h2 style={{color:'white',paddingRight:20}}>
                SQL Editor
            </h2>
            <CustomButton type={"primary"} handleAction={handleClick} text={"Run Query"}/>
            <div style={{paddingLeft:20}}>
            <Select
      defaultValue={font}
      style={{ width: 60 }}
      onChange={handleChange}
      options={items}
    />
            </div>
           
        </div>
    )
}

export default NavBar;