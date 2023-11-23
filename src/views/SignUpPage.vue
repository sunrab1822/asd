<template>
    <div>
        <h2>Sign Up</h2>
        <label for="name">
            <input type="text" id="name" placeholder="name">
        </label>
        <label for="text">
            <input type="text" id="email" placeholder="email">
        </label>
        <label for="password">
            <input v-model="password" @keyup="valtozas" type="password" placeholder="password" id="password">
            {{ password }}
        </label>
        <label for="password-repeat">
            <input type="text" v-model="password_repeat" placeholder="password-repeat" id="password-repeat">
        </label>
        <button :disabled="isDesabled">signup</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const isDesabled = ref(true)
    let password = ref("")

    const valtozas = () => {
        if(password.value == ""){
            isDesabled.value = true
        }
        else{
            isDesabled.value = false
        }
    }
    
</script>