# vue-pwd-input

vue 密码输入框插件| a password plugin

<img src="https://raw.githubusercontent.com/dlt1111/vue-pwd-input/master/example/m_exp.jpg" width="200" height="300">

## How to use

### install

```javascript
npm install --save vue-pwd-input
```

### main.js/xxx.vue

```javascript
import Vue from "vue";

import PwdInput from "vue-pwd-input";

Vue.use(PwdInput);
```

### xxx.vue

```html
<template>
  <pwd-input :max-length="6" ref="pwd" @blur="pwdBlur" @listenInput="listenInput"></pwd-input>
</template>
```

```javascript
<script>
  data () {
    return {
      password: ''
    }
  },
  methods: {
    pwdBlur (password) {
      this.password = password            // get input password
    },
    listenInput (val) {
      console.log(val)                    // get input password
    },
    pwdFocus () {
      this.$refs.pwd.focusInput()
    },
    blur () {
      this.$refs.pwd.blur()               // blur
    },
    clear () {
      this.$refs.pwd.clear()              // clear input
    }
  }
</script>
```
