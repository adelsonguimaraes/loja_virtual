<template>
    <div>
        <div class="panel">
            <div class="panel-header">
                <h2>Lista de Produto</h2>
            </div>
            <div class="panel-body">
                <div class="tools">
                    <a class="btn" href="#/produto/cadastro">Novo</a>
                    <input type="text" name="filter" placeholder="Filtro.." v-model="filtro" @input="filtrar">
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Nome</td>
                            <td>Quantidade</td>
                            <td>Preço</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in produtos" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.nome}}</td>
                            <td>{{item.quantidade}}</td>
                            <td>{{item.valor | moeda}}</td>
                            <td>
                                <a :href="'#/produto/cadastro/'+item.id" class="btn btn-table" title="Editar registro"> 🖋 </a>
                                <a class="btn btn-table" title="Excluir registro" @click="remover(item.id)"> 🗑 </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <modal height="auto" name="aviso">
            <div class="modal-content">
                <div class="modal-title"><b>Atenção! Remover produto</b></div> 
                <div class="modal-text">Deseja seguir com a remoção do produto <b>{{obj.nome}}</b>?</div>
            </div> 
            <div class="vue-dialog-buttons">
                <button type="button" class="vue-dialog-button" style="flex: 1;" @click="$modal.hide('aviso')">Cancelar</button>
                <button type="button" class="vue-dialog-button" style="flex: 1;" @click="confirmaRemover">Remover</button>
            </div>
        </modal>
    </div>
</template>

<script src="@/controllers/produto/listaCtrl.js"></script>

<style scoped src="@/css/produto/cadastro.css">
    
</style>
