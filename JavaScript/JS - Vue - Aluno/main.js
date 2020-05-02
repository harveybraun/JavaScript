var vue = new Vue({
	el: "#aluno",
	data: {
		"nome": "Diego Garcia",
		"nota1": 8,
		"nota2": 9
	},
	computed: {
		gerarMedia() {
			return (this.nota1 + this.nota2) / 2;
		},
		gerarResultado() {
			if (this.gerarMedia < 6) {
				return "Reprovado";
			}
			return "Aprovado";
		},
		gerarConceito() {
			var media = this.gerarMedia;
			if (media < 6) {
				return "D";
			} else if (media < 8) {
				return "C";
			} else if (media < 9) {
				return "B";
			} else {
				return "A";
			}
		}
	}
});
