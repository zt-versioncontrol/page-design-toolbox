import React, { useState } from 'react'
import DimensionsTweakerWindow, { type DimensionsMap } from "./DimensionsTweakerWindow";
import {
  LIST_TITLE_FONT_SIZE,
  LIST_TITLE_MARGIN_BLOCK,
  TEXT_CONTAINER_INLINE_PADDING,
  LIST_INNER_TITLE_FONT_SIZE,
  LIST_INNER_TITLE_FONT_WEIGHT,
  LIST_ITEM_FONT_SIZE,
  LIST_ITEM_HEIGHT
} from '@/standards/Dimensions'

const ListDimensions = () => {
  const getDefaultDimensionsMap = (): DimensionsMap => {
    return {
        listTitleFontSize: {
        codeName: 'LIST_TITLE_FONT_SIZE',
        label: 'List Title Size',
        value: LIST_TITLE_FONT_SIZE,
        maxValue: 4
      },
      listTitleMarginBlock: {
        codeName: 'LIST_TITLE_MARGIN_BLOCK',
        label: 'List Title Margin',
        value: LIST_TITLE_MARGIN_BLOCK,
        maxValue: 4
      },
      textContainerInlinePadding: {
        codeName: 'TEXT_CONTAINER_INLINE_PADDING',
        label: 'List Item horizontal padding',
        value: TEXT_CONTAINER_INLINE_PADDING,
        maxValue: 3
      },
      listInnerTitleFontSize: {
        codeName: 'LIST_INNER_TITLE_FONT_SIZE',
        label: 'List Group Size',
        value: LIST_INNER_TITLE_FONT_SIZE,
        maxValue: 3
      },
      listInnerTitleFontWeight: {
        codeName: 'LIST_INNER_TITLE_FONT_WEIGHT',
        label: 'List Group font weight',
        value: LIST_INNER_TITLE_FONT_WEIGHT,
        maxValue: 1400
      },
      listItemFontSize: {
        codeName: 'LIST_ITEM_FONT_SIZE',
        label: 'List Item Size',
        value: LIST_ITEM_FONT_SIZE,
        maxValue: 3
      },
      listItemHeight: {
        codeName: 'LIST_ITEM_HEIGHT',
        label: 'List Item Height',
        value: LIST_ITEM_HEIGHT,
        maxValue: 4
      }
    }
  }

  const [dimensionsMap, setDimensionsMap] = useState(getDefaultDimensionsMap())

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
      <div style={{
        fontSize: dimensionsMap.listTitleFontSize.value,
        marginBlockEnd: dimensionsMap.listTitleMarginBlock.value
        }}
      >
        List title
      </div>
      <div style={{
        fontSize: dimensionsMap.listItemFontSize.value,
        paddingInline: dimensionsMap.textContainerInlinePadding.value,
        height: dimensionsMap.listItemHeight.value,
        border: '1px solid lightgrey',
        display: 'flex',
        alignItems: 'center'
        }}
      >
        First Item
      </div>
      <div style={{
        fontSize: dimensionsMap.listItemFontSize.value,
        paddingInline: dimensionsMap.textContainerInlinePadding.value,
        height: dimensionsMap.listItemHeight.value,
        border: '1px solid lightgrey',
        display: 'flex',
        alignItems: 'center'
        }}
      >
        Second Item
      </div>
      <div style={{
        fontSize: dimensionsMap.listInnerTitleFontSize.value,
        paddingInline: dimensionsMap.textContainerInlinePadding.value,
        fontWeight: dimensionsMap.listInnerTitleFontWeight.value,
        height: dimensionsMap.listItemHeight.value,
        display: 'flex',
        alignItems: 'center',
        border: '1px solid lightgrey'
        }}
      >
        Group 1 Title
      </div>
      <div style={{
        fontSize: dimensionsMap.listItemFontSize.value,
        paddingInline: dimensionsMap.textContainerInlinePadding.value,
        height: dimensionsMap.listItemHeight.value,
        border: '1px solid lightgrey',
        display: 'flex',
        alignItems: 'center'
        }}
      >
        Third Item
      </div>
      <div style={{
        fontSize: dimensionsMap.listItemFontSize.value,
        paddingInline: dimensionsMap.textContainerInlinePadding.value,
        height: dimensionsMap.listItemHeight.value,
        border: '1px solid lightgrey',
        display: 'flex',
        alignItems: 'center'
        }}
      >
        Fourth Item
      </div>
      <div style={{
        fontSize: dimensionsMap.listInnerTitleFontSize.value,
        paddingInline: dimensionsMap.textContainerInlinePadding.value,
        fontWeight: dimensionsMap.listInnerTitleFontWeight.value,
        height: dimensionsMap.listItemHeight.value,
        display: 'flex',
        alignItems: 'center',
        border: '1px solid lightgrey'
        }}
      >
        Group 2 Title
      </div>
      <div style={{
        fontSize: dimensionsMap.listItemFontSize.value,
        paddingInline: dimensionsMap.textContainerInlinePadding.value,
        height: dimensionsMap.listItemHeight.value,
        border: '1px solid lightgrey',
        display: 'flex',
        alignItems: 'center'
        }}
      >
        Fifth Item
      </div>
    </DimensionsTweakerWindow>
  )
}

export default ListDimensions