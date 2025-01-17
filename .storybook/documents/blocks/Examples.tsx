import { Canvas } from "@storybook/blocks"
import React from 'react';

export const ExampleGroup = ({ stories, title, description}) => {
  const examples: JSX.Element[] = []

  stories?.forEach((story, index) => {
     examples.push((
      <Canvas of={story} key={index}/>
    ))
  })

  let descriptionLines = null
  if(description){
    descriptionLines = description.split('\n').map((line, index) => {
      return (<p key={index}>{line}</p>)
    })
  }

  return (
    <>
    {title &&<h4>{title}</h4>}
    {description && <span>{descriptionLines}</span>}
    {examples}
    </>
  )
}

export const ExampleCategory = ({title, description, children}) => {
  let descriptionLines = null
  if(description){
    descriptionLines = description.split('\n').map((line, index) => {
      return (<p key={index}>{line}</p>)
    })
  }

  return (
    <>
    <h3>{title}</h3>
    {description && <span>{descriptionLines}</span>}
    <div style={{paddingInlineStart: '2rem'}}>
      {children}
    </div>
    </>
  )
}

export const Examples = ({children}) => {

  return (
    <>
    <h2>Examples</h2>
    {children}
    </>
  )
}