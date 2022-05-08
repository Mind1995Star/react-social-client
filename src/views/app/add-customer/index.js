import { Heading } from 'components/heading';
import InputDark from 'components/input-dark';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';
import Button from 'components/button';


const InputStyle = {
    backgroundColor:"#131129"
}

const HeadingStyle = {
    textAlign:"left",
    paddingBottom:"30px"
}

export default function AddCustomer() {
    return (
        <>
        <Heading style={HeadingStyle}>Add Customer</Heading>
            <Tabs>
                <TabList>
                    <Tab>General</Tab>
                    <Tab>Afillate</Tab>
                </TabList>
                <TabPanel>
                    <InputDark style={InputStyle} label='Customer Group'/>
                    <InputDark style={InputStyle} label='Firstname'/>
                    <InputDark style={InputStyle} label='Lastname'/>
                    <InputDark style={InputStyle} label='Email'/>
                    <InputDark style={InputStyle} label='Telephone'/>
                    <InputDark style={InputStyle} label='Password'/>
                    <InputDark style={InputStyle} label='Confirm'/>
                </TabPanel>
                <TabPanel>
                    <InputDark style={InputStyle} label='Company'/>
                    <InputDark style={InputStyle} label='Website'/>
                    <InputDark style={InputStyle} label='Tracking Code'/>
                    <InputDark style={InputStyle} label='Commission'/>
                    <InputDark style={InputStyle} label='TaxID'/>
                    <InputDark style={InputStyle} label='Payment Method'/>
                    <InputDark style={InputStyle} label='Status'/>
                </TabPanel>
            </Tabs>
        </>
    )
}