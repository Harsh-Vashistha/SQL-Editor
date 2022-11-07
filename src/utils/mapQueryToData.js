import React from "react";
const mapQueryToData=(query)=>{
    switch(query){
        case 'SELECT * FROM CUSTOMER':{return 'CUSTOMER';}
        case 'SELECT * FROM CATEGORY':{return 'CATEGORY';}
        case 'SELECT * FROM EMPLOYEES':{return 'EMPLOYEES';}
        case 'SELECT * FROM EMPLOOYEE_TERRITORIES':{return 'EMPLOOYEE_TERRITORIES';}
        default: return ''
    }

}
export default mapQueryToData