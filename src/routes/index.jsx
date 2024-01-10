import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AcessControl } from "../pages/AcessControl";
import { Alarme } from "../pages/Alarme";
import { Cftv } from "../pages/Cftv";
import { Main } from "../pages/Main";
export const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/home' component={Home}/>
            <Route path='/alarme.pdf' component={Alarme}/>
            <Route path='/cftv.pdf' component={Cftv}/>
            <Route path='/acessControl.pdf' component={AcessControl}/>
        </Switch>
    )
}