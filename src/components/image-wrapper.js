import styled from 'styled-components'

export default function ImageWrapper ({ src, style, alt, id }) {
    return(
        <Wrapper id={id} src={src} style={style} alt={`KGHYPE-${alt}`} />
    )
}

const Wrapper = styled.img`
    max-width:100%;
    height:auto;
`