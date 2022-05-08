import styled from 'styled-components';
import { UpperCase } from 'utilities';
import { Heading } from './heading';

const fontStyle = {
    fontSize: "14px",
    color: "white",
    textAlign: "left"
}

export default function InputDark({ style, placeholder, label = "", name, onChange, type = "text", value }) {
    return (
        <div>
            {
                label !== "" ? (
                    <label>
                        <Heading style={fontStyle}>
                            {UpperCase(label)}
                        </Heading>
                    </label>
                ) : null
            }
            <InputWrapper value={value} type={type} style={style} placeholder={placeholder} name={name} onChange={onChange} />
        </div>
    )
}

const InputWrapper = styled.input`
    outline:none;
    border:none;
    background-color:#1D1932;
    height:50px;
    font-size:18px;
    color:white;
    border-radius:12px;
    width:100%;
    text-indent:10px;
`