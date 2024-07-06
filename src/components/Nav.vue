<script setup>
import { RouterLink } from 'vue-router';
import 'primeicons/primeicons.css';


function increaseCount() {
    console.log("");
}

</script>

<template>
    <div class="navbar  ">
        <div class=" w-3/4">
            <div class="dropdown">
                <div tabindex="0" role="button" class="pr-3 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 20 20"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li> <router-link to="/">
                            <i class="pi pi-home" style="color: green ;font-size: 1.3rem"></i>Home</router-link></li>
                    <li> <router-link to="/about"> About</router-link></li>

                </ul>
            </div>
            <h1 class="text-orange-800 text-2xl lg:text-3xl">
                Movie_ <span class="text-fuchsia-600 lg:text-3xl">Apk</span>
            </h1>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal pr-3">
                <li> <router-link to="/"> <span>
                            <i class="pi pi-home" style="color: green ;font-size: 1.3rem"></i>
                        </span>Home</router-link></li>
                <li> <router-link to="/about"> About</router-link></li>
            </ul>
        </div>
        <div class="navbar-end">
            <a class="btn btn-neutral" @click="increaseCount()">Log In</a>

        </div>
    </div>
</template>
