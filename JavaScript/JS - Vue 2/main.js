var vue = new Vue({
	el: "#app",
	data: {
		name: "Harvey"
	},
	computed: {
		// Faz Pronto
		x() {
			console.log("Aham x");
		}
	},
	methods: {
		// Precisa Ser Chamado
		sendMessage() {
			console.log("Agora Sim, " + this.name + ", Hello Vue!");
			alert("Agora Sim, " + this.name + ", Hello Vue!");
		}
	}
});
