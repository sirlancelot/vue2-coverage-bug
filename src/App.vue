<script lang="ts">
import Vue from "vue"

export default Vue.extend({
	components: { HelloWorld: () => import("@/components/HelloWorld.vue") },
	methods: {
		coveredFn() {
			console.log("this function is covered")
		},
		uncoveredFn() {
			console.log("this function should be uncovered")
		},
	},
})
</script>

<template lang="pug">
v-app#app
	v-main
		v-container
			img(alt="Vue logo" src="./assets/logo.png")
			HelloWorld(msg="Hello Vue 2 + TypeScript + Vite")
</template>

<style lang="scss">
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: $text-color;
	margin-top: 60px;
}
</style>
