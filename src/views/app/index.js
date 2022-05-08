import { Switch, Route } from 'react-router-dom';
import { ADMIN_PREFIX, PROFILE_PREFIX, CUSTOMER_PREFIX, ADD_PREFIX, PRODUCT_PREFIX, ORDER_PREFIX, LOGIN_PREFIX } from 'configs/app-config';
import AdminProfile from './profile';
import AddCustomer from './add-customer';
import AddProductPage from './add-product';
import ViewOrderPage from './view-order';
import ViewCustomerPage from './view-customer';
import ViewProductPage from './view-product';
import Main from './main';
import AdminLoginPage from './login';

export default function AppPages() {
    return (
        <Switch>
            <Route exact path={ADMIN_PREFIX} component={Main} />
            <Route path={ADMIN_PREFIX + PROFILE_PREFIX} component={AdminProfile} />
            <Route path={ADMIN_PREFIX + CUSTOMER_PREFIX + ADD_PREFIX} component={AddCustomer} />
            <Route path={ADMIN_PREFIX + PRODUCT_PREFIX + ADD_PREFIX} component={AddProductPage} />
            <Route path={ADMIN_PREFIX + ORDER_PREFIX} component={ViewOrderPage} />
            <Route path={ADMIN_PREFIX + CUSTOMER_PREFIX} component={ViewCustomerPage} />
            <Route exact path={ADMIN_PREFIX + PRODUCT_PREFIX} component={ViewProductPage} />
            <Route exact path={ADMIN_PREFIX + LOGIN_PREFIX} component={AdminLoginPage} />
        </Switch>
    )
}