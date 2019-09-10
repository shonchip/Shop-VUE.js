
<!-- HTML -->
<template>
    <div><!-- ROOT DIV-->
        <filterBar 
            v-bind:mode.sync="mode"
            v-bind:filters.sync="filters"
            v-on:resetFilters="resetFilters"
        /> 
        
        <showCase 
            v-if="mode === 'showcase'" 
            v-bind:items="items" 
        />

        <listCase 
            v-if="mode === 'list'" 
            v-bind:items="items" 
        /> <!-- <listCase v-if="mode === 'list'" v-bind:items="items"></listCase> -->   

        <div class="pagination">
            <a href="#" class="pagination__link">Предыдущая</a>
            <a href="#" class="pagination__page">1</a>
            <a href="#" class="pagination__page pagination__page--active">2</a>
            <a href="#" class="pagination__page">3</a>
            <a href="#" class="pagination__page">4</a>
                <span href="#" class="pagination__dots">...</span>
            <a href="#" class="pagination__link">Следующая</a>
        </div>
    </div><!-- // ROOT DIV-->
</template>


<script>
    import listCase from '@/components/listCase' 
    import showCase from '@/components/showCase'
    import filterBar from '@/components/filterBar'

    export default {
        components: {
            listCase,
            showCase,
            filterBar
        },

        data() {
            return {
                mode: 'showcase',
                filters: {
                    rooms: null,
                    square: {
                        min: null,
                        max: null
                    }
                }
            }
        },

        methods: {
            resetFilters() {
                this.filters = {
                    rooms: null,
                    square: {
                        min: null,
                        max: null
                    }
                }
            }
        },

        computed: {
            items() {
                let items = this.$store.state.items
                
                // rooms
                if (this.filters.rooms) {
                    items = items.filter(item => item.rooms === this.filters.rooms)
                }
                
                // square
                if (this.filters.square.min) {
                    items = items.filter(item => item.square >= this.filters.square.min)
                }

                if (this.filters.square.max) {
                    items = items.filter(item => item.square <= this.filters.square.max)
                }

                return items
            }
        }
    }
</script>