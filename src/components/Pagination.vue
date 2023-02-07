<template>

    <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">

        <ul class="inline-flex items-center -space-x-px">
            <li>
                <a @click="previousPage"
                    class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
            <li v-if="selected_page > 0">
                <a @click="previousPage" :class=unselect_page_class>{{ selected_page }}</a>
            </li>
            <li>
                <a v-bind:class=select_page_class>{{ selected_page+ 1}}</a>
            </li>
            <li>
                <a @click="nextPage" v-bind:class=unselect_page_class>{{ selected_page+ 2}}</a>
            </li>
            <li>
                <a v-bind:class=unselect_page_class>...</a>
            </li>
            <li>
                <a @click="getPage(selected_page+9)" v-bind:class=unselect_page_class>{{selected_page+10}}</a>
            </li>
            <li>
                <a @click="nextPage"
                    class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "V-Pagination",
    props: {
        selected_page: {
            type: Number,
            default: 0
        },
        nextPage: Function,
        previousPage: Function,
        getPage: Function
    },
    data() {
        return {
            select_page_class: "cursor-pointer z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
            unselect_page_class: "cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
    }
}

</script>