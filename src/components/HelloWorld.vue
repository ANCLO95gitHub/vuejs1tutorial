<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links   qwerty</h2>
    heroku logs --app vuejs1tutorial -n 250
    <h3>le h3</h3>

    <br>
    <div class="leMaster">

      <div class="ligne1">
        <div class="sections" v-on:click="fDoCheck1()">
          Dans Section 1  ab
          {{section1}}
        </div>
        <div class="sections" v-on:click="fDoCheck2()">
          Dans Section 2
          {{section2}}
        </div>
        <div class="sections" v-on:click="fDoCheck3()">
          Dans Section 3
          {{section3}}
        </div>
      </div>

      <div class="ligne2">
        <div class="sections">
          Dans Section 4
        </div>
        <div class="sections">
          Dans Section 5
        </div>
        <div class="sections">
          Dans Section 6
        </div>
      </div>

      <div class="ligne3">
        <div class="sections">
          Dans Section 7
        </div>
        <div class="sections">
          Dans Section 8
        </div>
        <div class="sections">
          Dans Section 9
        </div>
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
      msg: 'Welcome to Your Vue.js App',
      section1: 'z', section2: 'z', section3: 'z',
    }
  },
  methods: {
    fDoCheck1(){
      if( this.section1 === "X" ){
        this.section1 = "_";
      }else{
        this.section1 = "X";
      }
    },
    fDoCheck2(){
      if( this.section2 === "X" ){
        this.section2 = "_";
      }else{
        this.section2 = "X";
      }
    },
    fDoCheck3(){
      if( this.section3 === "X" ){
        this.section3 = "_";
      }else{
        this.section3 = "X";
      }
    }
  }
}
/*
*   flex-wrap: wrap;
*
*   display: flex;
  flex-direction: row;
  align-items: stretch;
  border-style: dot-dash;
  border-width: 7px;
  border-color: green;
  height: 150px;
  width: 500px;
  min-width: 400px;
  max-width: 800px;
  flex-basis: auto; // default value
flex-grow: 1;
* */
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
  border-style: dot-dash;
  border-width: 7px;
  border-color: green;

}
.ligne1{
  padding: 0;
  margin: 0;
  list-style: none;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-flex-flow: row wrap;
  justify-content: space-around;

}
.ligne2{
  padding: 0;
  margin: 0;
  list-style: none;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-flex-flow: row wrap;
  justify-content: space-around;
}

.ligne3{
  padding: 0;
  margin: 0;
  list-style: none;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -webkit-flex-flow: row wrap;
  justify-content: space-around;
}

.sections{
  max-width: 700px;
  border-style: groove;
  border-width: 7px;
  border-color: coral;
  cursor: pointer;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  min-width: 100px;
  max-width: 400px;
  height: 200px;
  background-color: snow;
  overflow: hidden;
  font-weight: bold;
  text-align: center;
}
.sections:hover {
  background: cadetblue ;
}
</style>
