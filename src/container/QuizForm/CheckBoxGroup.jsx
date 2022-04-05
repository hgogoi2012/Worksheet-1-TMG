import React from "react";
import { Field } from "formik";
import "./checkbox.scss";

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control checkbox">
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <div className="checkboxContainer">
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              </React.Fragment>
            );
          });
        }}
      </Field>
      {/* <ErrorMessage component={TextError} name={name} /> */}
    </div>
  );
}

export default CheckboxGroup;
