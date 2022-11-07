import React from "react";
import {
    useTable,
    useSortBy,
    useGlobalFilter,
    useFilters,
    usePagination
  } from 'react-table';
  import './table.css'
  import Papa from 'papaparse'
import CustomButton from "../CustomButton";
import Button from "antd/lib/button";
import { message } from "antd";
import Hotkeys from 'react-hot-keys';
export const Filter=({filter='',setFilter})=>{
  
return (
    <span style={{marginBottom:20,}}>
       Global Search:{' '}
        <input style={{borderRadius:'5%'}} value={filter} onChange={e=>setFilter(e.target.value)} />
    </span>
)
}

export const Columnfilter=({column})=>{
    const {filterValue='',setFilter}=column
return (
    <></>
)
}
const handleCopy=(data)=>{
    navigator.clipboard.writeText(JSON.stringify(data))
    message.info('Data copied to clipboard');
}

const downloadFile=({data,fileName,fileType,isCsv,columns})=>{
    const blob = new Blob([data], { type: fileType })
    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
  }


const TableRow=({columns,data})=>{

   const {getTableBodyProps,getTableProps,headerGroups,page,prepareRow,state,setGlobalFilter,nextPage,previousPage,canNextPage,canPreviousPage,pageOptions}= useTable({
        columns,
        data,
        
    },useFilters,useGlobalFilter,useSortBy,usePagination)

    const exportJson=(e)=>{
        e.preventDefault();
        downloadFile({
          data:JSON.stringify(data),
          fileName:`QueryResult.json`,
          fileType:'text/json',
        })
      }
      
   const exportCsv=()=>{
    let customColumn=[]
    for(let i=0;i<columns.length;i++){
        customColumn.push(columns[i]['Header'])
    }
    const csv=Papa.unparse({
    data:data,
    fields:customColumn
    })
    const csvblob=new Blob([csv],{type: 'text/csv;charset=utf-8;'})
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(csvblob);
    a.download = 'QueryResult.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

    const {globalFilter,pageIndex}=state
    return(
        <>
         <Hotkeys keyName="alt+s" onKeyDown={() => exportCsv()} />
        <div style={{paddingTop:10,paddingBottom:10,paddingLeft:10,borderRadius:'5%'}}>
        <Filter filter={globalFilter} setFilter={setGlobalFilter}/>
        </div>
        
        <table id="table" {...getTableProps()}>
            <thead >
                {
                    headerGroups.map((headerGroups)=>(
                        <tr className="tr" {...headerGroups.getHeaderGroupProps()}>
                            {headerGroups.headers.map((column)=>(
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                 <span>
                                 {column.isSorted
                        ? column.isSortedDesc
                          ? ' ▼'
                          : ' ▲'
                        : ''}
                        {column.canFilter?
                        column.render('Filter')
                        : null}
                                </span>
                                </th>
                               
                            ))}
                          
                        </tr>
                    ))
                }

            </thead>
            <tbody className="body" {...getTableBodyProps()}>
                {
                    page.map(row=>{
                        prepareRow(row)
                        return (
                            <tr className="tr" {...row.getRowProps()}>
                                {
                                    row.cells.map(cell=>{
                                        return <td className="td" {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div style={{display:'flex'}}>
        <span style={{display:'flex',paddingTop:10,position:'fixed',bottom:0,backgroundColor:'#304C89',width:'80%',paddingLeft:10}}>
            <p style={{color:'white'}}>
            Page{' '}:{pageIndex+1} Of {pageOptions.length}
            </p>
            
            <div style={{paddingLeft:10}}>
           {canPreviousPage&&<Button onClick={()=>previousPage()} type={'primary'}  disabled={!canPreviousPage}>Previous</Button>}{' '}
           {canNextPage&& <Button onClick={()=>nextPage()}   type={'primary'}  disabled={!canNextPage}>Next</Button>}
            </div>
        </span>
      
        
        {true?<div style={{display:'flex',position:'absolute',bottom:5,right:'20%'}}>
            <div style={{paddingRight:10}}>
            <CustomButton type={"primary"} text={"Copy Json to Clipboard"} handleAction={()=>handleCopy(data)}/>
            </div>
            <div style={{paddingRight:10}}>
            <CustomButton type={"primary"} text={"Download Csv file"} handleAction={exportCsv}/>
            </div>
            <CustomButton type={"primary"} text={" Download Json file"} handleAction={exportJson}/>
      </div>:null}{
      }
        </div>
        </>
    )

}

export default TableRow