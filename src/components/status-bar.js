import styled from 'styled-components';
import { Container } from './container';
import { Text } from './status-text';

const ContainerStyle = {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    padding:"5px 20px"
}

export default function StatusBar () {
    return(
        <Wrapper>
            <Container style={ContainerStyle}>
                <Text>Beijing Time2022/04/0916:09:17PM</Text>
                <Text>English / USD</Text>
            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    background-color: #072A48;
    color:white;
    font-size:12px;
`