import styled from 'styled-components';

export default function Link ({text = "Button"}) {
    return(
        <Wrapper>
            {
                text
            }
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width:100%;
    max-width:150px;
    border: 3px solid #000000;
    box-sizing: border-box;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding:10px;
    font-family:Montserrat;
`