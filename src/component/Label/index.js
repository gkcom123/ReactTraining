import React from 'react';
import style from './style';

const Label = ({textLabel, htmlFor}) => <label htmlFor={htmlFor} style={style.label}>`Hi {textLabel}`</label>

export default Label;