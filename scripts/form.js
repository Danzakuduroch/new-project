function formFn(event) {
	event.preventDefault()
	const form = event.target

	const formData = new FormData(form)

	const fio = formData.get('fio')
	const phone = formData.get('phone')
	const email = formData.get('email')
	const service = formData.get('service')
	const date = formData.get('date')

	const data = {
		fio, 
		phone,
		email,
		service,
		date
	}

	localStorage.setItem("data", JSON.stringify(data))
}
