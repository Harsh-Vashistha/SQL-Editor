import React from "react";
import { CUSTOMER,CATEGORY,EMPLOYEES,EMPLOOYEE_TERRITORIES } from "../Data/categories";
 const getSelectedQueryData=(selectedItem)=>{
    switch(selectedItem){
        case 'CUSTOMER':return CUSTOMER;
        case 'CATEGORY':return CATEGORY;
        case 'EMPLOYEES':return EMPLOYEES;
        case 'EMPLOOYEE_TERRITORIES':return EMPLOOYEE_TERRITORIES;
        default: return [];
    }
}

export default getSelectedQueryData