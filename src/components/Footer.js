import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, there is no @, this is not a valid address 😥")
		}
	}

	function handleSubmit() {
		if (inputValue.includes('@')) {
			alert(`Thanks for subscribing with ${inputValue} 🎉`)
			setInputValue('')
		} else {
			alert("Please enter a valid email address before submitting 😥")
		}
	}

	return (
		<footer className='jh-footer'>
			<div className='jh-footer-elem'>
				For plant enthusiasts 🌿🌱🌵
			</div>
			<div className='jh-footer-elem'>
				Subscribe to our newsletter :
			</div>
			<div className='jh-footer-elem'>
				<input
					placeholder='Enter your email'
					onChange={handleInput}
					value={inputValue}
					onBlur={handleBlur}
					className='jh-footer-input'
				/>
				<button onClick={handleSubmit} className='jh-footer-button'>
					Subscribe
				</button>
			</div>
		</footer>
	)
}

export default Footer
