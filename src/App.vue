<template>
  <div id="app">
    <main class="container wrap">
      <div class="flex-grow-3">
        <Menu/>
      </div>
      <div class="flex-grow-5 full">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import Menu from '@/components/Menu';

export default {
  name: 'app',
  components: {
    Menu,
  },
  mounted() {
    const full = Array.from(document.getElementsByClassName('full'));
    if (full) {
      full.forEach((e) => {
        e.style.maxHeight += `${window.innerHeight - 80}px`;
      });
    }
  },
};
</script>

<style>
@import 'assets/css/the-grid.css';

body {
  margin: 0;
  padding: 0;
  border: 0;
}

#app {
  font-family: 'Century Gothic', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #516b57;
  letter-spacing: .02em;
}

a {
  text-decoration: none;
  outline: none;
  color: #516b57
}

a:active {
  color: #aa998a;
}

a:hover {
  cursor: pointer;
}

main {
  text-align: center;
  margin: 40px;
}

.full {
  height: 100%;
  overflow: auto;
}

</style>
