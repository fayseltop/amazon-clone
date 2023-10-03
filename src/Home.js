import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://m.media-amazon.com/images/I/61+lF-82dIL._SX3000_.jpg"
				/>
				<div className="home__row">
					<Product
						id="12321341"
						title="LEGO Creator Mighty Dinosaur Toy 31058, 3 in 1 Model, T. rex, Triceratops and Pterodactyl Dinosaur Figures, Gifts for 7-12 Year Old Boys & Girls"
						price={114.96}
						rating={0}
						image="https://m.media-amazon.com/images/I/8153mG+qVgL._AC_SX425_.jpg"
					/>
					<Product
						id="49538094"
						title="Listerine Total Care Anticavity Fluoride Mouthwash, 6 Benefits in 1 Oral Rinse Helps Kill 99% of Bad Breath Germs, Prevents Cavities, Strengthens Teeth, ADA-Accepted, Fresh Mint, 1 L"
						price={239.0}
						rating={0}
						image="https://m.media-amazon.com/images/I/711B8WpwyDL._SX425_.jpg"
					/>
					<Product
						id="12321341"
						title="Liakai 168 Piece Socket Wrench Auto Repair Tool Combination Package Mixed Tool Set Hand Tool Kit with Plastic Toolbox Storage Case"
						price={114.96}
						rating={0}
						image="https://m.media-amazon.com/images/I/71st0qa7mUL._AC_SY355_.jpg"
					/>
					<Product
						id="49538094"
						title="GeeekPi Raspberry Pi 4 8GB Starter Kit - 128GB Edition, Raspberry Pi 4 Case with PWM Fan, Raspberry Pi 18W 5V 3.6A Power Supply with ON/Off Switch, HDMI Cables for Raspberry Pi 4B (8GB RAM)"
						price={239.0}
						rating={0}
						image="https://m.media-amazon.com/images/I/614x51n2P7L._AC_SX522_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="12321341"
						title="CyberpowerPC Gamer Xtreme VR Gaming PC, Intel Core i7-12700F 2.1GHz, GeForce RTX 3060 12GB, 16GB DDR4, 1TB NVMe SSD, WiFi & Win 11 Home (GXiVR8040A12), Black"
						price={114.96}
						rating={5}
						image="https://m.media-amazon.com/images/I/71FLsWWmE8L._SX425_.jpg"
					/>
					<Product
						id="49538094"
						title="The product is refurbished, fully functional, and in good condition. Backed by the 90-day Amazon Renewed Guarantee.
- This pre-owned product has been professionally inspected, tested and cleaned by Amazon qualified vendors. It is not certified by Apple.
- This product is in Good conditio The screen has no scratches; body shows light scratches barely visible from 12 inches away."
						price={239.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/61M5w4HMIJL._AC_SY550_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="4903850"
						title="Arlo Essential Spotlight Camera - 1 Pack - Wireless Security, 1080p Video, Color Night Vision, 2 Way Audio, Wire-Free, Direct to WiFi No Hub Needed, Works with Alexa, White - VMC2030r"
						price={299.99}
						rating={3}
						image="https://m.media-amazon.com/images/I/610I5N4C9xL._AC_UF894,1000_QL80_FMwebp_.jpg"
					/>
					<Product
						id="23445930"
						title="Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 16GB Unified Memory, 1TB SSD Storage, 1080p FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Midnight"
						price={98.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/81EHBhjC-+L._AC_UF894,1000_QL80_FMwebp_.jpg"
					/>
					<Product
						id="3254354345"
						title="TOCOL 3 in 1 Magnetic for iPhone 15 Pro Max Case, Upgraded [Full Camera Protection] with 2 Screen Protector, Fit for MagSafe [Military Grade Drop Tested Translucent Matte Back Phone Case 6.7"
						price={598.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/71ShhLM-EgL._AC_SX679_.jpg"
					/>
				</div>

				<div className="home__row">
					<Product
						id="90829332"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
					/>
				</div>

				<div className="home__row">
					<Product
						id="4903850"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
						price={199.99}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
					/>
					<Product
						id="23445930"
						title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
						price={98.99}
						rating={5}
						image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
					/>
					<Product
						id="3254354345"
						title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
						price={598.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home
