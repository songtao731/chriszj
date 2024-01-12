<script setup lang="ts">
import { ElButton } from "element-plus";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo bl"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/upload">upload2</RouterLink>
        <RouterLink to="/form">form</RouterLink>
        <RouterLink to="/descriptions">Descriptions</RouterLink>
        <RouterLink to="/table">table</RouterLink>
        <RouterLink to="/test">test</RouterLink>
        <RouterLink to="/tableLists?a=1">tableLists</RouterLink>
        <RouterLink to="/formTable">formTable</RouterLink>
        <RouterLink to="/tableTree">tableTree</RouterLink>
        <RouterLink to="/card">card</RouterLink>
        <RouterLink to="/formvalue">formValue</RouterLink>
        <RouterLink to="/tree">Tree</RouterLink>
        <ElButton type="primary"> 111 </ElButton>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
