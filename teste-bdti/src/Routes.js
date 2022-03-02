import { BrowserRouter, Route } from 'react-router-dom'; 
import App from './App'



function MyRoutes (){
    return (
        <BrowserRouter>
            <Route path='/' exact component={App}/>
        </BrowserRouter>
    )
}

export default MyRoutes;