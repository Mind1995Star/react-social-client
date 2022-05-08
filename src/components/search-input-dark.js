import styled from 'styled-components';
import { Search } from 'react-bootstrap-icons';
import InputDark from './input-dark';

export default function SearchInputDark () {
    return(
        <Wrapper>
            <IconWrapper>
                <Search/>
            </IconWrapper>
            <InputDark placeholder="Search Here" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    background-color:#1D1932;
    padding:0px 20px;
    border-radius:15px;
    max-width:300px;
    width:100%;
`

const IconWrapper = styled.div`
    font-size:18px;
`