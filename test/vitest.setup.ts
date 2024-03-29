import Vue from 'vue'
Vue.config.devtools = false
Vue.config.productionTip = false

// import vuetify after suppressing devtools warning
const Vuetify = (await import('vuetify/lib')).default

Vue.use(Vuetify)

// mock window.matchMedia which not implemented by jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
