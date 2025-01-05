import {
  CARD_PADDING_BLOCK,
  CARD_PADDING_INLINE,
  CARD_TITLE_FONT_SIZE,
  CARD_TITLE_MARGIN_BLOCK,
  TITLED_CARD_CONTENT_INLINE_PADDING,
  SCRIPT_FONT_SIZE
} from '@/standards/Dimensions'
import React, { useState } from 'react';
import DimensionsTweakerWindow, {DimensionsMap} from './DimensionsTweakerWindow';

const CardDimensions = () => {

  const getDefaultDimensionsMap = (): DimensionsMap => {
    return {
      cardPaddingBlock: {
        codeName: 'CARD_PADDING_BLOCK',
        label: 'Card Vertical Padding',
        value: CARD_PADDING_BLOCK,
        maxValue: 5
      },
      cardPaddingInline: {
        codeName: 'CARD_PADDING_INLINE',
        label: 'Card Horizontal Padding',
        value: CARD_PADDING_INLINE,
        maxValue: 5
      },
      cardTitleFontSize: {
        codeName: 'CARD_TITLE_FONT_SIZE',
        label: 'Card Title',
        value: CARD_TITLE_FONT_SIZE,
        maxValue: 4
      },
      cardTitleMarginBlock: {
        codeName: 'CARD_TITLE_MARGIN_BLOCK',
        label: 'Title Margin',
        value: CARD_TITLE_MARGIN_BLOCK,
        maxValue: 5
      },
      titledCardContentInlinePadding: {
        codeName: 'TITLED_CARD_CONTENT_INLINE_PADDING',
        label: 'Titled Content Padding',
        value: TITLED_CARD_CONTENT_INLINE_PADDING,
        maxValue: 5
      },
      scriptFontSize: {
        codeName: 'SCRIPT_FONT_SIZE',
        label: 'Script',
        value: SCRIPT_FONT_SIZE,
        maxValue: 3
      }
    }
  }

  // FIXME: type checking is not functioning in tsx files, type erros are not reported 
  const [dimensionsMap, setDimensionsMap] = useState<DimensionsMap>(getDefaultDimensionsMap())

  const controlChangeHandler = (dimensionKey: string, value: string) => {
    const updatedDimension = dimensionsMap[dimensionKey]
    updatedDimension.value = value
    setDimensionsMap({...dimensionsMap, [dimensionKey]: updatedDimension})
  }

  const resetHandler = () => {
    setDimensionsMap(getDefaultDimensionsMap())
  }

  return (
    <DimensionsTweakerWindow dimensionsMap={dimensionsMap} onControlChange={controlChangeHandler} onReset={resetHandler}>
      <div
        style={{
          height: '400px',
          width: '250px',
          border: '1px solid grey',
          paddingInline: dimensionsMap.cardPaddingInline.value,
          paddingBlock: dimensionsMap.cardPaddingBlock.value,
          display: 'flex',
          flexDirection: 'column',
          marginBlockEnd: '1rem'
        }}
      >
        <div style={{
          border: '1px solid blue',
          fontSize: dimensionsMap.cardTitleFontSize.value,
          marginBlockEnd: dimensionsMap.cardTitleMarginBlock.value
          }}
        >
          Card Title
        </div>
        <div style={{ border: '1px solid red', paddingInline: dimensionsMap.titledCardContentInlinePadding.value, flexGrow: '1', overflow: 'hidden'}}>
        <div style={{ border: '1px solid black', textOverflow: 'hidden', fontSize: dimensionsMap.scriptFontSize.value }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Eius nostrum, vitae error deserunt odit voluptates! Odio alias iusto enim tempora totam earum adipisci,
          </div>
        </div>
      </div>

      <div
        style={{
          height: '200px',
          width: '400px',
          border: '1px solid grey',
          paddingInline: dimensionsMap.cardPaddingInline.value,
          paddingBlock: dimensionsMap.cardPaddingBlock.value,
          display: 'flex',
          flexDirection: 'column',
          marginBlockEnd: '1rem'
        }}
      >
        <div style={{
          border: '1px solid grey',
          fontSize: dimensionsMap.cardTitleFontSize.value,
          marginBlockEnd: dimensionsMap.cardTitleMarginBlock.value
          }}
        >
          Card Title
        </div>
        <div style={{ border: '1px solid grey', paddingInline: dimensionsMap.titledCardContentInlinePadding.value, flexGrow: '1', overflow: 'hidden'}}>
          <div style={{ border: '1px solid black', textOverflow: 'hidden', fontSize: dimensionsMap.scriptFontSize.value }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Eius nostrum, vitae error deserunt odit voluptates! Odio.
          </div>
        </div>
      </div>

      <div
        style={{
          height: '400px',
          width: '600px',
          border: '1px solid grey',
          paddingInline: dimensionsMap.cardPaddingInline.value,
          paddingBlock: dimensionsMap.cardPaddingBlock.value,
          display: 'flex',
          flexDirection: 'column',
          marginBlockEnd: '1rem'
        }}
      >
        <div style={{
          border: '1px solid grey',
          fontSize: dimensionsMap.cardTitleFontSize.value,
          marginBlockEnd: dimensionsMap.cardTitleMarginBlock.value
          }}
        >
          Card Title
        </div>
        <div style={{ border: '1px solid grey', paddingInline: dimensionsMap.titledCardContentInlinePadding.value, flexGrow: '1', overflow: 'hidden'}}>
          <div style={{ border: '1px solid black', textOverflow: 'hidden', fontSize: dimensionsMap.scriptFontSize.value }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Eius nostrum, vitae error deserunt odit voluptates! Odio.
          </div>
        </div>
      </div>

      <div
        style={{
          height: '400px',
          width: '250px',
          border: '1px solid grey',
          paddingInline: dimensionsMap.cardPaddingInline.value,
          paddingBlock: dimensionsMap.cardPaddingBlock.value,
          display: 'flex',
          flexDirection: 'column',
          marginBlockEnd: '1rem'
        }}
      >
        <div style={{
          border: '1px solid red',
          textOverflow: 'hidden',
          flexGrow: '1',
          overflow: 'hidden',
          fontSize: dimensionsMap.scriptFontSize.value
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eius nostrum, vitae error deserunt odit voluptates! Odio alias iusto enim tempora totam earum adipisci,
        </div>
      </div>
    </DimensionsTweakerWindow>
  )
}

export default CardDimensions