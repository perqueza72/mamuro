<template>
    <div id="email-text-div" class="mr-7 mt-5">

        <p class="tracking-normal font-bold">
            {{ email.Subject }}
        </p>
        <p>
            <br/>
        </p>
        <p class="email-content">
            {{ email.Content }}
        </p>
    </div>

</template>

<script>
export default {
    name: "EmailDescription",
    props:{
        email: {
            Object,
            default(){
                return {
                    Subject: String,
                    Content: String
                }
            }
        }
    },
    updated(){
        document.getElementById("email-text-div").scrollTop = 0
    }
    
}
</script>


<style>

#email-text-div{
    display: inline-block;
    overflow-y: scroll;
}

#email-text-div > p{
    display: block;
}

.email-content{
    white-space: pre-wrap;
}

</style>