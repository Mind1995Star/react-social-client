import styled from 'styled-components';


export default function Menu () {
    return(
        <Wrapper>
            <li>
                    homepage
            </li>
            <li>
                    Shopping Agent
            </li>
            <li>
                    forwarding
            </li>
            <li>
                    logistics
            </li>
            <li>
                    bbs
            </li>
            <li>
                    business
            </li>
            <li>
                    affiliates
            </li>
            <li>
                    custom services
            </li>
        </Wrapper>
    )
}

const Wrapper = styled.ul`
    display:flex;
    flex-direction:row;
    padding-left:0px;
    gap:30px;
    list-style:none;
    flex-flow:wrap;
    transform:translateX(20px);
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    text-align: center;
    text-transform:uppercase;
    @media screen and (max-width:1320px){
        display:none;
    }
`