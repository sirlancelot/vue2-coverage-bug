import { vi } from "vitest"
import Vue from "vue"

const ok = Symbol("html ok").toString()
vi.mock("@/App.vue", () => ({
	default: Vue.extend({
		render: (h) => h("div", { attrs: { id: "app" } }, ok),
	}),
}))

const vuetify = Symbol("vuetify plugin")
vi.mock("@/plugins/vuetify", () => ({ default: vuetify }))

beforeEach(() => {
	const app = document.createElement("div")
	app.setAttribute("id", "app")
	document.body.appendChild(app)
})

afterEach(() => {
	const app = document.getElementById("app")
	document.body.removeChild(app!)
})

it("mounts App.vue", async () => {
	const { default: root } = await import("@/main")
	expect(root.$el.innerHTML).toBe(ok)
	expect(root.$options.vuetify).toBe(vuetify)
})
