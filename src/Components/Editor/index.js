import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
const Editor=({setSelectedQuery, setQuery,font})=>{
function onChange(newValue) {
  console.log("change", newValue);
  setSelectedQuery(newValue)
  setQuery(newValue)
}
return(
  <AceEditor
    mode="SQL"
    theme="github"
    placeholder="Type SELECT * FROM CUSTOMER and press Run to get query result or select saved Queries"
    onChange={onChange}
    width={'80%'}
    fontSize={Number(font)}
    height={280}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
  />
);
}

export default Editor
