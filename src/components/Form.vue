<template>
    <form @submit.prevent="checkform"  :class="(errorStatus) ? 'mb-3 border-SoftRed' : 'mb-12 border-DesaturatedRed'" class="border-[1px] w-fit relative rounded-full pl-6 h-auto mt-8 w-9/12 lg:ml-16 lg:mt-12">
        <input v-model="email" type="email" placeholder="Email Address" class="form--input  pr-4 relative -top-[2px] outline-none"/>
        <img v-if="(errorStatus)==true" src="../images/icon-error.svg" class="absolute top-2 right-20" />
        <button class="form--button w-16 h-10 rounded-full relative  px-7"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 1l8.836 8.836L1 18.671"/></svg></button>
    </form>

    <div class="w-[285px]">
        <p v-if="errors.length>0" class="text-SoftRed mb-12  font-semibold text-[13px] lg:ml-16"> {{ errors[0] }} </p>
    </div>
</template>

<script>
    export default {
        name: 'Form',

        data() {
            return {
                errorStatus: false,
                email: '',
                errors: []
            }
        },

        methods: {
            checkform() {
                this.errors = []
                if(this.email.trim().length === 0) {
                    this.errorStatus = true
                    this.errors.push("Please provide a valid email")
                } else {
                    this.errorStatus = false
                    console.log("correct")
                }
            }
        }
    }
</script>