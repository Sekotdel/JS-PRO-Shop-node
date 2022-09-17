Vue.component   ('search', {
    template:
    `
    <form action="#" class="searchWrap" @submit.prevent="$parent.filter">
                        <input type="text"  class="searchInput" placeholder="Поиск" v-model="$parent.userSearch">
                        <button class="searchButton" type="submit">
                            <img alt="" src="images/search.svg">
                        </button>
                    </form>`

})