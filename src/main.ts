import Vue from "vue"
import App from "@/App.vue"
import vuetify from "@/plugins/vuetify"

export default new Vue({
	vuetify,
	render: (h) => h(App),
}).$mount("#app")
