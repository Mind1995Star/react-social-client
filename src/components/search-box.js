import styled from 'styled-components';
import { SharedImage } from 'constants/image-constant';
import ImageWrapper from './image-wrapper';

const { SearchIconGray } = SharedImage;

export default function SearchBox() {
    return (
            <InputWrapper>
                <IconWrapper>
                    <ImageWrapper src={SearchIconGray} alt="search-icon-gray" />
                </IconWrapper>
                <SearchInput type="text" placeholder='Taobao Keywords, Product ID or URL' />
                <SearchBtn>
                    Search
                </SearchBtn>
            </InputWrapper>
    )
}

const InputWrapper = styled.div` 
    background-color:white;
    height:50px;
    width:100%;
    max-width:1200px;
    display:flex;
    flex-direction:row;
    align-items:center;
    border-radius:99999px;
`

const IconWrapper = styled.div`
    max-width:30px;
    transform:translateY(2px);
    margin-left:10px;
`

const SearchInput = styled.input`
    height:95%;
    border:none;
    outline:none;
    width:100%;
    border-radius:99999px;
    text-indent:10px;
    font-size:18px;
`

const SearchBtn = styled.button`
    height:80%;
    border-radius:9999px;
    width:100%;
    max-width:120px;
    border:none;
    background-color:#02BEE4;
    color:white;
    margin-right:10px;
`