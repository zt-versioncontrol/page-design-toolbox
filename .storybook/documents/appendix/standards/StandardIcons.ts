import STANDARD_ICONS, {DEFAULT_VIEW_BOX} from '../../../../src/standards/Icons'

const iconsDoc: { [iconKey: string]: { path: string; viewBox: string; aliases: string[]; notes: string } } = {}



for (let iconName in STANDARD_ICONS){
    iconsDoc[iconName] = { 
        path: STANDARD_ICONS[iconName].path,
        viewBox: STANDARD_ICONS[iconName].viewBox ? STANDARD_ICONS[iconName].viewBox : DEFAULT_VIEW_BOX,
        aliases: STANDARD_ICONS[iconName].aliases ? STANDARD_ICONS[iconName].aliases : [],
        notes: ''
    }
}

Object.freeze(iconsDoc)
export default iconsDoc