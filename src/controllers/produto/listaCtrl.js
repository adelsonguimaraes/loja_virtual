import { mapGetters, mapActions, mapMutations } from 'vuex';

export default ({
    data:() => ({
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
        ...mapActions(['getProdutos', 'getProdutoById', 'removeProduto']),
        ...mapMutations(['setSubview']),
        remover(id) {
            this.getProdutoById(id)
            this.$modal.show('aviso')
        },
        confirmaRemover() {
            this.removeProduto(this.obj.id)
            this.$modal.hide('aviso')
        }
    }
});