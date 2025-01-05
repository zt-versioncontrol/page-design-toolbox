import dimensionsDoc from "./StandardDimensions"
import React, {useState} from 'react';
import * as componentTags from '../../ComponentTags.ts'

const StandardDimensionsTable = () => {
    const tableRows: JSX.Element[] = []
    const [filteredDimensionsDoc, setFilteredDimensionsDoc] = useState(dimensionsDoc)
    
    for (const [name, doc] of Object.entries(filteredDimensionsDoc)){
      const lines = doc.description.split('\n').map((line, index) =>{
        return ( <p key={index}>{line}</p>)
      })
      const tags = doc.tags.join(', ')
      tableRows.push(
        <tr key={name}>
          <td>{name}</td>
          <td>{lines}</td>
          <td>{tags} </td>
        </tr>
      )
    }

    const handleFilter = (event) => {
      const selectedTag = event.target.value
      if (selectedTag === "") {
        setFilteredDimensionsDoc(dimensionsDoc)
      } else {
        const filteredDimensionsDoc = {}
        for (const [name, doc] of Object.entries(dimensionsDoc)){
          if (doc.tags.includes(selectedTag)) {
            filteredDimensionsDoc[name] = doc
          }
        }
        setFilteredDimensionsDoc(filteredDimensionsDoc)
      }
    }

    return (
      <>

    <select name="pets" id="pet-select" style={{ appearance: 'auto', border: '1px solid', backgroundColor: 'default'}} onChange={handleFilter}>
      <option value="">All tags</option>
      { Object.values(componentTags).map((tag) => (
        <option value={tag}>{tag}</option>
      ))}
    </select>

      <table style={{ width: '100%' }}>
  
        <thead>
          <tr>
            <th>Dimension Name</th> 
            <th>Description</th>
            <th>Tags</th>
          </tr>
        </thead>
  
        <tbody>
          {tableRows}
        </tbody>
      </table>
      </>
    )
  }
  
  
  export default StandardDimensionsTable