import DimensionsTweakerWindow, { type DimensionsMap } from './DimensionsTweakerWindow';
import {
  SECTION_MARGIN_BLOCK,
  SINGLE_LINE_INPUT_HEIGHT,
  INPUT_OUTER_LABEL_FONT_SIZE,
  INPUT_OUTER_LABEL_FONT_WEIGHT,
  INPUT_OUTER_LABEL_HEIGHT,
  TAB_TITLE_FONT_SIZE,
  TAB_TITLE_HEIGHT,
  TITLE_FONT_SIZE,
  TITLE_MARGIN_BLOCK,
  SCRIPT_FONT_SIZE,
  TEXT_CONTAINER_INLINE_PADDING,
  LIST_INNER_TITLE_FONT_SIZE,
  LIST_INNER_TITLE_FONT_WEIGHT,
  LIST_ITEM_FONT_SIZE,
  LIST_TITLE_FONT_SIZE,
  LIST_TITLE_MARGIN_BLOCK,
  LIST_ITEM_HEIGHT,
  CARD_PADDING_INLINE,
  CARD_PADDING_BLOCK,
  CARD_TITLE_FONT_SIZE,
  CARD_TITLE_MARGIN_BLOCK,
  TITLED_CARD_CONTENT_INLINE_PADDING,
} from '@/standards/Dimensions'
import React, { useState } from 'react';

// TODO: demonstrate INPUT_INNER_LABEL_FONT_SIZE (checkbox)
// TODO: add icons
// TODO: add TAB_SUBTITLE_FONT_SIZE

const FontDimensions = () => {
  const getDefaultDimensionsMap = ():DimensionsMap => {
    return {
      titleFontSize: {
        codeName: 'TITLE_FONT_SIZE',
        label: 'Title',
        value: TITLE_FONT_SIZE,
        maxValue: 4,
      },
      scriptFontSize: {
        codeName: 'SCRIPT_FONT_SIZE',
        label: 'Script',
        value: SCRIPT_FONT_SIZE,
        maxValue: 3
      },
      listTitleFontSize: {
        codeName: 'LIST_TITLE_FONT_SIZE',
        label: 'List Title',
        value: LIST_TITLE_FONT_SIZE,
        maxValue: 4
      },
      listInnerTitleFontSize: {
        codeName: 'LIST_INNER_TITLE_FONT_SIZE',
        label: 'List Group',
        value: LIST_INNER_TITLE_FONT_SIZE,
        maxValue: 3
      },
      listInnerTitleFontWeight: {
        codeName: 'LIST_INNER_TITLE_FONT_WEIGHT',
        label: 'List Group Font Weight',
        value: LIST_INNER_TITLE_FONT_WEIGHT,
        maxValue: 1400
      },
      listItemFontSize: {
        codeName: 'LIST_ITEM_FONT_SIZE',
        label: 'List Item',
        value: LIST_ITEM_FONT_SIZE,
        maxValue: 3
      },
      cardTitleFontSize: {
        codeName: 'CARD_TITLE_FONT_SIZE',
        label: 'Card Title',
        value: CARD_TITLE_FONT_SIZE,
        maxValue: 4
      },
      tabTitleFontSize: {
        codeName: 'TAB_TITLE_FONT_SIZE',
        label: 'Tab Title',
        value: TAB_TITLE_FONT_SIZE,
        maxValue: 4
      },
      inputOuterLabelFontSize: {
        codeName: 'INPUT_OUTER_LABEL_FONT_SIZE',
        label: 'Input Outer Label',
        value: INPUT_OUTER_LABEL_FONT_SIZE,
        maxValue: 4
      },
      inputOuterLabelFontWeight: {
        codeName: 'INPUT_OUTER_LABEL_FONT_WEIGHT',
        label: 'Input Outer Label Font Weight',
        value: INPUT_OUTER_LABEL_FONT_WEIGHT,
        maxValue: 1400
      }
    }
  }

  const [dimensionsMap, setDimensionsMap] = useState<DimensionsMap>(getDefaultDimensionsMap())

  const onControlChange = (dimensionKey: string, newValue) => {
    const updatedDimension = {
      ...dimensionsMap[dimensionKey],
      value: newValue
    }
    setDimensionsMap({...dimensionsMap, [dimensionKey]: updatedDimension})
  }

  const handleReset = () => {
    setDimensionsMap(getDefaultDimensionsMap())
  }

  return (
    <DimensionsTweakerWindow dimensionsMap={dimensionsMap} onControlChange={onControlChange} onReset={handleReset}>
      <div style={{ marginBlockEnd: SECTION_MARGIN_BLOCK }}>
        <div style={{fontSize: dimensionsMap.titleFontSize.value, marginBlockEnd: TITLE_MARGIN_BLOCK}}>
          Sample Title
        </div>
        <div style={{fontSize: dimensionsMap.scriptFontSize.value}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Vel provident totam aspernatur optio dolor ipsam ratione labore quae ducimus ullam,
          libero rerum maxime distinctio, maiores nihil doloribus voluptatum
          sapiente reprehenderit incidunt non earum voluptatem hic.
          In provident libero nobis at perspiciatis,
          nemo incidunt accusantium dolor explicabo magnam quas illum quibusdam
          repudiandae amet est ea soluta optio mollitia.
        </div>
      </div> 

      <div style={{ marginBlockEnd: SECTION_MARGIN_BLOCK }}>
        <div style={{fontSize: dimensionsMap.listTitleFontSize.value, marginBlockEnd: LIST_TITLE_MARGIN_BLOCK}}>
          List title
        </div>
        <div style={{
          fontSize: dimensionsMap.listItemFontSize.value,
          paddingInline: TEXT_CONTAINER_INLINE_PADDING,
          height: LIST_ITEM_HEIGHT,
          border: '1px solid lightgrey',
          display: 'flex',
          alignItems: 'center'
          }}
        >
          First Item
        </div>
        <div style={{
          fontSize: dimensionsMap.listItemFontSize.value,
          paddingInline: TEXT_CONTAINER_INLINE_PADDING,
          height: LIST_ITEM_HEIGHT,
          border: '1px solid lightgrey',
          display: 'flex',
          alignItems: 'center'
          }}
        >
          Second Item
        </div>
        <div style={{
          fontSize: dimensionsMap.listInnerTitleFontSize.value,
          paddingInline: TEXT_CONTAINER_INLINE_PADDING,
          fontWeight: dimensionsMap.listInnerTitleFontWeight.value,
          height: LIST_ITEM_HEIGHT,
          display: 'flex',
          alignItems: 'center',
          border: '1px solid lightgrey'
          }}
        >
          Group 1 Title
        </div>
        <div style={{
          fontSize: dimensionsMap.listItemFontSize.value,
          paddingInline: TEXT_CONTAINER_INLINE_PADDING,
          height: LIST_ITEM_HEIGHT,
          border: '1px solid lightgrey',
          display: 'flex',
          alignItems: 'center'
          }}
        >
          Third Item
        </div>
        <div style={{
          fontSize: dimensionsMap.listItemFontSize.value,
          paddingInline: TEXT_CONTAINER_INLINE_PADDING,
          height: LIST_ITEM_HEIGHT,
          border: '1px solid lightgrey',
          display: 'flex',
          alignItems: 'center'
          }}
        >
          Fourth Item
        </div>
        <div style={{
          fontSize: dimensionsMap.listInnerTitleFontSize.value,
          paddingInline: TEXT_CONTAINER_INLINE_PADDING,
          fontWeight: dimensionsMap.listInnerTitleFontWeight.value,
          height: LIST_ITEM_HEIGHT,
          display: 'flex',
          alignItems: 'center',
          border: '1px solid lightgrey'
          }}
        >
          Group 2 Title
        </div>
        <div style={{
          fontSize: dimensionsMap.listItemFontSize.value,
          paddingInline: TEXT_CONTAINER_INLINE_PADDING,
          height: LIST_ITEM_HEIGHT,
          border: '1px solid lightgrey',
          display: 'flex',
          alignItems: 'center'
          }}
        >
          Fifth Item
        </div>
        </div>

      <div
      style={{
        height: '200px',
        width: '300px',
        border: '1px solid lightgrey',
        paddingInline: CARD_PADDING_INLINE,
        paddingBlock: CARD_PADDING_BLOCK,
        display: 'flex',
        flexDirection: 'column',
        marginBlockEnd: SECTION_MARGIN_BLOCK
      }}
    >
      <div style={{ fontSize: dimensionsMap.cardTitleFontSize.value, marginBlockEnd: CARD_TITLE_MARGIN_BLOCK, flexShrink: '0' }}>
        Card Title
      </div>
      <div style={{ paddingInline: TITLED_CARD_CONTENT_INLINE_PADDING, flexGrow: '1', overflow: 'hidden'}}>
        <div style={{ textOverflow: 'hidden', fontSize: dimensionsMap.scriptFontSize.value }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eius nostrum, vitae error deserunt odit voluptates! Odio.
        </div>
      </div>
    </div>

      <div style={{display: 'flex', border: '1px solid lightgrey', marginBlockEnd: SECTION_MARGIN_BLOCK}}>
        <div style={{
          fontSize: dimensionsMap.tabTitleFontSize.value,
          paddingInline: TEXT_CONTAINER_INLINE_PADDING,
          height: TAB_TITLE_HEIGHT, display:
          'flex',
          alignItems: 'center',
          border: '1px solid lightgrey',
          color: 'blue',
          }}
        >
          First Tab
        </div>
        <div style={{
          fontSize: dimensionsMap.tabTitleFontSize.value,
          paddingInline: TEXT_CONTAINER_INLINE_PADDING,
          height: TAB_TITLE_HEIGHT, display:
          'flex',
          alignItems: 'center',
          border: '1px solid lightgrey'
          }}
        >
          SECOND TAB
        </div>
        <div style={{
          fontSize: dimensionsMap.tabTitleFontSize.value,
          paddingInline: TEXT_CONTAINER_INLINE_PADDING,
          height: TAB_TITLE_HEIGHT, display:
          'flex',
          alignItems: 'center',
          border: '1px solid lightgrey'
          }}
        >
          Third Tab
        </div>
      </div>

      <div style={{ marginBlockEnd: SECTION_MARGIN_BLOCK }}>
        <div style={{
          height: INPUT_OUTER_LABEL_HEIGHT,
          display: 'flex',
          alignItems: 'center',
          fontSize: dimensionsMap.inputOuterLabelFontSize.value,
          fontWeight: dimensionsMap.inputOuterLabelFontWeight.value,
          }}
        >
          Input Outer Label
        </div>
        <div style={{ height: SINGLE_LINE_INPUT_HEIGHT, display: 'flex', alignItems: 'center' }}
        >
          <input
            type="text"
            style={{
              paddingBlock: '0.5rem',
              paddingInline: TEXT_CONTAINER_INLINE_PADDING,
              width: '100%',
              fontSize: '1rem',
              outline: '1px solid lightgrey'
              }}
            />
        </div>
      </div>
    </DimensionsTweakerWindow>
  )
}

export default FontDimensions