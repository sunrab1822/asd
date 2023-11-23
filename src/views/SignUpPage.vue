<template>
    <div>
        <h2>Sign Up</h2>
        <label for="name">
            <input type="text" id="name" v-model="username" placeholder="name">
        </label>
        <br>
        <label for="text">
            <input type="email" id="email" placeholder="email" v-model="email">
        </label>
        <br>
        <label for="password">
            <input v-model="password" @keyup="valtozas" type="password" placeholder="password" id="password">
        </label>
        <br>
        <label for="password-repeat">
            <input type="text" v-model="password_repeat" placeholder="password-repeat" id="password-repeat">
        </label>
        <button :disabled="isDesabled" @click="signup">signup</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const isDesabled = ref(true)
    let password = ref("")
    let password_repeat = ref("")
    let username = ref("")
    let email = ref("")

    const valtozas = () => {
        if(password.value == ""){
            isDesabled.value = true
        }
        else{
            isDesabled.value = false
        }
    }

    const signup = () => {

        if(email.value === "" || username.value === ""){
            alert("minden adatot ki kell tölteni")
            return
        }

        if (password.value != password_repeat.value)
        {
            alert("nem ugyanaz a jelszot adta meg")
            return
        }
        alert("siker")
    }


</script>