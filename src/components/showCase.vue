<template>
    <div class="cards-wrapper">
        <div class="container p-0">
            <div class="row">
                <div class="col-md-4" v-for="item of items">
                    <div class="card">
                        <div class="card__header">
                            <router-link :to="`/product/${item.id}`">{{ item.rc.label }}</router-link>    
                            <div class="card__like" 
                                v-bind:class="{ 'card__like--active': item.favorite }"
                                v-on:click="$store.dispatch('likeHandler', item.id)">
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                        <div class="card__img">
                            <img src="img/flat-plan.png" alt="План квартиры">
                        </div>
                        <div class="card__desc">
                            <div class="card__price">
                                <div class="card__price-total">{{ item.ppsm * item.square }} ₽</div>
                                <div class="card__price-per-meter">{{ item.ppsm }} ₽/м<sup>2</sup></div>
                            </div>

                            <div class="card__params params">
                                <div class="params__item">
                                    <div class="params__definition">Комнат</div>
                                    <div class="params__value">{{ item.rooms }}</div>
                                </div>
                                <div class="params__item">
                                    <div class="params__definition">Площадь</div>
                                    <div class="params__value">{{ item.square }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="card__footer">
                            <div class="card__art">{{ item.vendorCode }}</div>
                            <div class="card__floor">Этаж {{ item.floor }} из 12</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- // card -->
</template>


<script>
	export default {
		props: ['items']
	}
</script>