import styled from 'styled-components';
import { AdminTable, AdminTd, AdminTh, AdminTr } from 'components/admin-table';
import { Heading } from 'components/heading';
import InputDark from 'components/input-dark';
import Button from 'components/button';
import { useEffect, useState } from 'react';
import { getAdminProducts } from "actions/product"
import { productEdit, productDelete } from 'actions/users'
import { NotificationContainer, NotificationManager } from 'react-notifications';


const HeadingStyle = {
    textAlign: "left"
}

const SaveStyle = {
    backgroundColor: "#6F4FF2",
    borderRadius: "15px",
    fontSize: "18px"
}

const EditButton = {
    backgroundColor: "#105432",
    width: "80px",
    margin: "5px"
}

const DeleteButton = {
    backgroundColor: "#750606",
    width: "80px",
    margin: "5px"
}




const List = ({ count, title, price, description, func_refresh }) => {

    const [editData, setEditData] = useState({});
    const EditEvent = async (e) => {
        const result = await productEdit(e);
        if (result) {
            NotificationManager.success('User is edited', 'Success');
        }
    }

    const setEDTData = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value })
    }

    const [deleteData, setDeleteData] = useState({});
    const DeleteEvent = async (ti) => {
        const result = await productDelete(ti);
        if (result) {
            func_refresh();
            NotificationManager.success('User is deleted', 'Success');
        }
    }

    const setDLTData = (e) => {
        setDeleteData({ ...deleteData, [e.target.name]: e.target.value })
    }

    return (
        <AdminTr>
            <AdminTd name="orderid" onChange={(e) => setDLTData(e)}>
                {
                    count
                }
            </AdminTd>
            <AdminTd name="product" onChange={(e) => setDLTData(e)}>
                {
                    title
                }
            </AdminTd>
            <AdminTd name="size" onChange={(e) => setDLTData(e)}>
                Size
            </AdminTd>
            <AdminTd name="amount" onChange={(e) => setDLTData(e)}>
                Amount
            </AdminTd>
            <AdminTd name="price" onChange={(e) => setDLTData(e)}>
                {
                    price
                }
            </AdminTd>
            <AdminTd name="customer" onChange={(e) => setDLTData(e)}>
                Customer
            </AdminTd>
            <AdminTd name="description" onChange={(e) => setDLTData(e)}>
                {
                    description
                }
            </AdminTd>
            <AdminTd>
                <Button text="Edit" style={EditButton} onClick={(e) => EditEvent(e)} />
                <Button text="Delete" style={DeleteButton} onClick={() => DeleteEvent({ count, title, price, description })} />
            </AdminTd>
        </AdminTr>
    )
}

export default function ViewProductPage() {
    const [productData, setProductData] = useState([]);
    const func_getAdminProducts = async () => {
        const { data } = await getAdminProducts();
        setProductData(data);
    }
    useEffect(async () => {
        func_getAdminProducts();
    }, [])


    return (
        <>
            <Heading style={HeadingStyle}>Products</Heading>
            <Wrapper>
                <AdminTable>
                    <thead>
                        <AdminTr>
                            <AdminTh>
                                Order ID
                            </AdminTh>
                            <AdminTh>
                                Product
                            </AdminTh>
                            <AdminTh>
                                Size
                            </AdminTh>
                            <AdminTh>
                                Amount
                            </AdminTh>
                            <AdminTh>
                                Price
                            </AdminTh>
                            <AdminTh>
                                Customer
                            </AdminTh>
                            <AdminTh>
                                Description
                            </AdminTh>
                            <AdminTh>
                                Action
                            </AdminTh>
                        </AdminTr>
                    </thead>
                    <tbody>
                        {
                            productData.map((item, index) => {
                                return (
                                    <List count={index + 1} title={item.title} description={item.description} price={item.price} key={index} func_refresh={func_getAdminProducts} />
                                )
                            })
                        }
                    </tbody>
                </AdminTable>
                <FilterForm>
                    <Heading style={HeadingStyle}>Filter</Heading>
                    <InputDark label='Username' placeholder='Enter username' />
                    <InputDark label='Email' placeholder='Enter user Email' />
                    <InputDark label='Group' placeholder='Enter user group' />
                    <InputDark label='Status' placeholder='Enter user status' />
                    <InputDark label='Date' placeholder='Enter Date added' />
                    <ButtonWrapper>
                        <Button style={SaveStyle} text="Filter" />
                    </ButtonWrapper>
                </FilterForm>
            </Wrapper>
            <NotificationContainer />
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