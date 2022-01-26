import { shallowMount } from "@vue/test-utils"
import Component from "./HelloWorld.vue"

const createWrapper = (props: object = {}) =>
	shallowMount<any>(Component, {
		propsData: { ...props },
		stubs: { "v-btn": true },
	})

it("mounts", async () => {
	const msg = Symbol("msg").toString()
	const wrapper = createWrapper({ msg })
	expect(wrapper.get("h1").text()).toBe(msg)
})

it("updates count", async () => {
	const wrapper = createWrapper()
	const button = wrapper.get("v-btn-stub")

	expect(button.text()).toBe("count is: 0")

	await button.vm.$emit("click")

	expect(button.text()).toBe("count is: 1")
})
