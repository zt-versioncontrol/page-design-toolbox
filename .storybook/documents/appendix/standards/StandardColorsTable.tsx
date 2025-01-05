import colorsDoc from "./StandardColors"
import React from 'react';

const StandardColorsTable = () => {
    const tableRows: JSX.Element[] = []
    for (const [name, doc] of Object.entries(colorsDoc)){
      const lines = doc.description.split('\n').map((line, index) =>{
        return ( <p key={index}>{line}</p> )
      })
      tableRows.push(
        <tr key={name}>
          <td>{name}</td>
          <td>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ height: '1.5em', width: '1.5em', borderRadius: '10em', backgroundColor: doc.color }}></div>
            </div>
          </td>
          <td>{lines}</td>
        </tr>
      )
    }
      
    return (
      <>
      <table style={{ width: '100%' }}>
  
        <thead>
          <tr>
            <th>Color Name</th> 
            <th>Color</th>
            <th>Description</th>
          </tr>
        </thead>
  
        <tbody>
          {tableRows}
        </tbody>
      </table>
      </>
    )
  }
  
  
  export default StandardColorsTable