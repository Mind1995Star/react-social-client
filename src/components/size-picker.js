import styled from 'styled-components';

export default function SizePicker ({text="1"}) {
    return(
        <Wrapper>
            {
                text
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width:30px;
    height:30px;
    color:#ADAD9A;
    border:1px solid #ADAD9A;
    border-radius:999999px;
`