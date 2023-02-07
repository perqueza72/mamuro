<template>
    <div class="mx-auto email_container">
        <div class="table_div box-content p-5">
            <EmailTable class="table" v-bind:emails="email_page" :selectEmail="SelectEmail" />
            <VPagination class="pagination_div" v-bind:selected_page="page" v-bind:nextPage="NextPage" v-bind:previousPage="PreviousPage"
                v-bind:getPage="GetPage" />
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
import { GET_EMAIL_PAGE_URL } from "@/constants"

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
            page: 0
        }
    },
    methods: {
        SelectEmail(email) {
            this.email = email
        },
        NextPage() {
            this.GetPage(this.page + 1)
        },
        PreviousPage() {
            this.GetPage(this.page - 1)
        },
        GetPage(number) {
            if (number < 0) return;
            this.page = number
            if (this.email_pages[number] != undefined) {
                this.email_page = this.email_pages[number]
                return
            }
            this.GetEmailData()
        },
        GetEmailData() {
            axios
                .post(GET_EMAIL_PAGE_URL, {
                    "SortField": ["Subject"],
                    "IndexPage": this.page
                })
                .then(response => {
                    this.email_pages[this.page] = response.data
                    this.email_page = this.email_pages[this.page]
                })
                .catch(err => {
                    this.email = {}
                    console.log(err)
                })
        }
    },
    mounted() {
        this.GetEmailData()
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
    .email_container{
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