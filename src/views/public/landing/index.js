import { Container } from 'components/container';
import { Heading } from 'components/heading';
import ProductCard from 'components/product-card';
import SearchBox from 'components/search-box';
import StepCard from 'components/step-card';
import styled from 'styled-components';
import { CategoryImage } from 'constants/image-constant';
import ImageWrapper from 'components/image-wrapper';
import { StepImage } from 'constants/image-constant';
import { SharedImage } from 'constants/image-constant';
import Link from 'components/link';

const { Bg } = SharedImage;
const { Cloth, Foot, Handbag, Watch, Jewelry, Baby, Phone, Desktop, Home, Food } = CategoryImage;
const { Step1, Step2, Step3, Step4, Step5, Step6 } = StepImage;

const HeadingStyle = {
    fontSize: "46px",
    color: "white",
    maxWidth: "700px",
    fontWeight: "bold"
}

const ContainerStyle = {
    padding: "100px 0px"
}

const StepText1 = {
    fontSize: "18px",
    textAlign: "left"
}
const StepText2 = {
    textAlign: "left"
}

const BgTextStyle = {
    textAlign: "left",
    padding: "30px"
}

const CaptionStyle = {
    paddingBottom:"50px"
}

export default function LandingPage() {
    return (
        <>
            <Wrapper>
                <HeroWrapper>
                    <Heading style={HeadingStyle}>The CSS Grid Layout Module offers a grid-based layout</Heading>
                    <SearchBox />
                    <StepList>
                        <li className="wow fadeInUp">
                            <StepCard icon="user" text='Create Account' />
                        </li>
                        <li className="wow fadeInUp" data-wow-delay=".1s">
                            <StepCard icon="user" text='Place an Order'/>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay=".2s">
                            <StepCard icon="user" text='Make a Payment'/>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay=".3s">
                            <StepCard icon="user" text='Check Quality'/>
                        </li>
                    </StepList>
                </HeroWrapper>
                <Container className='wow fadeInUp' style={ContainerStyle}>
                    <Heading className='wow fadeInUp' style={CaptionStyle}>Our Top Picks</Heading>
                    <ProductList className='wow fadeInUp'>
                        <li>
                            <ProductCard button="true" />
                        </li>
                        <li>
                            <ProductCard button="true" />
                        </li>
                        <li>
                            <ProductCard button="true" />
                        </li>
                        <li>
                            <ProductCard button="true" />
                        </li>
                    </ProductList>
                </Container>
                <ShopWrapper>
                    <Heading className='wow fadeInUp'>Shop By Category</Heading>
                    <TextWrapper className='wow fadeInUp'>
                        The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
                    </TextWrapper>
                    <CategoryList className='wow fadeInUp'>
                        <li>
                            <ImageWrapper src={Cloth} alt='cateogry' />
                            <Heading>
                                Cloth
                            </Heading>
                        </li>
                        <li>
                            <ImageWrapper src={Foot} alt='cateogry' />
                            <Heading>
                                Foot
                            </Heading>
                        </li>
                        <li>
                            <ImageWrapper src={Handbag} alt='cateogry' />
                            <Heading>
                                Handbag
                            </Heading>
                        </li>
                        <li>
                            <ImageWrapper src={Watch} alt='cateogry' />
                            <Heading>
                                Accessories
                            </Heading>
                        </li>
                        <li>
                            <ImageWrapper src={Jewelry} alt='cateogry' />
                            <Heading>
                                Jewelry
                            </Heading>
                        </li>
                        <li>
                            <ImageWrapper src={Baby} alt='cateogry' />
                            <Heading>
                                Baby & Kids
                            </Heading>
                        </li>
                        <li>
                            <ImageWrapper src={Phone} alt='cateogry' />
                            <Heading>
                                Electronics
                            </Heading>
                        </li>
                        <li>
                            <ImageWrapper src={Desktop} alt='cateogry' />
                            <Heading>
                                Computers
                            </Heading>
                        </li>
                        <li>
                            <ImageWrapper src={Home} alt='cateogry' />
                            <Heading>
                                Home
                            </Heading>
                        </li>
                        <li>
                            <ImageWrapper src={Food} alt='cateogry' />
                            <Heading>
                                Food & Drinks
                            </Heading>
                        </li>
                    </CategoryList>
                </ShopWrapper>
                <Container style={ContainerStyle}>
                    <Heading className='wow fadeInUp'>How to Buy from KGHYPE</Heading>
                    <StepWrapper>
                        <StepImageWrapper className='wow fadeInLeft'>
                            <ImageWrapper src={Step1} alt="step" />
                        </StepImageWrapper>
                        <TextStepWrapper>
                            <Heading className='wow fadeInUp' style={StepText1}>Multi Search Method</Heading>
                            <Heading className='wow fadeInUp' style={StepText2}>Good to Search Product</Heading>
                            <p className='wow fadeInUp'>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
                                The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
                            <p className='wow fadeInUp'>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
                                The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
                        </TextStepWrapper>
                    </StepWrapper>
                    <StepWrapper>
                        <TextStepWrapper2>
                            <Heading className='wow fadeInUp' style={StepText1}>Multi Search Method</Heading>
                            <Heading className='wow fadeInUp' style={StepText2}>Good to Search Product</Heading>
                            <p className='wow fadeInUp'>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
                                The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
                            <p className='wow fadeInUp'>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
                                The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
                        </TextStepWrapper2>
                        <StepImageWrapper className='wow fadeInRight'>
                            <ImageWrapper src={Step2} alt="step" />
                        </StepImageWrapper>
                    </StepWrapper>
                    <StepWrapper>
                        <StepImageWrapper className='wow fadeInLeft'>
                            <ImageWrapper src={Step3} alt="step" />
                        </StepImageWrapper>
                        <TextStepWrapper>
                            <Heading className='wow fadeInUp' style={StepText1}>Multi Search Method</Heading>
                            <Heading className='wow fadeInUp' style={StepText2}>Good to Search Product</Heading>
                            <p className='wow fadeInUp'>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
                                The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
                            <p className='wow fadeInUp'>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
                                The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
                        </TextStepWrapper>
                    </StepWrapper>
                    <StepWrapper>
                        <TextStepWrapper2>
                            <Heading className='wow fadeInUp' style={StepText1}>Multi Search Method</Heading>
                            <Heading className='wow fadeInUp' style={StepText2}>Good to Search Product</Heading>
                            <p className='wow fadeInUp'>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
                                The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
                            <p className='wow fadeInUp'>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
                                The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
                        </TextStepWrapper2>
                        <StepImageWrapper className='wow fadeInRight'>
                            <ImageWrapper src={Step4} alt="step" />
                        </StepImageWrapper>
                    </StepWrapper>
                    <StepWrapper>
                        <StepImageWrapper className='wow fadeInLeft'>
                            <ImageWrapper src={Step5} alt="step" />
                        </StepImageWrapper>
                        <TextStepWrapper>
                            <Heading className='wow fadeInUp' style={StepText1}>Multi Search Method</Heading>
                            <Heading className='wow fadeInUp' style={StepText2}>Good to Search Product</Heading>
                            <p className='wow fadeInUp'>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
                                The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
                            <p className='wow fadeInUp'>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
                                The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
                        </TextStepWrapper>
                    </StepWrapper>
                    <StepWrapper>
                        <TextStepWrapper2>
                            <Heading className='wow fadeInUp' style={StepText1}>Multi Search Method</Heading>
                            <Heading className='wow fadeInUp' style={StepText2}>Good to Search Product</Heading>
                            <p className='wow fadeInUp'>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
                                The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
                            <p className='wow fadeInUp'>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.
                                The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.</p>
                        </TextStepWrapper2>
                        <StepImageWrapper className='wow fadeInRight'>
                            <ImageWrapper src={Step6} alt="step" />
                        </StepImageWrapper>
                    </StepWrapper>
                </Container>
                <Container style={ContainerStyle}>
                <Heading className='wow fadeInUp' style={CaptionStyle}>Recommend for you</Heading>
                    <ProductList className='wow fadeInUp'>
                        <li>
                            <ProductCard />
                        </li>
                        <li>
                            <ProductCard />
                        </li>
                        <li>
                            <ProductCard />
                        </li>
                        <li>
                            <ProductCard />
                        </li>
                    </ProductList>
                </Container>
                <Container style={ContainerStyle}>
                <Heading className='wow fadeInUp' style={CaptionStyle}>Featured Product</Heading>

                    <ProductList className='wow fadeInUp'>
                        <li>
                            <ProductCard />
                        </li>
                        <li>
                            <ProductCard />
                        </li>
                        <li>
                            <ProductCard />
                        </li>
                        <li>
                            <ProductCard />
                        </li>
                    </ProductList>
                </Container>
                <Container>
                    <BgWrapper>
                        <TextWrapper id="bg-text" style={BgTextStyle}>
                            <Heading className='wow fadeInUp' style={StepText2}>The CSS Gird Layout Module</Heading>
                            <p className='wow fadeInUp'>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier.The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier</p>
                            <p className='wow fadeInUp'>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier.The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier</p>
                            <ButtonWrapper className='wow fadeInUp'>
                                <Link text="Join Now" />
                                <Link text="Learn More" />
                            </ButtonWrapper>
                        </TextWrapper>
                        <ImageWrapper id="bg" src={Bg} alt="bg" />
                    </BgWrapper>
                </Container>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;

`
const HeroWrapper = styled.div`
    background-image:url(./image/kghype_landing.png);
    min-height:720px;
    width:100%;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:50px 0px;
`
const StepList = styled.ul`
    padding-top:30px !important;
    list-style:none;
    padding:0px;
    margin:0px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:30px;
    flex-flow:wrap;
`
const ProductList = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:30px;
    flex-flow:wrap;
    margin:0px;
    padding:0px;
`
const ShopWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background: #072A48;
    color:white;
    width:100%;
    padding:100px 0px;
`
const TextWrapper = styled.div`
    text-align:center;
    max-width:750px;
`
const CategoryList = styled.ul`
    padding-top:50px !important;
    list-style:none;
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin:0px;
    padding:0px;
    gap:100px;
    flex-flow:wrap;
    max-width:1240px;
    li{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`
const StepWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    @media screen and (max-width:890px) {
        flex-direction:column;
    }
`
const TextStepWrapper = styled.div`
    flex:1;
    max-width:650px;
    padding-left:100px;
    @media screen and (max-width:890px) {
        padding-left:0px;
        order:2;
    }
`
const TextStepWrapper2 = styled.div`
    flex:1;
    max-width:650px;
    padding-right:100px;
    @media screen and (max-width:890px) {
        padding-right:0px;
        order:2;
    }
`
const StepImageWrapper = styled.div`
    max-width:660px;
    height:auto;
    flex:1;
    @media screen and (max-width:890px) {
        order:1;
    }
`

const ButtonWrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-flow:wrap;
    gap:30px;
    padding-top:50px;
`
const BgWrapper = styled.div`
    background-color:#EEF2F5;
    margin:100px 0px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    @media screen and (max-width:1120px){
        flex-direction:column;
        #bg{
            order:1;
            max-width:100% !important;
        }
        #bg-text{
            order:2;
        }
    }
    @media screen and (max-width:1390px){
        #bg{
            max-width:690px;
        }
    }
`