<template>
    <section class="h-80 w-screen overflow-y-hidden xsm:h-[32rem] md:h-[45rem] lg:fixed top-0 right-0 lg:w-[550px] lg:h-fit 2xl:w-[650px]">
        <img src="../images/hero-mobile.jpg" alt="Hero image" class="w-full  lg:hidden"/>
        <img src="../images/hero-desktop.jpg" alt="Hero image" class="w-full h-screen hidden lg:block"/>
    </section>
</template>

<script>
    export default {
        name: "MainImg",
    }
</script>