import { vi } from "vitest"

const useFn = vi.fn()
vi.mock("vue", () => ({ default: { use: useFn } }))

const vuetify = vi.fn()
vi.mock("vuetify", () => ({ default: vuetify }))

vi.mock("vuetify/dist/vuetify.min.css", () => {})

it("configures itself", async () => {
	const { default: plugin } = await import("./vuetify")
	expect(useFn).toHaveBeenNthCalledWith(1, vuetify)
	expect(plugin).toBeInstanceOf(vuetify)
})
