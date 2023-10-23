const { createApp } = Vue

createApp({
	data() {
		return {
			message: 'Hello Vue!',
			imageLink: 'https://picsum.photos/id/96/600/300'
		}
	},
}).mount('#app')