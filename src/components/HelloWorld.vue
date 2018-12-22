<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links   qwerty</h2>
    heroku logs --app vuejs1tutorial -n 250
    <h3>le h3</h3>

    <br>
    <div class="leMaster">
      <div class="sections">
        Dans Section 1  a
      </div>
      <div class="sections">
        Dans Section 2
      </div>
      <div class="sections">
        Dans Section 3
      </div>
      <div class="sections">
        Dans Section 4
      </div>
    </div>
    <br><br><br>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.leMaster{
  display: flex;
  flex-wrap: wrap;
  border-style: dot-dash;
  border-width: 7px;
  border-color: green;
}
.sections{
  max-width: 700px;
  border-style: groove;
  border-width: 7px;
  border-color: coral;
}
</style>
