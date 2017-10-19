<template>
  <div id="home">
    <div class="container column">
      <div class="flex-grow-5">
        <div class="info">
          <h2>Languages</h2>
          <hr />
          <ul>
            <li>
              Portuguese (Native)
            </li>
            <li>
              English (Upper Intermediate)
            </li>
          </ul>
        </div>
        <div class="info">
          <h2>Repository</h2>
          <hr />
          <ul class="no-dot">
            <li>
              <a href="https://github.com/usuarioJapa/" target="_blank">GitHub</a>
            </li>
          </ul>
        </div>
        <div class="info">
          <h2>Skills</h2>
          <hr />
          <ul>
            <li>
              Driver's License (CNH) - Categories A and B
            </li>
            <li>
              Hardware and Networking Certificate - 27/01/2011 => 16/11/2012
            </li>
            <li>
              Web Design Certificate - 15/03/2014 => 20/01/2015
            </li>
            <li>
              English Certificate at Fisk - 04/02/2005 => 12/12/2012
            </li>
            <li>
              Currently studying Systems Analysis and Development at Unicesumar - 13/02/2014 => {{date}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      date: '',
    };
  },
  mounted() {
    const currentDate = new Date();
    const date = {
      day: () => {
        if (currentDate.getDay() > 9) {
          return currentDate.getDay();
        }

        return `0${currentDate.getDay()}`;
      },
      month: () => {
        if (currentDate.getMonth() > 9) {
          return `${currentDate.getMonth()}`;
        }

        return `0${currentDate.getMonth()}`;
      },
    };
    this.date = `${date.day()}/${date.month()}/${currentDate.getFullYear()}`;
  },
};
</script>

<style>
h1,
h2 {
  font-weight: normal;
}

#home {
  border: 2px solid blue;
}

.info {
  padding: 5px;
  text-align: left;
}

.info h2 {
  padding: 0px 10px;
}

</style>
