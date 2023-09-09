import { lazy} from "react";
import Home from "../Home";
import Layouts from "../Layouts";
 const Shop = lazy(() => import("../Shop"));
const Allinone= lazy(()=>import ('../Allinone'))
const ProductsView= lazy(()=>import('../ProductsView'))

const SearchComponent = lazy(()=> import("../SearchComponent")) ;
// const Contacts = lazy(() => import("../Contacts"));
const routerss = [
{path:"/" ,element:<Layouts> <Home/></Layouts>,exact:true},
{path:"/AllinOne",element:<Layouts> <Allinone/></Layouts>,exact: true},
{path:"/Shop", element:<Layouts> <Shop/></Layouts>},
{path:"/ProductsView/:id", element:<Layouts><ProductsView/> </Layouts>, exact:true},
{path:"/searchcomponent", element:<Layouts><SearchComponent/> </Layouts>, exact:true },
{path:"*",element:<>400</>, exact:true}




]

export default routerss