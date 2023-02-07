<template>

    <div class="nav_background">
        <div class="div_logo">
            <img class="logo" src="./../assets/logo.png" alt="Mamuro logo" />
        </div>
        <h1 class="title text-2xl font-semibold">
            {{ name }}
        </h1>
    </div>
</template>

<script>
export default{
    name: "V-Navbar",
    props:{
        name: String
    }
}
</script>

<style>
    .nav_background{
        display: flex;
        text-align: center;
        align-items: center;
        padding: 1%;
        background-color: whitesmoke;
    }

    .div_logo{
        display: inline-block;
        height: 50px;
    }

    .div_logo > .logo{
        max-width: 100%;
        max-height: 100%;
    }

    .title{
        margin-left: 1rem;
        display: inline-block;
    }
</style>