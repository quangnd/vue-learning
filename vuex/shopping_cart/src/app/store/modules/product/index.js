import axios from 'axios';

const state = {
  productItems: []
};

const mutations = {
  UPDATE_PRODUCT_ITEMS (state, payload) {
    state.productItems = payload;
  }
};

const actions = {
  //using ES6 destructing
  getProductItems ({ commit }) {
    axios.get('/api/products').then(response => {
      commit('UPDATE_PRODUCT_ITEMS', response.data);
    })
  }
};

const getters = {
  productItems: state => state.productItems
};

const productModule = {
  state,
  mutations,
  actions,
  getters
}

export default productModule;
