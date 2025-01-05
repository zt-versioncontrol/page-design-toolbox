import React, { useState } from 'react'

type ExpandArrowProps = {
  expanded: boolean
}
const ExpandArrow = ({expanded} : ExpandArrowProps) => {
  return (
    <svg style={{height: '1em', width: '1.2em', verticalAlign: 'middle'}}>
    {expanded?
    <path d="M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z" fill="currentColor"></path>
    :
    <path d="M1.146 4.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 9.043 1.854 3.896a.5.5 0 10-.708.708z" fill="currentColor"></path>}
    </svg>
  )
}

export type Props = {
  title: string
  items?: Props[]
  path?: string
  color?: string
}

const ExpandableDirectory = ({title, items, path, color}: Props) => {

  const [expanded, setExpanded] = useState(false)
  const toggle = () => {
    setExpanded(!expanded)
  }
  
  const nestedDirectories: JSX.Element[] = []
    
  if(items){
    items.forEach((item, index) => {
      nestedDirectories.push(<ExpandableDirectory title={item.title} path={item.path} items={item.items} key={item.title} color={item.color}></ExpandableDirectory>)
    })
  }
  
  return (
    <>
      <div style={{backgroundColor: color, height: '3em', paddingTop: '0.7em', paddingLeft: '0.5em', cursor: items && items.length ? 'pointer': 'default'}}
        onClick={toggle}>
        
        <p style={{margin: '0px'}}>
        {items && items.length? <ExpandArrow expanded={expanded}/>: <></>}
        {path? <a href={path}>{title}</a> : title}
        </p>
        
      </div>
      <div style={{marginLeft: '2em'}}>{expanded && nestedDirectories}</div>
    </>
  )
}
  
export default ExpandableDirectory
export const STANDARD_ROOT_COLOR = '#F6F9FC'
