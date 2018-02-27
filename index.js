import Vue from 'vue'
import PwdInput from './pwd-input.vue'
export default {
    install: function (Vue, options) {
        Vue.component(PwdInput.name, PwdInput)
    }
}
