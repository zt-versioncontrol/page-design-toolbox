import * as dimensions from '../../../../src/standards/Dimensions'
import * as componentTags from '../../ComponentTags.ts'

// Typescript error here is ignored. All required attributes are added in the loop
const dimensionsDoc: { [dimensionKey in keyof typeof dimensions]: { description: string, tags: string[] } } = {}

for (let dimensionName of Object.getOwnPropertyNames(dimensions)){
    dimensionsDoc[dimensionName] = { description: '', tags: [] }
}

/*
keep line sorted alphabetically, according to dimension name. sorting is word wise.
A dimension may have multiple tags.
Only add the essential tags. Do not overflow a dimension with tags.
*/

dimensionsDoc.BOX_SHADOW.description = 'Dimensions of shadow effect used to simulate elevation of a document block'
dimensionsDoc.BOX_SHADOW.tags.push(componentTags.HAS_SHADOW)

dimensionsDoc.CARD_PADDING_BLOCK.description = 'Vertical padding of card layout. This applies to all card contents including card title'
dimensionsDoc.CARD_PADDING_BLOCK.tags.push(componentTags.CARD)
dimensionsDoc.CARD_PADDING_BLOCK.tags.push(componentTags.HAS_CARD)

dimensionsDoc.CARD_PADDING_INLINE.description = 'Horizontal padding of card layout. This applies to all card centents including card title'
dimensionsDoc.CARD_PADDING_INLINE.tags.push(componentTags.CARD)
dimensionsDoc.CARD_PADDING_INLINE.tags.push(componentTags.HAS_CARD)

dimensionsDoc.CARD_TITLE_FONT_SIZE.description = 'Card Main title font size'
dimensionsDoc.CARD_TITLE_FONT_SIZE.tags.push(componentTags.CARD)
dimensionsDoc.CARD_TITLE_FONT_SIZE.tags.push(componentTags.HAS_TITLE)
dimensionsDoc.CARD_TITLE_FONT_SIZE.tags.push(componentTags.HAS_CARD)

dimensionsDoc.CARD_TITLE_MARGIN_BLOCK.description = 'Vertical distance between card title and contents'
dimensionsDoc.CARD_TITLE_MARGIN_BLOCK.tags.push(componentTags.CARD)
dimensionsDoc.CARD_TITLE_MARGIN_BLOCK.tags.push(componentTags.HAS_TITLE)
dimensionsDoc.CARD_TITLE_MARGIN_BLOCK.tags.push(componentTags.HAS_CARD)

dimensionsDoc.COMPACT_SINGLE_LINE_INPUT_HEIGHT.description = 'Height of a compact single line input element. for example, SelectableItem'
dimensionsDoc.COMPACT_SINGLE_LINE_INPUT_HEIGHT.tags.push(componentTags.COMPACT_INPUT_LINE)
dimensionsDoc.COMPACT_SINGLE_LINE_INPUT_HEIGHT.tags.push(componentTags.HAS_INPUT)

dimensionsDoc.CONTAINER_BORDER_RADIUS.description = 'Radius of any border enclosing some contents'
dimensionsDoc.CONTAINER_BORDER_RADIUS.tags.push(componentTags.HAS_BORDER)

dimensionsDoc.DISTANCE_FROM_INLINE_TEXT.description = 'Horizontal distance that separate document element from text'
dimensionsDoc.DISTANCE_FROM_INLINE_TEXT.tags.push(componentTags.HAS_TEXT)

dimensionsDoc.EMPHASIZED_BORDER_THICKNESS.description = 'Thickness of border used to emphasize a single document element or small section, like focused text input.'
dimensionsDoc.EMPHASIZED_BORDER_THICKNESS.tags.push(componentTags.HAS_BORDER)

dimensionsDoc.EXTRA_LARGE_DISPLAY_BREAKPOINT.description = "Maximum display width for extra large screens such as 1440p desktop screen"
dimensionsDoc.EXTRA_LARGE_DISPLAY_BREAKPOINT.tags.push(componentTags.USES_DISPLAY_SIZE)

dimensionsDoc.GRID_GUTTER.description = 'Space between cells in a grid'
dimensionsDoc.GRID_GUTTER.tags.push(componentTags.HAS_SECTIONS)

dimensionsDoc.GRID_GUTTER_HALVED.description = 'Half the gutter width of GRID_GUTTER. Used when applying gutter to each cell separately to get the same result as GRID_GUTTER (since it is applied twice)'
dimensionsDoc.GRID_GUTTER_HALVED.tags.push(componentTags.HAS_SECTIONS)

// TODO: define a new tag if necessary
dimensionsDoc.HORIZONTAL_RULE_THIKNESS.description = 'Thikness of <hr> element, used with border-width CSS property'

dimensionsDoc.IN_SCRIPT_ICON.description = 'Size of icon that fits within default sized script (using SCRIPT_FONT_SIZE)'
dimensionsDoc.IN_SCRIPT_ICON.tags.push(componentTags.HAS_ICON)
dimensionsDoc.IN_SCRIPT_ICON.tags.push(componentTags.ICON)

dimensionsDoc.IN_SMALL_SCRIPT_ICON.description = 'Size of icon that fits within any script smaller than default script size (smaller than SCRIPT_FONT_SIZE'
dimensionsDoc.IN_SMALL_SCRIPT_ICON.tags.push(componentTags.HAS_ICON)
dimensionsDoc.IN_SMALL_SCRIPT_ICON.tags.push(componentTags.ICON)

dimensionsDoc.INPUT_INNER_LABEL_FONT_SIZE.description = 'Font size for label inside input block or within the same line'
dimensionsDoc.INPUT_INNER_LABEL_FONT_SIZE.tags.push(componentTags.INPUT)
dimensionsDoc.INPUT_INNER_LABEL_FONT_SIZE.tags.push(componentTags.HAS_INPUT)

dimensionsDoc.INPUT_OUTER_LABEL_FONT_SIZE.description = 'Font size of label placed before (usually vertically) input field'
dimensionsDoc.INPUT_OUTER_LABEL_FONT_SIZE.tags.push(componentTags.INPUT)
dimensionsDoc.INPUT_OUTER_LABEL_FONT_SIZE.tags.push(componentTags.HAS_INPUT)

dimensionsDoc.INPUT_OUTER_LABEL_FONT_WEIGHT.description = 'Font weight of label placed before (usually vertically) input field'
dimensionsDoc.INPUT_OUTER_LABEL_FONT_WEIGHT.tags.push(componentTags.INPUT)
dimensionsDoc.INPUT_OUTER_LABEL_FONT_WEIGHT.tags.push(componentTags.HAS_INPUT)

dimensionsDoc.INPUT_OUTER_LABEL_HEIGHT.description = 'Height of label placed vertically before input field'
dimensionsDoc.INPUT_OUTER_LABEL_HEIGHT.tags.push(componentTags.INPUT)
dimensionsDoc.INPUT_OUTER_LABEL_HEIGHT.tags.push(componentTags.HAS_INPUT)

dimensionsDoc.INTEGRATED_ACTION_ICON.description = 'Smallest size of icon used as a button. Used only for icons nested in cramped area'
dimensionsDoc.INTEGRATED_ACTION_ICON.tags.push(componentTags.HAS_ICON)
dimensionsDoc.INTEGRATED_ACTION_ICON.tags.push(componentTags.ICON)
dimensionsDoc.INTEGRATED_ACTION_ICON.tags.push(componentTags.HAS_BUTTON)

dimensionsDoc.INTEGRATED_ICON.description = 'Smallest size of an icon. Used only for icons in cramped area'
dimensionsDoc.INTEGRATED_ICON.tags.push(componentTags.HAS_ICON)
dimensionsDoc.INTEGRATED_ICON.tags.push(componentTags.ICON)

dimensionsDoc.LARGE_DISPLAY_BREAKPOINT.description = "Maximum display width for large screens such as high definition (1080p) desktop screen"
dimensionsDoc.LARGE_DISPLAY_BREAKPOINT.tags.push(componentTags.USES_DISPLAY_SIZE)

dimensionsDoc.LIST_INNER_TITLE_FONT_SIZE.description = 'Font size for a embedded title, such as group title'
dimensionsDoc.LIST_INNER_TITLE_FONT_SIZE.tags.push(componentTags.LIST)
dimensionsDoc.LIST_INNER_TITLE_FONT_SIZE.tags.push(componentTags.HAS_TITLE)

dimensionsDoc.LIST_INNER_TITLE_FONT_WEIGHT.description = 'Font thikness (font weight CSS property) for a title embeded within a list, such as group title'
dimensionsDoc.LIST_INNER_TITLE_FONT_WEIGHT.tags.push(componentTags.LIST)
dimensionsDoc.LIST_INNER_TITLE_FONT_WEIGHT.tags.push(componentTags.HAS_TITLE)

dimensionsDoc.LIST_ITEM_FONT_SIZE.description = 'Font size for a list of items that are mainly composed of text'
dimensionsDoc.LIST_ITEM_FONT_SIZE.tags.push(componentTags.LIST)

dimensionsDoc.LIST_ITEM_HEIGHT.description = 'Height of item container in a listing, which is mainly composed of text'
dimensionsDoc.LIST_ITEM_HEIGHT.tags.push(componentTags.LIST)

dimensionsDoc.LIST_TITLE_FONT_SIZE.description = 'Font size for a list title'
dimensionsDoc.LIST_TITLE_FONT_SIZE.tags.push(componentTags.LIST)
dimensionsDoc.LIST_TITLE_FONT_SIZE.tags.push(componentTags.HAS_TITLE)

dimensionsDoc.LIST_TITLE_MARGIN_BLOCK.description = 'Vertical distance between list title and list items'
dimensionsDoc.LIST_TITLE_MARGIN_BLOCK.tags.push(componentTags.LIST)
dimensionsDoc.LIST_TITLE_MARGIN_BLOCK.tags.push(componentTags.HAS_TITLE)

dimensionsDoc.MEDIUM_ACTION_ICON.description = 'Size of icon used as a button. Should be the default option for button like icons'
dimensionsDoc.MEDIUM_ACTION_ICON.tags.push(componentTags.HAS_ICON)
dimensionsDoc.MEDIUM_ACTION_ICON.tags.push(componentTags.ICON)
dimensionsDoc.MEDIUM_ACTION_ICON.tags.push(componentTags.HAS_BUTTON)

dimensionsDoc.MEDIUM_DISPLAY_BREAKPOINT.description = 'Maximum display width for medium devices such as large tablet'
dimensionsDoc.MEDIUM_DISPLAY_BREAKPOINT.tags.push(componentTags.USES_DISPLAY_SIZE)

dimensionsDoc.MOBILE_BREAKPOINT.description = 'Maximum display width for single handed devices'
dimensionsDoc.MOBILE_BREAKPOINT.tags.push(componentTags.USES_DISPLAY_SIZE)

// TODO: define required tags
dimensionsDoc.MOBILE_POPPED_SETTINGS_CARD_HEIGHT.description = 'Height of a settings card placed inside a popup menu in mobile mode'

// TODO: define required tags
dimensionsDoc.MOBILE_POPPED_SETTINGS_CARD_WIDTH.description = 'Width of a settings card placed inside a popup menu in mobile mode'

dimensionsDoc.NORMAL_BORDER_THICKNESS.description = 'Thickness of border used to specifically distinguish some document elements or small sections, like text input.'
dimensionsDoc.NORMAL_BORDER_THICKNESS.tags.push(componentTags.HAS_BORDER)

// TODO: demonstrate in playground
dimensionsDoc.OVERLAY_INLINE_PADDING.description = 'Horizontal padding of overlay container'
dimensionsDoc.OVERLAY_INLINE_PADDING.tags.push(componentTags.HAS_OVERLAY)

// TODO: define required tags
dimensionsDoc.POPPED_SETTINGS_CARD_HEIGHT.description = 'Height for a settings card placed inside a popup menu in desktop mode'

// TODO: define required tags
dimensionsDoc.POPPED_SETTINGS_CARD_WIDTH.description = 'Width for a settings card inserted inside a popup menu in desktop mode'

dimensionsDoc.PROMINENT_ICON.description = 'Size of an icon that has higher emphasis than a default sized nearby script'
dimensionsDoc.PROMINENT_ICON.tags.push(componentTags.HAS_ICON)
dimensionsDoc.PROMINENT_ICON.tags.push(componentTags.ICON)

dimensionsDoc.SCRIPT_FONT_SIZE.description = 'Font size of any unbound text'
dimensionsDoc.SCRIPT_FONT_SIZE.tags.push(componentTags.HAS_TEXT)

dimensionsDoc.SECTION_MARGIN_BLOCK.description = 'Vertical Distance between separate sections. Attention should be paid to not using it twice while separating two sections'
dimensionsDoc.SECTION_MARGIN_BLOCK.tags.push(componentTags.HAS_SECTIONS)

dimensionsDoc.SECTION_MARGIN_INLINE.description = 'Horizontal Distance between separate sections. Attention should be paid to not using it twice while separating two sections'
dimensionsDoc.SECTION_MARGIN_INLINE.tags.push(componentTags.HAS_SECTIONS)

// TODO: define required tags
dimensionsDoc.SETTINGS_CARD_IN_MOBILE_MODAL_HEIGHT.description = 'Height of settings card inside a modal or dialog box in mobile mode'

// TODO: define required tags
dimensionsDoc.SETTINGS_CARD_IN_MOBILE_MODAL_WIDTH.description = 'Width of settings card inside a modal or dialog box in mobile mod'

// TODO: define required tags
dimensionsDoc.SETTINGS_CARD_IN_MODAL_HEIGHT.description = 'Height of settings card inside a modal or dialog box'

// TODO: define required tags
dimensionsDoc.SETTINGS_CARD_IN_MODAL_WIDTH.description = 'Width of settings card inside a modal or dialog box'

dimensionsDoc.SINGLE_LINE_INPUT_HEIGHT.description = 'Height of a single line input element. Such as NumberInput'
dimensionsDoc.SINGLE_LINE_INPUT_HEIGHT.tags.push(componentTags.INPUT_LINE)
dimensionsDoc.SINGLE_LINE_INPUT_HEIGHT.tags.push(componentTags.HAS_INPUT)

dimensionsDoc.SINGLE_LINE_INPUT_INLINE_MARGIN.description = 'Distance between single line input (compact or regular) and an element in the same line'
dimensionsDoc.SINGLE_LINE_INPUT_INLINE_MARGIN.tags.push(componentTags.INPUT_LINE)
dimensionsDoc.SINGLE_LINE_INPUT_INLINE_MARGIN.tags.push(componentTags.COMPACT_INPUT_LINE)
dimensionsDoc.SINGLE_LINE_INPUT_INLINE_MARGIN.tags.push(componentTags.HAS_INPUT)

dimensionsDoc.INPUT_VALIDATION_TEXT_CONTAINER_HEIGHT.description = 'Height of input validation text container'
dimensionsDoc.INPUT_VALIDATION_TEXT_CONTAINER_HEIGHT.tags.push(componentTags.INPUT)
dimensionsDoc.INPUT_VALIDATION_TEXT_CONTAINER_HEIGHT.tags.push(componentTags.HAS_INPUT)

dimensionsDoc.INPUT_VALIDATION_TEXT_FONT_SIZE.description = 'Font size of input validation text'
dimensionsDoc.INPUT_VALIDATION_TEXT_FONT_SIZE.tags.push(componentTags.INPUT)
dimensionsDoc.INPUT_VALIDATION_TEXT_FONT_SIZE.tags.push(componentTags.HAS_INPUT)

dimensionsDoc.SMALL_ACTION_ICON.description = 'Size of small icon used as a button. Only used in specific situations with small screens, usually mobile'
dimensionsDoc.SMALL_ACTION_ICON.tags.push(componentTags.HAS_ICON)
dimensionsDoc.SMALL_ACTION_ICON.tags.push(componentTags.ICON)
dimensionsDoc.SMALL_ACTION_ICON.tags.push(componentTags.HAS_BUTTON)

dimensionsDoc.SMALL_DISPLAY_BREAKPOINT.description = 'Maximum display width for small devices such as small tablet'
dimensionsDoc.SMALL_DISPLAY_BREAKPOINT.tags.push(componentTags.USES_DISPLAY_SIZE)

dimensionsDoc.SOFT_BORDER_THICKNESS.description = 'Thickness of low emphasis borders or borders that separate sections within the same container'
dimensionsDoc.SOFT_BORDER_THICKNESS.tags.push(componentTags.HAS_BORDER)

dimensionsDoc.TAB_SUBTITLE_FONT_SIZE.description = 'Font size for tab secondary title'
dimensionsDoc.TAB_SUBTITLE_FONT_SIZE.tags.push(componentTags.HAS_TABS)

dimensionsDoc.TAB_TITLE_FONT_SIZE.description = 'Font size for tab title'
dimensionsDoc.TAB_TITLE_FONT_SIZE.tags.push(componentTags.HAS_TABS)

dimensionsDoc.TAB_TITLE_HEIGHT.description = 'Height of tab title'
dimensionsDoc.TAB_TITLE_HEIGHT.tags.push(componentTags.HAS_TABS)

dimensionsDoc.TAB_WINDOW_PADDING_BLOCK.description = 'Vertical padding (top and bottom) for tab window container'
dimensionsDoc.TAB_WINDOW_PADDING_BLOCK.tags.push(componentTags.HAS_TABS)

dimensionsDoc.TAB_WINDOW_PADDING_INLINE.description = 'Horizontal padding (left and right) for tab window container'
dimensionsDoc.TAB_WINDOW_PADDING_INLINE.tags.push(componentTags.HAS_TABS)

dimensionsDoc.TAB_TITLES_BAR_PADDING.description = 'Padding of tab titles bar'
dimensionsDoc.TAB_TITLES_BAR_PADDING.tags.push(componentTags.HAS_TABS)

dimensionsDoc.TEXT_CONTAINER_INLINE_PADDING.description = 'Direct text container horizontal padding (inline padding)'
dimensionsDoc.TEXT_CONTAINER_INLINE_PADDING.tags.push(componentTags.HAS_TEXT)

dimensionsDoc.TITLE_FONT_SIZE.description = 'Font size for any title in a context where there is no hierarchy of titles'
dimensionsDoc.TITLE_FONT_SIZE.tags.push(componentTags.HAS_TITLE)

dimensionsDoc.TITLE_MARGIN_BLOCK.description = 'Vertical margin below a title'
dimensionsDoc.TITLE_MARGIN_BLOCK.tags.push(componentTags.HAS_TITLE)

dimensionsDoc.TITLED_CARD_CONTENT_INLINE_PADDING.description = 'Additional horizontal padding to card contents when card has a title. This padding is applied in addition to CARD_PADDING_INLINE'
dimensionsDoc.TITLED_CARD_CONTENT_INLINE_PADDING.tags.push(componentTags.CARD)
dimensionsDoc.TITLED_CARD_CONTENT_INLINE_PADDING.tags.push(componentTags.HAS_TITLE)
dimensionsDoc.TITLED_CARD_CONTENT_INLINE_PADDING.tags.push(componentTags.HAS_CARD)

dimensionsDoc.TOOL_TIP_MAX_WIDTH.description = 'Maximum width of tooltip container for a display larger than SMALL_DISPLAY_BREAKPOINT'
dimensionsDoc.TOOL_TIP_MAX_WIDTH.tags.push(componentTags.HAS_TOOLTIP)

dimensionsDoc.TOOL_TIP_MAX_WIDTH_SMALL_DISPLAY.description = 'Maximum width of tooltip container for a display smaller than or equal to SMALL_DISPLAY_BREAKPOINT'
dimensionsDoc.TOOL_TIP_MAX_WIDTH_SMALL_DISPLAY.tags.push(componentTags.HAS_TOOLTIP)


Object.freeze(dimensionsDoc)
export default dimensionsDoc