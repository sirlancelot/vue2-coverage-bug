import { shallowMount } from "@vue/test-utils"
import Component from "./App.vue"

const createWrapper = () => shallowMount<any>(Component, {
	stubs: ["HelloWorld", "v-app", "v-main", "v-container"],
})

it("mounts", () => {
	const wrapper = createWrapper()
	expect(wrapper.html()).toMatchSnapshot()
})

it("tests coveredFn", () => {
	const wrapper = createWrapper()
	const consoleLog = vi.spyOn(console, "log").mockReturnValue()

	wrapper.vm.coveredFn()

	expect(consoleLog).toHaveBeenNthCalledWith(1, "this function is covered")
})
