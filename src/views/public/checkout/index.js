import styled from 'styled-components';
import { Container } from 'components/container';
import { Heading } from 'components/heading';
import { IconImage } from 'constants/image-constant';
import ImageWrapper from 'components/image-wrapper';
import Button from 'components/button';

const { Transfer, BankTransfer, Bitcoin, Airpal, Paypal } = IconImage;

const HeadingStyle = {
    textAlign:"left"
}

const ButtonStyle = {
    width:"100%",
    marginTop:"30px"
}

const ContainerStyle = {
    paddingTop:"50px"
}

export default function CheckoutPage () {
    return(
        <Container style={ContainerStyle}>
            <Heading style={HeadingStyle}>CheckOut Cart</Heading>
            <TransferListWrapper>
                <TransferItem>
                    <ImageWrapper src={Transfer} alt="transfer"/>
                    <p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easierThe CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier</p>
                    <Button style={ButtonStyle} text='Top Up Offers'/>
                </TransferItem>
                <TransferItem>
                    <ImageWrapper src={BankTransfer} alt="transfer"/>
                    <p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easierThe CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier</p>
                    <Button style={ButtonStyle} text='Top Up Offers'/>
                </TransferItem>
            </TransferListWrapper>
            <OtherPaymentWrapper>
                <PaymentOptionCard>
                    <ImageWrapper src={Bitcoin} alt="bitcoin"/>
                    <TextWrapper>
                    The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier
                    </TextWrapper>
                </PaymentOptionCard>
                <PaymentOptionCard>
                    <ImageWrapper src={Airpal} alt="bitcoin"/>
                    <TextWrapper>
                    The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier
                    </TextWrapper>
                </PaymentOptionCard>
                <PaymentOptionCard>
                    <ImageWrapper src={Paypal} alt="bitcoin"/>
                    <TextWrapper>
                    The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier
                    </TextWrapper>
                </PaymentOptionCard>
            </OtherPaymentWrapper>
            <StatusWrapper>
                <BalanceWrapper>
                    <Heading>Balance:</Heading>
                    <Heading>$450</Heading>
                </BalanceWrapper>
                <Button text='Submit'/>
            </StatusWrapper>
        </Container>
    )
}

const TransferListWrapper = styled.div`
    display:flex;
    flex-direction:row;
    gap:100px;
    padding-top:50px;
`

const TransferItem = styled.div`
    width:100%;
    max-width:400px;
`

const OtherPaymentWrapper = styled.div`
    padding-top:100px;
    padding-bottom:50px;
    display:flex;
    flex-direction:column;
    gap:30px;
`

const PaymentOptionCard = styled.div`
    background-color:#EEF2F5;
    padding:20px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`

const TextWrapper = styled.div`
`

const StatusWrapper = styled.div`
    padding-bottom:100px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`

const BalanceWrapper = styled.div`
    display:flex;
    flex-direction:row;
    gap:10px;
`