import Input from './Input/Input'
import Textarea from './Textarea'
import RadioBox from './RadioBox/RadioBox'

function FormikControl(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'radio':
            return <RadioBox {...rest} />

        default:
            return null
    }
}

export default FormikControl