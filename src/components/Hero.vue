<template>
        <Header />
        <Form />
</template>

<script>
    import Header from './Header.vue'
    import Form from './Form.vue'

    export default {
        name: "Hero",
        components: {
            Header,
            Form
        }
    }
</script>