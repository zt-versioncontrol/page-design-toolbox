import React from 'react';
import ExpandableDirectory, { STANDARD_ROOT_COLOR } from '../utilityComponents/ExpandableDirectory'
//currently, useOf is not needed. It is kept here in case problems occur with future storybook upgrades
//import { useOf } from '@storybook/blocks';



const ComponentDependency = ({ of }) => {
  const dependencies = of?.documentation?.dependencies || []
    
  let expandableItems: any[] = []
  
  dependencies.forEach(dependency => {
    expandableItems.push(
      {
        title: dependency.name,
        path: dependency.path,
        items: [
          { title: 'Props', items: dependency.props?.map(prop => ({ title: prop })) },
          { title: 'Slots', items: dependency.slots?.map(slot => ({ title: slot })) },
          { title: 'Emits', items: dependency.emits?.map(emit => ({ title: emit })) },
          { title: 'Exposed', items: dependency.exposed?.map(exp => ({ title: exp })) },
          { title: 'Types', items: dependency.types?.map(type => ({ title: type })) }
        ]}
    )
  });

  const expandableComponents = expandableItems.map( (item, index) => 
    <ExpandableDirectory title={item.title} key={index} items={item.items} path={item.path} color={STANDARD_ROOT_COLOR}></ExpandableDirectory>
  )

  return (
    <>
      <h2>Component Dependencies</h2>
      <div  style={{border: 'solid', borderColor: '#E0E0E0', borderWidth: '1px'}}>
        {expandableComponents}    
      </div>
    </>
    )
}

export default ComponentDependency