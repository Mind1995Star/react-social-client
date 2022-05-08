import { AdminTable, AdminTd, AdminTh, AdminTr } from 'components/admin-table';
import { Heading } from 'components/heading';
import styled from 'styled-components';

const OrderCard = {
    backgroundColor:"#6F4FF2",
}

const SaleCard = {
    backgroundColor:"#DC3546"
}
const CustomerCard = {
    backgroundColor:"#F9D62C"
}
const OnlineCard = {
    backgroundColor:"#50BB25"
}

const HeadingStyle = {
    padding:"0px",
    margin:"0px",
    textAlign:"left"
}

const HeadingStyle2 = {
    textAlign:"left"
}

const TransactionStyle = {
    maxWidth:"450px"
}

export default function Main () {
    return(
        <>
        <CardRow>
        <Card>
            <CircleIcon style={OrderCard}/>
            <CardText>
                <Heading style={HeadingStyle}>24 K</Heading>
                <span>Total Orders</span>
            </CardText>
        </Card>
        <Card>
            <CircleIcon style={SaleCard}/>
            <CardText>
                <Heading style={HeadingStyle}>54 K</Heading>
                <span>Total Sales</span>
            </CardText>
        </Card>
        <Card>
            <CircleIcon style={CustomerCard}/>
            <CardText>
                <Heading style={HeadingStyle}>24 K</Heading>
                <span>Total Customers</span>
            </CardText>
        </Card>
        <Card>
            <CircleIcon style={OnlineCard}/>
            <CardText>
                <Heading style={HeadingStyle}>24 K</Heading>
                <span>People Online</span>
            </CardText>
        </Card>
        </CardRow>
        <DataWrapper>
        <TableWrapper style={TransactionStyle}>
            <Heading style={HeadingStyle2}>Transactions</Heading>
            <AdminTable>
            <thead>
               <AdminTr>
               <AdminTh>
                    Date
                </AdminTh>
                <AdminTh>
                    Amount
                </AdminTh>
               </AdminTr>
            </thead>
            <tbody>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
               </AdminTr>
            </tbody>
        </AdminTable>
        </TableWrapper>
        <TableWrapper>
            <Heading style={HeadingStyle2}>Latest Orders</Heading>
            <AdminTable>
            <thead>
               <AdminTr>
               <AdminTh>
                    Order ID
                </AdminTh>
                <AdminTh>
                    Customer
                </AdminTh>
                <AdminTh>
                    Status
                </AdminTh>
                <AdminTh>
                    Date Added
                </AdminTh>
                <AdminTh>
                    Total
                </AdminTh>
                <AdminTh>
                    Action
                </AdminTh>
               </AdminTr>
            </thead>
            <tbody>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
               </AdminTr>
            </tbody>
        </AdminTable>
        </TableWrapper>
        </DataWrapper>
        </>

    )
}

const Card = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    background-color:#1D1932;
    padding:30px;
    border-radius:15px;
    flex:1;
`

const CircleIcon = styled.div`
    width:50px;
    height:50px;
    border-radius:99999px;
`

const CardText = styled.div`
    padding-left:20px;
`

const CardRow = styled.div`
    display:flex;
    flex-direction:row;
    gap:30px;
`

const DataWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    gap:30px;
    padding-top:50px;
`

const TableWrapper = styled.div`
    width:100%;
`