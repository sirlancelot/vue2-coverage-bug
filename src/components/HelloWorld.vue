<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	props: {
		msg: { type: String, default: "" },
	},
	data: () => ({
		count: 0,
	}),
	mounted() {
		const anchors = this.$el.getElementsByTagName("a")
		for (const a of Array.from(anchors)) a.target = "_blank"
	},
	methods: {
		increment() {
			this.count++
		},
	},
})
</script>

<template lang="pug">
div
	h1 {{ msg }}
	p.
		Recommended IDE setup:
		#[a(href="https://code.visualstudio.com/") VSCode] +
		#[a(href="https://github.com/vuejs/vetur") Vetur]
	p See <code>README.md</code> for more information.
	p.
		#[a(href="https://vitejs.dev/guide/features.html") Vite Docs] |
		#[a(href="https://v2.vuejs.org/") Vue 2 Docs]

	v-btn(color="primary" type="button" @click="increment").
		count is: {{ count }}
	p.
		Edit #[code components/HelloWorld.vue] to test hot module replacement.
</template>

<style scoped>
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
