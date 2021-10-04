import { mapGetters, mapMutations, mapActions } from 'vuex';
import { required, minValue, minLength, maxLength, numeric } from 'vuelidate/lib/validators';
import { Money } from 'v-money'

const validaValor = (value) => {
    const v = parseInt(value.toString().replace(/\D+/gi, '')) || 0;
    return ((v<=0) ? false : true);
};

export default ({
    components: {Money},

    computed: {
        ...mapGetters(['sub_view', 'obj'])
    },
    data:() => ({
        // obj: {
        //     nome: '',
        //     quantidade: 0,
        //     valor: 0,
        // },
        money: {
            decimal: ',',
            thousands: '.',
            prefix: 'R$ ',
            suffix: ' #',
            precision: 2,
            masked: false
        }
    }),
    validations: {
        obj: {
            nome: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(30)
            },
            quantidade: {
                required,
                numeric,
                minValue: minValue(1)
            },
            valor: {
                validaValor
            }
        }
    },
    mounted() {
        this.setSubview(this.$route.params.id>0? 'EDIÇÃO' : 'CADASTRO'),
        this.getProdutos(),
        this.getProdutoById(this.$route.params.id),
        this.$v.$reset() // forçando $dirty=false nos validadores
    },
    methods: {
        ...mapMutations(['setSubview']),
        ...mapActions(['getProdutos', 'getProdutoById', 'addProduto', 'updateProduto']),
        async salvar() {
            if (this.$v.$invalid) {
                return this.$v.$touch();
            }

            if(this.obj.id<=0) {
                await this.addProduto(this.obj);
                this.$router.push('/produto/lista');
            }else{
                await this.updateProduto(this.obj);
                this.$router.push('/produto/lista');
            }
        },
        numero(input) {
            this.obj.quantidade = parseInt(input.replace(/\D+/gi, '')) || 0;
        }
    }
});