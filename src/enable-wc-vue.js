import { defineCustomElement } from 'vue'
import CurrentTime from './CurrentTime.vue'

const CurrentTimeElement = defineCustomElement(CurrentTime)

customElements.define('current-time-vue', CurrentTimeElement)