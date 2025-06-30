import { plantList } from '../data/plantList'
import PlantItem from './PlantItem'
import '../styles/Shopping.css'

function Shopping({ cart, updateCart }) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const existingPlant = cart.find((plant) => plant.name === name)

		if (existingPlant) {
			const cartFiltered = cart.filter((plant) => plant.name !== name)
			updateCart([
				...cartFiltered,
				{ name, price, quantity: existingPlant.quantity + 1 }
			])
		} else {
			updateCart([
				...cart,
				{ name, price, quantity: 1 }
			])
		}
	}

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='jh-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
						/>
						<button onClick={() => addToCart(name, price)}>Add</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default Shopping
