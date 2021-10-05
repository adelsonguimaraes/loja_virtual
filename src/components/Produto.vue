<template>
    <div class="box">
        <div class="header">
            <a href="#/">LOJA VIRTUAL</a> | <span class="title-view">{{ title_view }}</span> | <span class="sub-view">{{ sub_view }}</span>
        </div>
        <div class="content">
            <template>
                <router-view></router-view>
            </template>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                title_view: 'PRODUTO'
            }
        },
        computed: {
            ...mapGetters(['sub_view'])
        }
    };
</script>

<style scoped src="@/css/produto/produto.css"></style>
