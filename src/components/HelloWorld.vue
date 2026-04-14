<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      이 프로젝트는 <strong>Vite</strong>와 <strong>Vue 3</strong>로 구성되어 있습니다.<br>
      자세한 내용은
      <a href="https://vitejs.dev" target="_blank" rel="noopener">Vite</a> ·
      <a href="https://vuejs.org" target="_blank" rel="noopener">Vue 3</a> 문서를 참고하세요.
    </p>
    <h3>주요 구성</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">Vue Router 4</a></li>
      <li><a href="https://pinia.vuejs.org" target="_blank" rel="noopener">Pinia</a></li>
      <li><a href="https://axios-http.com" target="_blank" rel="noopener">Axios</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://pinia.vuejs.org" target="_blank" rel="noopener">pinia</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vitejs.dev" target="_blank" rel="noopener">Vite</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
</style>
