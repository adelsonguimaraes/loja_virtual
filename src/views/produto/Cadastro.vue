<template>
    <div>
        <div class="panel">
            <div class="panel-header">
                <h2>{{sub_view | normal}} de Produto</h2>
            </div>
            <div class="panel-body">
                <form>
                    <div class="ginput">
                        <label for="nome">Nome</label>
                        <input type="text" name="nome" v-model.trim="$v.obj.nome.$model" :class="{'input-erro':$v.obj.nome.$error}" placeholder="Insira o nome do produto">
                        <div class="input-erro-detalhe" v-if="$v.obj.nome.$error">
                            <span v-if="!$v.obj.nome.required">O nome é obrigatório</span>
                            <span v-if="!$v.obj.nome.minLength">O nome precisa ter no mínimo {{$v.obj.nome.$params.minLength.min}} dígitos</span>
                            <span v-if="!$v.obj.nome.maxLength">O nome pode ter no máximo {{$v.obj.nome.$params.maxLength.max}} dígitos</span>
                        </div>
                    </div>
                    <div class="ginput">
                        <label for="quantidade">Quantidade</label>
                        <input class="input" type="number" name="quantidade" v-model.trim="$v.obj.quantidade.$model" @input="numero($v.obj.quantidade.$model)" :class="{'input-erro':$v.obj.quantidade.$error}" placeholder="Insira a quantidade do produto">
                        <div class="input-erro-detalhe" v-if="$v.obj.quantidade.$error">
                            <span v-if="!$v.obj.quantidade.required">A quantidade é obrigatória</span>
                            <span v-if="!$v.obj.quantidade.minValue">A quantidade mínima aceita é {{$v.obj.quantidade.$params.minValue.min}}</span>
                            <span v-if="!$v.obj.quantidade.numeric">A quantidade precisa ser numérica</span>
                        </div>
                    </div>
                    <div class="ginput">
                        <label for="valor">Valor</label>
                        <!-- <input type="text" name="valor" v-model.trim="$valor" v-money="money" placeholder="Insira a quantidade do produto"> -->
                        <money class="input" v-model.lazy="$v.obj.valor.$model" name="valor" v-bind="money" :class="{'input-erro':$v.obj.valor.$error}" placeholder="Insira o valor do produto"></money>
                        <div class="input-erro-detalhe" v-if="$v.obj.valor.$error">
                            <span v-if="!$v.obj.valor.validaValor">O valor não pode estar zerado</span>
                        </div>
                    </div>
                    <div class="gbutton">
                        <a href="#/produto/lista" class="btn">Voltar</a>
                        <button type="button" @click="salvar(obj)">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script src="@/controllers/produto/cadastroCtrl.js"></script>

<style scoped src="@/css/produto/cadastro.css"></style>
