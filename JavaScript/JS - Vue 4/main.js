var vue = new Vue({
	el: "#app",
	data: {
		"name": "Saulo Fernandes",
		"gradle1": 10.0,
		"gradle2": 9.0,
		"status": true
	},
	computed: {
		calculateAverage() {
			return (this.gradle1 + this.gradle2) / 2;
		}
	},
	methods: {
	}
});
