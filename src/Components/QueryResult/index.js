import React, { useMemo } from "react";
import TableRow, { Columnfilter } from '../../Components/TableRow'
import 'antd/dist/antd.css';

const QueryResult=({selectedQuery,setSelectedQuery,data})=>{

    const columns = useMemo(() => {
        if (data.length > 0) {
           
          return Object.keys(data[0]).map(key => {

            const result = String(data[0][key])
              .replace(/([A-Z]+)/g, ' $1')
              .replace(/([A-Z][a-z])/g, ' $1');

            return {
              Header: key,
              accessor: key,
              Filter:Columnfilter
            };
          });
        }
      }, [data]);

    return (
        <div style={{}}>
          {data.length>0 && data.length?
            <TableRow
              columns={columns}
              data={data}
            />:<div style={{backgroundColor:'lightgray',color:'white',textAlign:'center'}}>NO DATA FOUND</div>
          }
          </div>
    )
}
export default QueryResult