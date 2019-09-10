import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
 const generate = () => Array.from({ length: 6 }, (item, index) => ({
    id: index + 1,
    vendorCode: 'ГЕН-112.4.2-56',                                      // артикул
    rc: { label: 'ЖК "Генеральский"', address: 'url' },                // жилой комплекс
    building: 15,                                                      // корпус
    floor: 4,                                                          // этаж
    rooms: [1, 2, 1, 2, 3, 4, 2][index],                               // комнат
    square: [50, 40, 120, 45, 23, 66][index],                          // площадь
    ppsm: 64000,                                                       // price per square meter - цена за квадратный метр
    seller: 'Застройщик',                                              // продавец
    favorite: false                                                    // избранное

 }))
export default new Vuex.Store({
  state: {
    items: generate()
  },
  mutations: {
    setFavoriteState(state, itemId) {
      const item = state.items.find(x => x.id === itemId)
      item.favorite = !item.favorite
    }
  },
  actions: {
    likeHandler(store, itemId) {
      store.commit('setFavoriteState', itemId)
    }
  }
})
