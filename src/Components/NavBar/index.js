import React from "react";
import 'antd/dist/antd.css'
import CustomButton from "../CustomButton";
import mapQueryToData from "../../utils/mapQueryToData";
import getSelectedQueryData from "../../utils/getSelectedQueryData";

const NavBar=({selectedQuery,setSelectedQuery,setData})=>{
    const handleClick=()=>{
        setData(getSelectedQueryData(mapQueryToData(selectedQuery)));
    }
    return(
        <div style={{width:'100%',height:33,backgroundColor:'#304C89',textAlign:'left',display:'flex',}}>
            <h2 style={{color:'white',paddingRight:20}}>
                SQL Editor
            </h2>
            <CustomButton type={"primary"} handleAction={handleClick} text={"Run"}/>
        </div>
    )
}

export default NavBar;