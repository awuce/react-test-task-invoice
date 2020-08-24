import React from "react";
import style from './FormControl.module.css'

const FormControl = FormControl => ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={hasError ? style.error : ""}>
            <div>
                <FormControl {...input} {...props} />
            </div>
            {  hasError && <span>{ meta.error }</span> }
        </div>
    )
}

export const Textarea = FormControl('textarea');
export const Input = FormControl('input');
