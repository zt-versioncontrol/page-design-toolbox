import React, { useState } from 'react';
import DimensionsTweakerWindow, { type DimensionsMap } from './DimensionsTweakerWindow';
import {
  INPUT_OUTER_LABEL_HEIGHT,
  INPUT_OUTER_LABEL_FONT_SIZE,
  INPUT_OUTER_LABEL_FONT_WEIGHT,
  COMPACT_SINGLE_LINE_INPUT_HEIGHT,
  SINGLE_LINE_INPUT_HEIGHT,
  SINGLE_LINE_INPUT_INLINE_MARGIN,
  TEXT_CONTAINER_INLINE_PADDING,
  SECTION_MARGIN_BLOCK,
  SECTION_MARGIN_INLINE,
  CARD_PADDING_INLINE
} from '@/standards/Dimensions'

// TODO: demonstrate INPUT_INNER_LABEL_FONT_SIZE (checkbox)
// TODO: use SINGLE_LINE_INPUT_HEIGHT for text input box

const FormDimensions = () => {
  const getDefaultDimensionsMap = ():DimensionsMap => {
    return {
      inputOuterLabelHeight: {
        codeName: 'INPUT_OUTER_LABEL_HEIGHT',
        label: 'Input Outer Label Height',
        value: INPUT_OUTER_LABEL_HEIGHT,
        maxValue: 5
      },
      inputOuterLabelFontSize: {
        codeName: 'INPUT_OUTER_LABEL_FONT_SIZE',
        label: 'Input Outer Label Size',
        value: INPUT_OUTER_LABEL_FONT_SIZE,
        maxValue: 4
      },
      inputOuterLabelFontWeight: {
        codeName: 'INPUT_OUTER_LABEL_FONT_WEIGHT',
        label: 'Input Outer Label Font Weight',
        value: INPUT_OUTER_LABEL_FONT_WEIGHT,
        maxValue: 1400
      },
      compactSingleLineInputHeight: {
        codeName: 'COMPACT_SINGLE_LINE_INPUT_HEIGHT',
        label: 'Compact Input Height',
        value: COMPACT_SINGLE_LINE_INPUT_HEIGHT,
        maxValue: 7
      },
      singleLineInputHeight: {
        codeName: 'SINGLE_LINE_INPUT_HEIGHT',
        label: 'Input Height',
        value: SINGLE_LINE_INPUT_HEIGHT,
        maxValue: 7
      },
      singleLineInputInlineMargin: {
        codeName: 'SINGLE_LINE_INPUT_INLINE_MARGIN',
        label: 'Input Horizontal Margin',
        value: SINGLE_LINE_INPUT_INLINE_MARGIN,
        maxValue: 8
      },
      sectionMarginBlock: {
        codeName: 'SECTION_MARGIN_BLOCK',
        label: 'Form Section Vertical Margin',
        value: SECTION_MARGIN_BLOCK,
        maxValue: 10
      },
      sectionMarginInline: {
        codeName: 'SECTION_MARGIN_INLINE',
        label: 'Form Section Horizontal Margin',
        value: SECTION_MARGIN_INLINE,
        maxValue: 10
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
      <div style={{ marginBlockEnd: dimensionsMap.sectionMarginBlock.value, display: 'flex'}}>
        <div style={{
          marginInlineEnd: dimensionsMap.sectionMarginInline.value,
          flexGrow: '1',
          border: '1px solid lightgrey',
          padding: CARD_PADDING_INLINE
          }}
        >
          <div>
            <div style={{
              height: dimensionsMap.inputOuterLabelHeight.value,
              display: 'flex',
              alignItems: 'center',
              fontSize: dimensionsMap.inputOuterLabelFontSize.value,
              fontWeight: dimensionsMap.inputOuterLabelFontWeight.value,
              }}
            >
              Input Outer Label
            </div>
            <div style={{ height: dimensionsMap.singleLineInputHeight.value, display: 'flex', alignItems: 'center' }}>
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
          <div style={{height: dimensionsMap.compactSingleLineInputHeight.value, display: 'flex', alignItems: 'center' }}>
            <div>
              <input type='checkbox' /> Lorem Ipsum
            </div>
          </div>
        </div>
        <div style={{ flexGrow: '1', border: '1px solid lightgrey', padding: CARD_PADDING_INLINE}}>
          <div style={{ height: dimensionsMap.singleLineInputHeight.value, display: 'flex', alignItems: 'center' }}>
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
          <div style={{ height: dimensionsMap.singleLineInputHeight.value, display: 'flex', alignItems: 'center' }}>
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
      </div>
      <div style={{ border: '1px solid lightgrey', padding: CARD_PADDING_INLINE}}>
        <div>
          <div style={{
            height: dimensionsMap.inputOuterLabelHeight.value,
            display: 'flex',
            alignItems: 'center',
            fontSize: dimensionsMap.inputOuterLabelFontSize.value,
            fontWeight: dimensionsMap.inputOuterLabelFontWeight.value,
            }}
          >
            Input Outer Label
          </div>
          <div style={{ height: dimensionsMap.singleLineInputHeight.value, display: 'flex', alignItems: 'center' }}>
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
        <div>
          <div style={{
            height: dimensionsMap.inputOuterLabelHeight.value,
            display: 'flex',
            alignItems: 'center',
            fontSize: dimensionsMap.inputOuterLabelFontSize.value,
            fontWeight: dimensionsMap.inputOuterLabelFontWeight.value,
            }}
          >
            Input Outer Label
          </div>
          <div style={{ height: dimensionsMap.singleLineInputHeight.value, display: 'flex', alignItems: 'center' }}>
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
        <div>
          <div style={{ height: dimensionsMap.singleLineInputHeight.value, display: 'flex', alignItems: 'center' }}
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
        <div>
          <div style={{ height: dimensionsMap.singleLineInputHeight.value, display: 'flex', alignItems: 'center' }}>
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
        <div style={{height: dimensionsMap.compactSingleLineInputHeight.value, display: 'flex', alignItems: 'center' }}>
          <div>
            <input type='checkbox' /> Lorem Ipsum
          </div>
        </div>
        <div style={{height: dimensionsMap.compactSingleLineInputHeight.value, display: 'flex', alignItems: 'center' }}>
          <div style={{marginInlineEnd: dimensionsMap.singleLineInputInlineMargin.value}}>
            <input type='checkbox'/> Dolor Sit Amet
          </div>
          <div>
            <input type='checkbox' /> Picsum Dolor
          </div>
        </div>
        <div>
          <div style={{ height: dimensionsMap.singleLineInputHeight.value, display: 'flex', alignItems: 'center' }}>
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
        <div style={{height: dimensionsMap.compactSingleLineInputHeight.value, display: 'flex', alignItems: 'center' }}>
          <input type='checkbox' /> Check In
        </div>
        <div style={{ display: 'flex'}}>
          <div style={{ flexGrow: '1', marginInlineEnd: dimensionsMap.singleLineInputInlineMargin.value}}>
            <div style={{
              height: dimensionsMap.inputOuterLabelHeight.value,
              display: 'flex',
              alignItems: 'center',
              fontSize: dimensionsMap.inputOuterLabelFontSize.value,
              fontWeight: dimensionsMap.inputOuterLabelFontWeight.value,
              }}
            >
              Input Outer Label
            </div>
            <div style={{ height: dimensionsMap.singleLineInputHeight.value, display: 'flex', alignItems: 'center' }}>
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
          <div style={{ flexGrow: '1'}}>
            <div style={{
              height: dimensionsMap.inputOuterLabelHeight.value,
              display: 'flex',
              alignItems: 'center',
              fontSize: dimensionsMap.inputOuterLabelFontSize.value,
              fontWeight: dimensionsMap.inputOuterLabelFontWeight.value,
              }}
            >
              Input Outer Label
            </div>
            <div style={{ height: dimensionsMap.singleLineInputHeight.value, display: 'flex', alignItems: 'center' }}>
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
        </div>
      </div>
    </DimensionsTweakerWindow>
  )
}

export default FormDimensions

