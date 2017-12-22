import React from 'react';

const TextFieldGroup = (field) => {
    const {meta: {touched, error}} = field;
    const className =`form-group ${touched&&error ? 'has-danger' : ''}`;
    return (<div className={className}>
        <label>{field.label}</label>
        <input {...field.input} type="text" className="form-control" />
        <div className="text-help">
            {touched ? error: ''}
        </div>
    </div>);
}


export default TextFieldGroup;
