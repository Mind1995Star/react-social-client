import { Route, Switch, Redirect } from 'react-router-dom';
import { ERROR_PREFIX, PUBLIC_PREFIX, ADMIN_PREFIX, LOGIN_PREFIX } from 'configs/app-config';
import PublicLayout from 'layouts/public-layout';
import AppLayout from 'layouts/app-layout';

export default function Views() {
    return(
        <Switch>
            <Route exact path="/">
                <Redirect to={PUBLIC_PREFIX} />
            </Route>
            <Route path={PUBLIC_PREFIX}>
                <PublicLayout/>
            </Route>
            <Route path={ADMIN_PREFIX}>
                <AppLayout/>
            </Route>
            <Route path={ERROR_PREFIX}>
                <Redirect to={PUBLIC_PREFIX} />
            </Route>
        </Switch>
    )
}