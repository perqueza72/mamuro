<template>

    <div class="relative overflow-x-auto w-full ">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Subject
                    </th>
                    <th scope="col" class="px-6 py-3">
                        From
                    </th>
                    <th scope="col" class="px-6 py-3">
                        To
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="email in emails"
                    :key="email.id" @click="selectEmail(email)"
                    
                    >
                    <th scope="row" class="overflow-hidden max-w-sm px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ email.Subject }}
                    </th>
                    <td class="px-6 py-4">
                        {{ email.From }}
                    </td>
                    <td class="px-6 py-4 overflow-y-scroll">

                        {{ email.To }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
export default {
    name: "EmailTable",
    props: {
        emails: Array,
        selectEmail: Function
    }
}
</script>