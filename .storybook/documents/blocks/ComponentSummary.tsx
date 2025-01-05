//currently, useOf is not needed. It is kept here in case problems occur with future storybook upgrades
// import { useOf } from "@storybook/blocks";
import React from 'react';

const ComponentSummary = ({of}) => {
  const title = of?.documentation?.title || ''
  const summary = of?.documentation?.summary || ''
  const tags = of?.documentation.tags || []
  const badges = of?.documentation.badges || []

  const lines = summary.split('\n').map((line, index) =>{
    return ( <p key={index}>{line}</p>)
  })

  return (
    <>
    <h1>{title}</h1>
    <span>
      {lines}
    </span>
    <br/>
    <div style={{ fontSize: '0.8rem', backgroundColor: 'lightyellow', width: 'fit-content', fontStyle: 'italic'}}>
      { '<' + of.default.component.__name + '/>' }
    </div>
    
    {badges.length > 0 ? <br /> : null}
    <div style={{ display: 'flex'}}>
      {badges.map((badge, index) => {
        return (
          <div key={index} style={{fontSize: '0.8rem', backgroundColor: badge.color, color: badge.fontColor, paddingInline: '0.2rem', marginInlineEnd: '0.5rem'}} >
            { badge.label }
          </div>
        )
      })}
    </div>
    
    {tags.length ? <br /> : null}
    <div style={{ display: 'flex' }}>
      {tags.map((tag, index) => {
        return (
          <div key={index} style={{fontSize: '0.8rem', backgroundColor: 'lightgrey', borderRadius: '10rem', paddingInline: '0.5rem', marginInlineEnd: '0.5rem'}} >
            {tag}
          </div>
        )
      })}
    </div>
    </>
  )
}

export default ComponentSummary