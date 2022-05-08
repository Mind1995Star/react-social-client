import styled from 'styled-components';
import { Heading } from 'components/heading';
import InputDark from 'components/input-dark';
import Button from 'components/button';

const HeadingStyle = {
    textAlign:"left"
}

const SaveStyle = {
    backgroundColor:"#6F4FF2",
    borderRadius:"15px",
    fontSize:"18px"
}

export default function ViewCustomerPage () {
    return(
        <>
        <Heading style={HeadingStyle}>Customers</Heading>
        <Wrapper>
            <table>
            <thead>
               <tr>
               <th>
                    Order ID
                </th>
                <th>
                    Product
                </th>
                <th>
                    Size
                </th>
                <th>
                    Amount
                </th>
                <th>
                    Price
                </th>
                <th>
                    Customer
                </th>
                <th>
                    Date Income
                </th>
                <th>
                    Action
                </th>
               </tr>
            </thead>
            <tbody>
               <tr>
               <td>
                    19201
                </td>
                <td>
                    Apple Cinema 30
                </td>
                <td>
                    5
                </td>
                <td>
                    345
                </td>
                <td>
                    $560
                </td>
                <td>
                    John Doe
                </td>
                <td>
                    09/04/2022
                </td>
                <td>
                    Edit
                </td>
               </tr>
               <tr>
               <td>
                    19201
                </td>
                <td>
                    Apple Cinema 30
                </td>
                <td>
                    5
                </td>
                <td>
                    345
                </td>
                <td>
                    $560
                </td>
                <td>
                    John Doe
                </td>
                <td>
                    09/04/2022
                </td>
                <td>
                    Edit
                </td>
               </tr>
               <tr>
               <td>
                    19201
                </td>
                <td>
                    Apple Cinema 30
                </td>
                <td>
                    5
                </td>
                <td>
                    345
                </td>
                <td>
                    $560
                </td>
                <td>
                    John Doe
                </td>
                <td>
                    09/04/2022
                </td>
                <td>
                    Edit
                </td>
               </tr>
               <tr>
               <td>
                    19201
                </td>
                <td>
                    Apple Cinema 30
                </td>
                <td>
                    5
                </td>
                <td>
                    345
                </td>
                <td>
                    $560
                </td>
                <td>
                    John Doe
                </td>
                <td>
                    09/04/2022
                </td>
                <td>
                    Edit
                </td>
               </tr>
               <tr>
               <td>
                    19201
                </td>
                <td>
                    Apple Cinema 30
                </td>
                <td>
                    5
                </td>
                <td>
                    345
                </td>
                <td>
                    $560
                </td>
                <td>
                    John Doe
                </td>
                <td>
                    09/04/2022
                </td>
                <td>
                    Edit
                </td>
               </tr>
               <tr>
               <td>
                    19201
                </td>
                <td>
                    Apple Cinema 30
                </td>
                <td>
                    5
                </td>
                <td>
                    345
                </td>
                <td>
                    $560
                </td>
                <td>
                    John Doe
                </td>
                <td>
                    09/04/2022
                </td>
                <td>
                    Edit
                </td>
               </tr>
               <tr>
               <td>
                    19201
                </td>
                <td>
                    Apple Cinema 30
                </td>
                <td>
                    5
                </td>
                <td>
                    345
                </td>
                <td>
                    $560
                </td>
                <td>
                    John Doe
                </td>
                <td>
                    09/04/2022
                </td>
                <td>
                    Edit
                </td>
               </tr>
               <tr>
               <td>
                    19201
                </td>
                <td>
                    Apple Cinema 30
                </td>
                <td>
                    5
                </td>
                <td>
                    345
                </td>
                <td>
                    $560
                </td>
                <td>
                    John Doe
                </td>
                <td>
                    09/04/2022
                </td>
                <td>
                    Edit
                </td>
               </tr>
               <tr>
               <td>
                    19201
                </td>
                <td>
                    Apple Cinema 30
                </td>
                <td>
                    5
                </td>
                <td>
                    345
                </td>
                <td>
                    $560
                </td>
                <td>
                    John Doe
                </td>
                <td>
                    09/04/2022
                </td>
                <td>
                    Edit
                </td>
               </tr>
               <tr>
               <td>
                    19201
                </td>
                <td>
                    Apple Cinema 30
                </td>
                <td>
                    5
                </td>
                <td>
                    345
                </td>
                <td>
                    $560
                </td>
                <td>
                    John Doe
                </td>
                <td>
                    09/04/2022
                </td>
                <td>
                    Edit
                </td>
               </tr>
               <tr>
               <td>
                    19201
                </td>
                <td>
                    Apple Cinema 30
                </td>
                <td>
                    5
                </td>
                <td>
                    345
                </td>
                <td>
                    $560
                </td>
                <td>
                    John Doe
                </td>
                <td>
                    09/04/2022
                </td>
                <td>
                    Edit
                </td>
               </tr>
            </tbody>
        </table>
        <FilterForm>
            <Heading style={HeadingStyle}>Filter</Heading>
            <InputDark label='Username' placeholder='Enter username'/>
            <InputDark label='Email' placeholder='Enter user Email'/>
            <InputDark label='Group' placeholder='Enter user group'/>
            <InputDark label='Status' placeholder='Enter user status'/>
            <InputDark label='Date' placeholder='Enter Date added'/>
            <ButtonWrapper>
                <Button style={SaveStyle} text="Filter" />
            </ButtonWrapper>
        </FilterForm>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
`

const FilterForm = styled.form`
    padding-left:50px;
    width:100%;
    max-width:450px;
`

const ButtonWrapper = styled.div`
    padding-top:50px;
`