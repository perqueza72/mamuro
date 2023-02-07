<template>
    <div class="mx-auto email_container">
        <div class="table_div box-content p-5">
            <EmailTable class="table" v-bind:emails="email_page" :selectEmail="selectEmail"
            v-bind:sortEmailsBy="sortEmailsBy"
            />
            <VPagination class="pagination_div" v-bind:selected_page="page" v-bind:nextPage="nextPage"
                v-bind:previousPage="previousPage" v-bind:getPage="getPage" />
        </div>
        <EmailDescription class="description" v-bind:email="email" />
    </div>
    <div>

    </div>

</template>


<script>
import EmailTable from "./EmailTable.vue"
import EmailDescription from "./EmailDescription.vue"
import VPagination from "./Pagination.vue"
import axios from 'axios'
import { GET_EMAIL_PAGE_URL, GET_EMAIL_PAGE_BY_SEARCH_URL } from "@/constants"

export default {
    name: "EmailList",
    components: {
    EmailTable,
    EmailDescription,
    VPagination
},
    data() {
        return {
            email_page: [{}],
            email_pages: {
                "-1": {}
            },
            email: {

            },
            page: 0,
            sort_field : ["Subject"]
        }
    },
    props:{
        email_query: {
            type: String,
            default: ""
        }
    },
    methods: {
        selectEmail(email) {
            this.email = email
        },
        nextPage() {
            this.getPage(this.page + 1)
        },
        previousPage() {
            this.getPage(this.page - 1)
        },
        getPage(number) {
            if (number < 0) return;
            this.page = number
            if (this.email_pages[number] != undefined) {
                this.email_page = this.email_pages[number]
                return
            }
            this.getEmailData()
        },
        getEmailData(query = this.email_query) {
            const url = query === "" ? 
            GET_EMAIL_PAGE_URL : GET_EMAIL_PAGE_BY_SEARCH_URL

            if(this.email_query != query){
                this.page = 0
            }

            axios
                .post(url,{ 
                    "SortField": this.sort_field,
                    "IndexPage": this.page,
                    "SpecificText": query
                })
                .then(response => {
                    this.email_pages[this.page] = response.data
                    this.email_page = this.email_pages[this.page]
                })
                .catch(err => {
                    this.email = {}
                    console.log(err)
                })
        },
        sortEmailsBy(field){

            if (this.sort_field[0] === field){
                field = "-"+field
            }
            this.sort_field[0] = field
            this.resetData()
            this.getEmailData(this.default_request)
        },
        resetData(){
            this.email_page = [{}]
            this.email_pages = {
                "-1": {}
            }
            this.email = {

            }
            this.page = 0
        }
    },
    mounted() {
        this.getEmailData()
    }

}
</script>

<style>
.email_container {
    display: flex;
    max-width: 100%;
    width: 100%;
    box-sizing: content-box;
}

.table {
    box-sizing: content-box;
}

.description {
    width: 40%;
    max-height: 70vh;
    overflow-y: scroll;
}

.table_div {
    width: 60%;
}

@media (max-width: 600px) {
    .email_container {
        display: block;
    }

    .table_div {
        width: 100%;
        max-width: 100%;
    }

    .description {
        width: 100%;
        max-width: 100%;
        padding: 1rem;
    }

}
</style>