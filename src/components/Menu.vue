<template>
  <div id="menu">
    <div class="container column">
      <div class="flex-basis-100 flex-grow-5 spacing">
        <div class="photo">
          <img src="./../assets/tiny-rick-602x500.jpg" alt="userJapa">
        </div>
        <div>
          <span class="mark"><a href="#"><strong>Willian Hiroshi Simabukuro</strong></a></span>
        </div>
      </div>
      <div class="flex-basis-100 flex-grow-5">
        <div>
          <span>Full-Stack Developer</span>
        </div>
      </div>
      <div class="flex-grow-5 dropdown">
        <div>
          <span><strong>Programming Languages</strong></span>
        </div>
        <div class="dropdown-content">
          <ul class="no-dot">
            <li>
              <span class="op"><a href="#">HTML5/CSS3</a></span>
            </li>
            <li>
              <span class="op"><a href="#">JavaScript</a></span>
              <li>
                <span class="op"><a href="#">Java</a></span>
              </li>
              <li>
                <span class="op"><a href="#">PHP</a></span>
              </li>
              <li>
                <span class="op"><a href="#">C++</a></span>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
};
</script>

<style lang="css">
  #menu {
    border: 2px solid red;
    height: 100%;
    width: 100%;
  }

  .mark {
    font-size: 20px;
    line-height: 1;
    font-weight: 400;
  }

  .op {
    margin: 15px -25px;
  }

  .op a:hover {
    text-decoration: underline;
  }

  .no-dot {
    list-style-type: none;
  }

  ul li {
    margin: 5px;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    background-color: rgba(255,255,255,0.9);
    z-index: 1;
    text-align: left;
    padding: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 220px;
    position: absolute;
  }

  .dropdown:hover .dropdown-content {
    display: block;
    animation: down 0.5s;
  }

  .spacing * {
    margin: 5px;
  }


  .photo {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
    margin: 35px auto;
    overflow: hidden;
    transition: all 0.3s ease .3s;
    border-radius: 0px;
    width: 125px;
    height: 125px;
    box-shadow: 1px 0px 5px 1px #8899a8;
  }
  .photo img {
    -webkit-transform: rotate(45deg) scale(1.5);
    -moz-transform: rotate(45deg) scale(1.5);
    transform: rotate(45deg) scale(1.5);
    width: 125px;
    height: 125px;
  }

  .photo:before {
    z-index: 1;
    transform: scale(0);
    transition: all 0.3s ease;
  }

  @keyframes down {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
