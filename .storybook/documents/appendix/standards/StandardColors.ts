import * as colors from '../../../../src/standards/Colors'

// Typescript error here is ignored. All required attributes are added in the loop
const colorsDoc: { [colorKey in keyof typeof colors]: { color: string; description: string } } = {}

for (const colorName of Object.getOwnPropertyNames(colors)){
    colorsDoc[colorName] = { color: colors[colorName], description: ''}
}

// keep lines sorted alphabetically, accroding to color name
colorsDoc.ALERT.description = 'Used to draw attention to something that is potentially incorrect, incomplete or might lead to errors'
colorsDoc.ALTERNATE_POSITIVE.description = 'Same as POSITIVE. Only used only when POSITIVE is not appropriate'
colorsDoc.ACTIVATED.description = 'Background color of activated container'
colorsDoc.BLURRING_WHITE.description = 'Partially transparent white color. used to color elements placed on top of other elements to indicate being disabled or inferior'
colorsDoc.CONTRASTING_FILLER.description = 'Used to fill an area with color contrasting main filler color'
colorsDoc.DISABLED.description = 'Used to indicate that an input or an item is disabled or inferior. Mostly used to color text'
colorsDoc.EXAGGERATED_MOUSE_HIGHLIGHT.description = 'Similar to MOUSE_HIGHLIGHT but used when highlight color is not strong enough to distinguish from surrounding'
colorsDoc.GREY_HORIZONTAL_RULE.description = 'Color of any horizontal rule, especially <hr> element'
colorsDoc.GREY_LIST_HEADER.description = 'Used to color background of list header where list items are mainly composed of text'
colorsDoc.INNER_HEADER.description = 'Text color of embedded title'
colorsDoc.INPUT_OUTER_LABEL.description = 'Font color of label placed before (usually vertically) input field'
colorsDoc.MID_CONTRAST.description = 'Middle between The two main colors to contrast a section or text'
colorsDoc.MOUSE_HIGHLIGHT.description = 'Color used to highlight an item using mouse to emphasize it'
colorsDoc.MAIN_BACKGROUND.description = 'Background color for majority of page contents'
colorsDoc.NORMAL_BORDER.description = 'Used for borders that specifically distinguish some document elements or small sections, like text input.'
colorsDoc.POSITIVE.description = "Mainly used to allude to proceeding with non destructive actions such as 'save', 'apply' or 'confirm'"
colorsDoc.SOFT_BORDER.description = 'Used for low emphasis borders or borders that separate sections within same container'
colorsDoc.SOFT_SHADOW.description = 'Used for weak shadow effects'
colorsDoc.TRANSLUCENT_TEXT.description = 'For translucent overlay text'
colorsDoc.WARNING.description = "Used to allude to destructive action like 'delete'"

Object.freeze(colorsDoc)
export default colorsDoc