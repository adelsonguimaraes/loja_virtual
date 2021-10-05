import { mapGetters, mapActions, mapMutations } from 'vuex';

export default ({
    data:() => ({
        filtro: '',
        title_view: 'Lista',
    }),
    mounted() {
        this.getProdutos(),
        this.setSubview('LISTA')
    },
    computed: {
        ...mapGetters(['produtos', 'obj'])
    },
    methods: {
        ...mapActions(['getProdutos', 'getProdutoById', 'removeProduto', 'filtrarProduto']),
        ...mapMutations(['setSubview']),
        remover(id) {
            this.getProdutoById(id)
            this.$modal.show('aviso')
        },
        confirmaRemover() {
            this.removeProduto(this.obj.id)
            this.$modal.hide('aviso')
        },
        filtrar() {
            if (this.filtro==='') return this.getProdutos()
            this.filtrarProduto(this.filtro)
        }
    }
});