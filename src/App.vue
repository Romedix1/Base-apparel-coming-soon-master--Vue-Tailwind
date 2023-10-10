<template>
  <div>
    <Nav />
      <main class="grid justify-items-center lg:w-6/12 lg:justify-items-start lg:h-screen lg:block 2xl:w-8/12 2xl:pl-[6em] lg:pt-16">
        <MainImg />
        <Hero />
      </main>
  </div>
</template>

<script>
    import Nav from "./components/Nav.vue"
    import Hero from "./components/Hero.vue"
    import MainImg from './components/MainImg.vue'

    export default {

      components: {
        Nav,
        MainImg,
        Hero,
      }
    }
</script>