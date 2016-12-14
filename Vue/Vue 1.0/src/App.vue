<template>
  <div id="app">
    <img @click='args(1)' class="logo" src="./assets/logo.png">
    <hello></hello>
    <p>
      Welcome to your Vue.js app!
    </p>
<validator name="validation1">
    <form novalidate>
    
      <div class="username-field">
        <label for="username">username:</label>
        <input id="username" type="text" v-validate:username="['required']">
        <p v-if="$validation1.username.required">Required your name.</p>
      </div>
      <div class="comment-field">
        <label for="comment">comment:</label>
        <input id="comment" type="text" v-validate:comment="{ maxlength: 256 }">
        <p v-if="$validation1.comment.maxlength">Your comment is too long.</p>
      </div>
      <input type="submit" value="send" v-if="$validation1.valid">
    
    </form>
  </validator>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Vue from 'vue'
// var VueResource = require('vue-resource');
// Vue.use(VueResource);
var VueValidator = require('vue-validator')
Vue.use(VueValidator)
export default {
  data(){
    var a={
      b: 1
    }
    return {
      'a':a
    }
  },
  components: {
    Hello
  },
  methods: {
      args:function(a){
          console.log(this.$el);
      }
  }
}
</script>

<style lang='scss'>

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  input {
    background: red;
  }
}
label {
    display: inline-block;
    padding-right: 10px;
    padding-bottom: 10px;
    width: 80px;
    text-align: right;
  }
  input {
    outline: none;
  }
  html {
    height: 100%;
  }
#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>