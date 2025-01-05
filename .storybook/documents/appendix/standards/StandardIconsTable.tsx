import iconsDoc from "./StandardIcons"
import React from 'react';

const StandardIconsTable = () => {
    const tableRows: JSX.Element[] = []
    for (const [name, doc] of Object.entries(iconsDoc)){
      const noteLines = doc.notes.split('\n').map((line, index) =>{
        return ( <p key={index}>{line}</p>)
      })
      const names = (doc.aliases ? name + ',' + doc.aliases.join() : name).replace(/,/g, ', ')
      tableRows.push(
        <tr key={name}>
          <td>{names}</td>
          <td>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{height: '1.5em', width: '1.5em'}}>
              <svg viewBox={doc.viewBox}><path d={doc.path} /></svg>
              </div>
            </div>
        </td>
          <td>{noteLines}</td>
        </tr>
      )
    }

    return (
      <>
      <table style={{ width: '100%' }}>
  
        <thead>
          <tr>
            <th>Icon Name</th> 
            <th>Icon</th>
            <th>notes</th>
          </tr>
        </thead>
  
        <tbody>
          {tableRows}
        </tbody>
      </table>
      </>
    )
  }
  
  
  export default StandardIconsTable