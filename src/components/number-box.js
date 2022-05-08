import styled from 'styled-components';

export default function NumberBox () {
    return(
        <Wrapper>
            <SymbolWrapper>
                -
            </SymbolWrapper>
            <NumberWrapper>
                3
            </NumberWrapper>
            <SymbolWrapper>
                +
            </SymbolWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width:150px;
    flex:1;
    height:fit-content;
    border:1px solid #BBBCC0;
    display:flex;
    flex-direction:row;
`

const SymbolWrapper = styled.div`
    font-size:18px;
    padding:10px 15px;
`

const NumberWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width:100px;
    border-left:1px solid #BBBCC0;
    border-right:1px solid #BBBCC0;
`