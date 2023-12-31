import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise = loadStripe ('pk_test_51NwUj4FUJnmVD9YYtsf584wj5adnUMKHlHgkCLvovPx713gAzIkV7lsxT8eYHV4MFdxgqbcc7A3aW90SJWo4dmlY00RntmLGuo')
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
						path="/"
						element={
							<>
								<Header />
								<Home />
							</>
						}
					/>
					<Route
						path="/orders"
						element={
							<>
								<Header />
								<Orders />
							</>
						}
					/>
					<Route
						path="/checkout"
						element={
							<>
								<Header />
								<Checkout />
							</>
						}
					/>
					<Route path="/login" element={<Login />} />
					<Route
						path="/payment"
						element={
							<>
								<Header />
								<Elements stripe={promise}>
									<Payment />
								</Elements>
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App
