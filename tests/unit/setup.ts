/// <reference types="vitest/globals" />
import { enableAutoDestroy, resetAutoDestroyState } from "@vue/test-utils"

beforeAll(function setupBeforeAll() {
	enableAutoDestroy(afterEach)
})

afterAll(function setupAfterAll() {
	resetAutoDestroyState()
})
