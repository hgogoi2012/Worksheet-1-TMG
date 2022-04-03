import React from 'react'
import { Field, ErrorMessage } from 'formik'
import './radiobox.scss'


function RadioButtons(props) {
    const { label, name, options, ...rest } = props
    return (
        <div className='form-control radio'>
            <label>{label}</label>
            <Field name={name} >
                {({ field }) => {
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <div className='radioContainer'>
                                    <input
                                        type='radio'
                                        id={option.value}
                                        {...field}
                                        {...rest}
                                        value={option.value}
                                        checked={field.value === option.value}
                                    />
                                    <label htmlFor={option.value}>{option.key}</label></div>
                            </React.Fragment>
                        )
                    })
                }}
            </Field>

        </div>
    )
}

export default RadioButtons