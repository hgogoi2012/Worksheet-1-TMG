import Input from './Input/Input'
import Textarea from './Textarea'
import RadioBox from './RadioBox/RadioBox'
import CheckboxGroup from './CheckBoxGroup'

function FormikControl(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'radio':
            return <RadioBox {...rest} />
        case 'checkbox':
            return <CheckboxGroup {...rest} />

        default:
            return null
    }
}

export default FormikControl