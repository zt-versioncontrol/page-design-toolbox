//currently, useOf is not needed. It is kept here in case problems occur with future storybook upgrades
// import { useOf } from "@storybook/blocks";
import React from 'react';

const CustomTypes = ({of}) => {
  const customTypes = of?.documentation?.customTypes || []

  const tableRows: JSX.Element[] = customTypes.map((type, index) => {

    const lines = type.description.split('\n').map((line, index) =>{
      return ( <p key={index}>{line}</p>)
    })

    return(
      <tr key={index}>
        <td>{type.name}</td>
        <td>{lines}</td>
      </tr>
    )
  })

  return (
    <>
    <h2>Custom Types</h2>
    <table style={{ width: '100%' }}>

      <thead>
        <tr>
          <th>Type</th> 
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


export default CustomTypes