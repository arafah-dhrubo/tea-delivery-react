import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddService from './components/AddService/AddService';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { AuthProvider } from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import firebaseInitializer from './Firebase/FirebaseInit';
import MyOrder from './components/MyOrders/MyOrder';
import Footer from './components/Footer/Footer';
import ManageOrders from './components/ManageOrders/ManageOrders';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import UpdateOrder from './components/UpdateOrder/UpdateOrder';

function App() {
  firebaseInitializer();
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
{/* private routes needs to be authenticated */}
            <PrivateRoute path="/placeorder/:_id">
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute path="/my-orders/:email">
              <MyOrder />
            </PrivateRoute>
            <PrivateRoute path="/update-order/:_id">
              <UpdateOrder />
            </PrivateRoute>
            <PrivateRoute path="/update-product/:_id">
              <UpdateProduct />
            </PrivateRoute>
            <PrivateRoute path="/add-product">
              <AddService />
            </PrivateRoute>
            <PrivateRoute path="/manage-orders">
              <ManageOrders />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
