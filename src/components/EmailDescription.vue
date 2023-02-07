<template>
    <div class="email-text-div mr-7 mt-5">

        <p class="tracking-normal font-bold">
            {{ email.Subject }}
        </p>
        <p>
            <br/>
        </p>
        <p>
            {{ email.Content }}
        </p>
    </div>

</template>

<script>
export default {
    name: "EmailDescription",
    props:{
        email: Object
    }
}
</script>


<style>

.email-text-div{
    display: inline-block;
    overflow-y: scroll;
}

.email-text-div > p{
    display: block;
}

</style>