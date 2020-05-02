var vue = new Vue({
	el: "#app",
	data: {
		"name": "Mariano",
		"lastName": "Silva"
	},
	computed: {
		fullName() {
			return this.name + " " + this.lastName;
		}
	},
	methods: {
		// Amostra de Metodos
	}
});
