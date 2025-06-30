import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>
						<img
							src={careType === 'light' ? Sun : Water}
							alt={careType === 'light' ? 'sun-icon' : 'water-icon'}
						/>
					</span>
				) : null
			)}
		</div>
	)
}

export default CareScale