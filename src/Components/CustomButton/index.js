import React from "react";
import { Button } from 'antd'
import 'antd/dist/antd.css'
const CustomButton=({text,handleAction,type})=>{
    return(
        <Button type={type} color="pink" onClick={handleAction}>{text}</Button>
    )
}
export default CustomButton