<template>
  <div class="content">
      <h1>LOJA VIRTUAL | ADMIN</h1>
      <div class="panel">
        <div class="panel-header">
          <h2>Menu</h2>
        </div>
        <div class="panel-body">
          <ul class="menu">
            <a :href="'#/produto/lista'">Produtos</a>
            <li class="menu-desativado">Clientes</li>
            <li class="menu-desativado">Fornecedores</li>
            <li class="menu-desativado">Entregas</li>
            <li class="menu-desativado">Caixa</li>
            <li class="menu-desativado">Funcionários</li>
            <li class="menu-desativado">Configurações</li>
            <li class="menu-desativado">Sair</li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #fff;
}
.menu {
  width: 100%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.menu li, a {
  list-style: none;
  height: 120px;
  width: 120px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
  cursor: pointer;
  box-shadow: 1.2px 2.2px 3px -0.8px rgba(14, 6, 6, 0.445);
  font-weight: 600;
  text-decoration: none;
  color: #2c3e50;
}
.menu li:hover, a:hover {
  box-shadow: 1.2px 2.2px 3px 0px rgba(14, 6, 6, 0.445);
}
.menu-desativado {
  background-color: rgb(234, 234, 234);
  cursor: not-allowed !important;
}
</style>
