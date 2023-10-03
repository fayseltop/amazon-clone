import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});

		return () => {
			// Clean up the subscription
			unsubscribe();
		};
	}, [dispatch]);
  return (
		<Router>
			<div class="App">
				<Routes>
          <Route 
          path='/'
          element={
            <>
            <Header />
					<Home />
            </>
          } />
			  <Route 
        path='/checkout'
        element={
          <>
          <Header />
          <Checkout />

          </>
        } />
        <Route 
        path='/login' 
        element = {
          <Login />
        }
        />
				</Routes>
			</div>
		</Router>
	);
}

export default App
