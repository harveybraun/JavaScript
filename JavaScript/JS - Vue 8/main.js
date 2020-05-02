var vue = new Vue({
	el: "#app",
	data: {
		"name": ""
	},
	methods: {
		add() {
			alert("Seu Nome: " + this.name)
		}
	}
});
