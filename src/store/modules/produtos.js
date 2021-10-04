import axios from 'axios'

const state = {
    produtos: [],
    obj: {id:0, nome:'', quantidade:0, valor:0}
};
  
const getters = {
    produtos: (state) => {
      return state.produtos
    },
    obj: (state) => state.obj
};

const mutations = {
    setProdutos: (state, lista) => state.produtos = lista,
    setProduto: (state, produto) => state.obj = (produto!==undefined) ? produto : {id:0, nome:'', quantidade:0, valor:0},
    addProduto: (state, produto) => state.produtos.push(produto)
};

const actions = {
    async getProdutos({ commit }) {
        let response = localStorage.getItem('produtos');
        
        if (response === null) {
            
            response = await axios.get('produtos.json')
            .then((json) => {
                localStorage.setItem('produtos', JSON.stringify(json.data));
                return json.data;
            }).catch((err) =>{
                alert(err);
            });

        }else{
            response = JSON.parse(response);
        }

        commit('setProdutos', response);
    },
    async getProdutoById({ commit }, id) {
        const produto = await state.produtos.find((p)=> parseInt(p.id) === parseInt(id));
        commit('setProduto', produto);
    },
    async removeProduto({ commit }, id) {
        const produtos = await state.produtos.filter((p)=> parseInt(p.id) !== parseInt(id));
        localStorage.setItem('produtos', JSON.stringify(produtos));
        commit('setProdutos', produtos);
    },
    async addProduto({ commit }, obj) {
        obj.id = Date.now();
        commit('addProduto', obj);
        localStorage.setItem('produtos', JSON.stringify(state.produtos));
    },
    async updateProduto({ commit }, obj) {
        const produtos = await state.produtos.filter((p) => p.id!==obj.id ? p : obj)
        localStorage.setItem('produtos', JSON.stringify(state.produtos));
        commit('setProdutos', produtos);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};