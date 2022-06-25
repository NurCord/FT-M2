/*
Resumen de las principales diferencias de React Router Dom  v5 y v6.
Puede haber mas, son las principales.
Tienen que seguir envolviendo su App en BrowserRouter.

Cual hay que saber? Ambas, en lo posible, porque mejor estar preparadx para todo escenario...

1) Switch quedo deprecado, en la v6 ahora envolvemos todo con Routes

2) Ya no utilizamos children para el renderizar el componente, ahora en la Route se utiliza element

*/

//v5
import { Switch, Route } from "react-router-dom";
<Switch>
    <Route path="/">
        <Home/>
    </Route>
    <Route exact path="/cryptocurrencies">
        <Cryptocurrencies/>
    </Route>
    <Route exact path="/crypto/:coinId">
        <CryptoDetails/>
    </Route>
    <Route exact path="/exchanges">
        <Exchanges />
    </Route>
</Switch>

//v6
import { Routes } from "react-router-dom";
<Routes>
   <Route path="/" element={<Home />} />
   <Route path="/crypto/:coinId" element={<CryptoDetails />} />
   <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />

   <Route path="/exchanges" element={<Exchanges />} />
</Routes>

// 3) useHistory es ahora useNavigate. 

//V5
import { useHistory } from "react-router-dom";

function News() {
  let history = useHistory();
  function handleClick() {
    history.push("/home");
  }
  return (
    <div>
      <button onClick={()=>{
           history.push("/home");
      }}>Home</button>
    </div>
  );
}


//V6
import { useNavigate } from "react-router-dom";

function News() {
  let navigate = useNavigate();

  return (
    <div>
      <button onClick={()=>{
          navigate("/home");
      }}>go home</button>
    </div>
  );
}

//Tambien redirect cambio por navigate!
//V5
import { Redirect } from "react-router-dom";

/*
<Route exact path="/latest-news">
    <Redirect to="/news">
</Route>
<Route exact path="/news">
    <News />
</Route>
*/

//V6
import { Navigate } from "react-router-dom";

<Route path="/latest-news" element={<Navigate replace to="/news">} />
<Route path="/news" element={<Home />} />

// 4) ActiveStyle y ActiveClassName de NavLink ahora se escriben un poco diferente. Llaman a una funcion, donde el primer parametro
// indica con un booleano si esta activo o no... y que hacer en ese caso.

//V5
<NavLink
  to="/news"
  style={{ color: 'black' }}
  activeStyle={{ color: 'blue' }}>
  Exchanges
</NavLink>

<NavLink
  to="/news"
  className="nav-link"
  activeClassName="active">
  Exchanges
</NavLink>

//V6
<NavLink
  to="/news"
  style={({isActive}) => { color: isActive ? 'blue' : 'black' }}>
  Exchanges
</NavLink>

<NavLink
  to="/news"
  className={({ isActive }) => "nav-link" + (isActive ? "active" : "")}>
  Exchanges
</NavLink>

