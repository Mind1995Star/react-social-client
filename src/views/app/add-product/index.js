import { useState } from 'react';
import { Heading } from 'components/heading';
import InputDark from 'components/input-dark';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';
import { Trash3Fill } from "react-bootstrap-icons";
import { PlusCircle } from "react-bootstrap-icons";
import Button from 'components/button';
import { addProduct } from 'actions/product';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const InputStyle = {
    backgroundColor: "#131129"
}

const HeadingStyle = {
    textAlign: "left",
    paddingBottom: "30px"
}

const addSaveStyle = {
    backgroundColor: "#6F4FF2",
    padding: "5px",
    width: "30px",
    margin: "5px"
}

const deleteSaveStyle = {
    backgroundColor: "#DC3546",
    padding: "5px",
    width: "30px",
    margin: "5px"
}

export default function AddProductPage() {

    const [formData, setFormData] = useState({});

    const toAddProduct = async (e) => {
        e.preventDefault();
        const data = await addProduct(formData);
        if (data) {
            NotificationManager.success('User is registered', 'Success');
        }
    }

    const setData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div>
                <Heading style={HeadingStyle}>Add Product</Heading>
                <div>
                    <Button style={addSaveStyle} onClick={toAddProduct} text={<PlusCircle />}></Button>
                    <Button style={deleteSaveStyle} text={<Trash3Fill />}></Button>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>General</Tab>
                    <Tab>Image</Tab>
                </TabList>
                <TabPanel>
                    <InputDark style={InputStyle} value={formData.title} name='title' onChange={(e) => setData(e)} label="Product Title" />
                    <InputDark style={InputStyle} value={formData.price} name='price' onChange={(e) => setData(e)} label="Product Price" />
                    <InputDark style={InputStyle} value={formData.description} name='description' onChange={(e) => setData(e)} label="Product Description" />
                </TabPanel>
                <TabPanel>
                    <InputDark style={InputStyle} name='title' onChange={(e) => setData(e)} label="Title" />
                    <InputDark style={InputStyle} name='price' onChange={(e) => setData(e)} label="Comment" />
                </TabPanel>
                <NotificationContainer />
            </Tabs>
        </>
    )
}