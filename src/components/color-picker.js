import styled from 'styled-components';

export default function ColorPicker ({color="#96CF45"}) {
    return(
        <Wrapper color={color}>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:25px;
    height:25px;
    border-radius:999999px;
    background-color:${props => props.color};
`