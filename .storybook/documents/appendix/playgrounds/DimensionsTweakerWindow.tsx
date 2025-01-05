import React, { useState } from 'react'

export type DimensionsMap = {
  [dimensionName: string]: {
    codeName: string
    label: string
    // regular CSS vlaue including unit. like '10px'
    value: string
    maxValue: number
  }
}

// TODO: add comments to explain this component interface

export type Props = {
  children: JSX.Element[]
  dimensionsMap: DimensionsMap
  // `newValue` uses the same unit as provided in `dimensionsMap`
  onControlChange: (dimensionKey: string, newValue) => void
  onReset: () => void
}

const DimensionsTweakerWindow = ({ children, dimensionsMap, onControlChange, onReset }: Props ) => {
  
  const [showNotification, setShowNotification] = useState(false)
  const [notificationText, setNotificationText] = useState('')
  
  const triggerNotification = (text: string) => {
    if(!showNotification){
      setNotificationText(text)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 1500)
    }
  }

  const copyParameterToClipboard = (parameter: string) => {
    navigator.clipboard.writeText(parameter)
    triggerNotification('Parameter copied to clipboard')

  }

  const controls: JSX.Element[] = []

  for(const [key, dimension] of Object.entries(dimensionsMap)){
    controls.push((
      <div key={key}>
        <div style={{ fontSize: '0.8rem', cursor: 'pointer', userSelect: 'none'}} onClick={() => copyParameterToClipboard(dimension.codeName)}>{ dimension.label }</div>
        <input
          type="range" 
          min="0"
          max={dimension.maxValue}
          step={0.1}
          value={dimension.value.match(/[0-9]*(\.)?[0-9]*/)[0]}
          onChange={(event) => onControlChange(key, event.target.value + dimension.value.replace(/[0-9]*(\.)?[0-9]*/, ''))}
          style={{width: '100%'}}
        />
      </div>
    ))
  }
  
  const copyValuesToClipboard = () => {
    const tweakedStandardDimensionValues: { [dimensionCodeName: string]: string } = Object.values(dimensionsMap)
    .reduce((accumulator, current) => {
      accumulator[current.codeName] = current.value
      return accumulator
      },
      {}
    )

    const json = JSON.stringify(tweakedStandardDimensionValues, null, '  ')
    navigator.clipboard.writeText(json)
    triggerNotification('Values copied to clipboard')
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', border: '1px solid lightgrey', maxHeight: '90vh', overflow: 'auto'}}>
      <div style={{overflow: 'auto', flexGrow: 1, padding: '1rem'}}>
        { children }
      </div>

      <div style={{ flexShrink: 0, padding: '1rem', width: '12rem' }}>
        {controls}
        <div style={{ marginBlockStart: '0.5rem', fontSize: '0.8rem'}}>
          <button
            style={{backgroundColor: 'lightgrey', borderStyle: 'solid', paddingInline: '0.3rem'}}
            onClick={copyValuesToClipboard}
          >
            Copy To Clopboard
          </button>
        </div>
        <div style={{ marginBlockStart: '0.5rem', fontSize: '0.8rem'}}>      
          <button
            style={{backgroundColor: 'lightgrey', borderStyle: 'solid', paddingInline: '0.3rem'}}
            onClick={onReset}
          >
            Reset
          </button>
        </div>
        <div style={{ marginBlockStart: '0.5rem', fontSize: '0.9rem', color: 'grey', opacity: showNotification ? 1 : 0, transition: 'opacity 300ms' }}>
          { notificationText}
        </div>
      </div>
    </div>
  )
}

export default DimensionsTweakerWindow