import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Jon',
      last_name: 'Snow',
      email: 'jon@snow.com'
    },
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200
      },
      {
        id: 3,
        name: 'Meião',
        price: 50
      }
    ],
    cart: []
  },
  getters: {
    total(state) {
      //dependencia
      //retornar um valor
      return state.cart.reduce((total, item) => total += item.price, 0);
    },
  },
  mutations: {
    storeUser(state, data){
      state.user = data;
    },
   
    addProduct(state, data){
      state.cart.push(data);
    },

    removeProduct( state, id ){
      const idx = state.cart.findIndex(o => o.id === id);
      state.cart.splice(idx, 1);
    }
  },
  actions: {
    storeUser( { commit }, data  ){
      return new Promise( ( resolve ) => {
        setTimeout( () => {
          resolve()
            commit( 'storeUser', data );
        }, 3000 )
      } )
    }
  },
  modules: {
  }
})
