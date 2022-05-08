import styled from 'styled-components';
export default function Button ({style,text,onClick, Icon}) {
    return(
        <ButtonWrapper style={style} onClick={onClick} >
            {
                text
            }
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.button`
    background-color:#072A48;
    border:none;
    color:white;
    padding:15px;
    font-family:Open Sans;
    width:150px;
`