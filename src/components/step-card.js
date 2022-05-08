import styled from 'styled-components';
import { Heading } from './heading';

export default function StepCard ({text = "Create Account",icon=null}) {
    return(
        <CardWrapper>
            {
                icon !==null ? (
                    <IconWrapper></IconWrapper>
                ) : null
            }
            <Heading>{text}</Heading>
            <TextWrapper>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier.</TextWrapper>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    color:white;
    background-color:rgba(255,255,255,.15);
    padding:15px;
    font-family:Open Sans;
    max-width:240px;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const IconWrapper = styled.div`
    width:35px;
    height:35px;
    border-radius:9999px;
    background-color:rgba(0,0,0,.15);
`
const TextWrapper = styled.div`
    text-align:center;
    font-size:14px;
`
