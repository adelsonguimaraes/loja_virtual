(function(t){function e(e){for(var o,i,s=e[0],u=e[1],c=e[2],l=0,v=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(v.length)v.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},n={app:0},a=[];function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"0924":function(t,e,r){"use strict";r("1eb8")},"1eb8":function(t,e,r){},3969:function(t,e,r){"use strict";r("eca1")},5541:function(t,e,r){"use strict";r("8c8c")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i=(r("034f"),r("2877")),s={},u=Object(i["a"])(s,n,a,!1,null,null,null),c=u.exports,d=r("8c4f"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box"},[r("Menu")],1)},v=[],m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",[t._v("LOJA VIRTUAL | ADMIN")]),r("div",{staticClass:"panel"},[t._m(0),r("div",{staticClass:"panel-body"},[r("ul",{staticClass:"menu"},[r("a",{attrs:{href:"#/produto/lista"}},[t._v("Produtos")]),r("li",{staticClass:"menu-desativado"},[t._v("Clientes")]),r("li",{staticClass:"menu-desativado"},[t._v("Fornecedores")]),r("li",{staticClass:"menu-desativado"},[t._v("Entregas")]),r("li",{staticClass:"menu-desativado"},[t._v("Caixa")]),r("li",{staticClass:"menu-desativado"},[t._v("Funcionários")]),r("li",{staticClass:"menu-desativado"},[t._v("Configurações")]),r("li",{staticClass:"menu-desativado"},[t._v("Sair")])])])])])},p=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"panel-header"},[r("h2",[t._v("Menu")])])}],f={name:"Menu"},b=f,_=(r("70a0"),Object(i["a"])(b,m,p,!1,null,"4c3a9b7c",null)),h=_.exports,g={name:"Home",components:{Menu:h}},j=g,$=Object(i["a"])(j,l,v,!1,null,null,null),w=$.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box"},[r("div",{staticClass:"header"},[r("a",{attrs:{href:"#/"}},[t._v("LOJA VIRTUAL")]),t._v(" | "),r("span",{staticClass:"title-view"},[t._v(t._s(t.title_view))]),t._v(" | "),r("span",{staticClass:"sub-view"},[t._v(t._s(t.sub_view))])]),r("div",{staticClass:"content"},[[r("router-view")]],2)])},x=[],C=r("5530"),P=r("2f62"),y={data:function(){return{title_view:"PRODUTO"}},computed:Object(C["a"])({},Object(P["c"])(["sub_view"]))},S=y,q=(r("0924"),Object(i["a"])(S,O,x,!1,null,"82f628d6",null)),I=q.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"panel"},[t._m(0),r("div",{staticClass:"panel-body"},[r("div",{staticClass:"tools"},[r("a",{staticClass:"btn",attrs:{href:"#/produto/cadastro"}},[t._v("Novo")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.filtro,expression:"filtro"}],attrs:{type:"text",name:"filter",placeholder:"Filtro.."},domProps:{value:t.filtro},on:{input:[function(e){e.target.composing||(t.filtro=e.target.value)},t.filtrar]}})]),r("table",[t._m(1),r("tbody",t._l(t.produtos,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.id))]),r("td",[t._v(t._s(e.nome))]),r("td",[t._v(t._s(e.quantidade))]),r("td",[t._v(t._s(t._f("moeda")(e.valor)))]),r("td",[r("a",{staticClass:"btn btn-table",attrs:{href:"#/produto/cadastro/"+e.id,title:"Editar registro"}},[t._v(" 🖋 ")]),r("a",{staticClass:"btn btn-table",attrs:{title:"Excluir registro"},on:{click:function(r){return t.remover(e.id)}}},[t._v(" 🗑 ")])])])})),0)])])]),r("modal",{attrs:{height:"auto",name:"aviso"}},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-title"},[r("b",[t._v("Atenção! Remover produto")])]),r("div",{staticClass:"modal-text"},[t._v("Deseja seguir com a remoção do produto "),r("b",[t._v(t._s(t.obj.nome))]),t._v("?")])]),r("div",{staticClass:"vue-dialog-buttons"},[r("button",{staticClass:"vue-dialog-button",staticStyle:{flex:"1"},attrs:{type:"button"},on:{click:function(e){return t.$modal.hide("aviso")}}},[t._v("Cancelar")]),r("button",{staticClass:"vue-dialog-button",staticStyle:{flex:"1"},attrs:{type:"button"},on:{click:t.confirmaRemover}},[t._v("Remover")])])])],1)},k=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"panel-header"},[r("h2",[t._v("Lista de Produto")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("td",[t._v("ID")]),r("td",[t._v("Nome")]),r("td",[t._v("Quantidade")]),r("td",[t._v("Preço")]),r("td")])])}],L={data:function(){return{filtro:"",title_view:"Lista"}},mounted:function(){this.getProdutos(),this.setSubview("LISTA")},computed:Object(C["a"])({},Object(P["c"])(["produtos","obj"])),methods:Object(C["a"])(Object(C["a"])(Object(C["a"])({},Object(P["b"])(["getProdutos","getProdutoById","removeProduto","filtrarProduto"])),Object(P["d"])(["setSubview"])),{},{remover:function(t){this.getProdutoById(t),this.$modal.show("aviso")},confirmaRemover:function(){this.removeProduto(this.obj.id),this.$modal.hide("aviso")},filtrar:function(){if(""===this.filtro)return this.getProdutos();this.filtrarProduto(this.filtro)}})},E=L,A=(r("3969"),Object(i["a"])(E,R,k,!1,null,"4000e5a8",null)),N=A.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"panel"},[r("div",{staticClass:"panel-header"},[r("h2",[t._v(t._s(t._f("normal")(t.sub_view))+" de Produto")])]),r("div",{staticClass:"panel-body"},[r("form",[r("div",{staticClass:"ginput"},[r("label",{attrs:{for:"nome"}},[t._v("Nome")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.obj.nome.$model,expression:"$v.obj.nome.$model",modifiers:{trim:!0}}],class:{"input-erro":t.$v.obj.nome.$error},attrs:{type:"text",name:"nome",placeholder:"Insira o nome do produto"},domProps:{value:t.$v.obj.nome.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.obj.nome,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.obj.nome.$error?r("div",{staticClass:"input-erro-detalhe"},[t.$v.obj.nome.required?t._e():r("span",[t._v("O nome é obrigatório")]),t.$v.obj.nome.minLength?t._e():r("span",[t._v("O nome precisa ter no mínimo "+t._s(t.$v.obj.nome.$params.minLength.min)+" dígitos")]),t.$v.obj.nome.maxLength?t._e():r("span",[t._v("O nome pode ter no máximo "+t._s(t.$v.obj.nome.$params.maxLength.max)+" dígitos")])]):t._e()]),r("div",{staticClass:"ginput"},[r("label",{attrs:{for:"quantidade"}},[t._v("Quantidade")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.obj.quantidade.$model,expression:"$v.obj.quantidade.$model",modifiers:{trim:!0}}],staticClass:"input",class:{"input-erro":t.$v.obj.quantidade.$error},attrs:{type:"number",name:"quantidade",placeholder:"Insira a quantidade do produto"},domProps:{value:t.$v.obj.quantidade.$model},on:{input:[function(e){e.target.composing||t.$set(t.$v.obj.quantidade,"$model",e.target.value.trim())},function(e){return t.numero(t.$v.obj.quantidade.$model)}],blur:function(e){return t.$forceUpdate()}}}),t.$v.obj.quantidade.$error?r("div",{staticClass:"input-erro-detalhe"},[t.$v.obj.quantidade.required?t._e():r("span",[t._v("A quantidade é obrigatória")]),t.$v.obj.quantidade.minValue?t._e():r("span",[t._v("A quantidade mínima aceita é "+t._s(t.$v.obj.quantidade.$params.minValue.min))]),t.$v.obj.quantidade.numeric?t._e():r("span",[t._v("A quantidade precisa ser numérica")])]):t._e()]),r("div",{staticClass:"ginput"},[r("label",{attrs:{for:"valor"}},[t._v("Valor")]),r("money",t._b({staticClass:"input",class:{"input-erro":t.$v.obj.valor.$error},attrs:{name:"valor",placeholder:"Insira o valor do produto"},model:{value:t.$v.obj.valor.$model,callback:function(e){t.$set(t.$v.obj.valor,"$model",e)},expression:"$v.obj.valor.$model"}},"money",t.money,!1)),t.$v.obj.valor.$error?r("div",{staticClass:"input-erro-detalhe"},[t.$v.obj.valor.validaValor?t._e():r("span",[t._v("O valor não pode estar zerado")])]):t._e()],1),r("div",{staticClass:"gbutton"},[r("a",{staticClass:"btn",attrs:{href:"#/produto/lista"}},[t._v("Voltar")]),r("button",{attrs:{type:"button"},on:{click:function(e){return t.salvar(t.obj)}}},[t._v("Salvar")])])])])])])},V=[],D=r("1da1"),J=(r("96cf"),r("ac1f"),r("5319"),r("d3b7"),r("25f0"),r("b5ae")),T=r("716b"),B=r.n(T),U=function(t){var e=parseInt(t.toString().replace(/\D+/gi,""))||0;return!(e<=0)},F={components:{Money:T["Money"]},computed:Object(C["a"])({},Object(P["c"])(["sub_view","obj"])),data:function(){return{money:{decimal:",",thousands:".",prefix:"R$ ",suffix:" #",precision:2,masked:!1}}},validations:{obj:{nome:{required:J["required"],minLength:Object(J["minLength"])(3),maxLength:Object(J["maxLength"])(30)},quantidade:{required:J["required"],numeric:J["numeric"],minValue:Object(J["minValue"])(1)},valor:{validaValor:U}}},mounted:function(){this.setSubview(this.$route.params.id>0?"EDIÇÃO":"CADASTRO"),this.getProdutos(),this.getProdutoById(this.$route.params.id),this.$v.$reset()},methods:Object(C["a"])(Object(C["a"])(Object(C["a"])({},Object(P["d"])(["setSubview"])),Object(P["b"])(["getProdutos","getProdutoById","addProduto","updateProduto"])),{},{salvar:function(){var t=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$v.$invalid){e.next=2;break}return e.abrupt("return",t.$v.$touch());case 2:if(!(t.obj.id<=0)){e.next=8;break}return e.next=5,t.addProduto(t.obj);case 5:t.$router.push("/produto/lista"),e.next=11;break;case 8:return e.next=10,t.updateProduto(t.obj);case 10:t.$router.push("/produto/lista");case 11:case"end":return e.stop()}}),e)})))()},numero:function(t){this.obj.quantidade=parseInt(t.replace(/\D+/gi,""))||0}})},H=F,Q=(r("5541"),Object(i["a"])(H,M,V,!1,null,"f838b568",null)),z=Q.exports;o["a"].use(d["a"]);var G=[{path:"/",name:"Home",component:w},{path:"*",name:"404",component:w},{path:"/produto",name:"Produto",component:I,children:[{path:"lista",name:"produto.lista",component:N},{path:"cadastro/:id?",name:"produto.cadastro",component:z}]}],K=new d["a"]({routes:G}),W=K,X=(r("7db0"),r("4de4"),r("bc3a")),Y=r.n(X),Z={produtos:[],obj:{id:0,nome:"",quantidade:0,valor:0}},tt={produtos:function(t){return t.produtos},obj:function(t){return t.obj}},et={setProdutos:function(t,e){return t.produtos=e},setProduto:function(t,e){return t.obj=void 0!==e?e:{id:0,nome:"",quantidade:0,valor:0}},addProduto:function(t,e){return t.produtos.push(e)}},rt={getProdutos:function(t){return Object(D["a"])(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,o=localStorage.getItem("produtos"),null!==o){e.next=8;break}return e.next=5,Y.a.get("produtos.json").then((function(t){return localStorage.setItem("produtos",JSON.stringify(t.data)),t.data})).catch((function(t){alert(t)}));case 5:o=e.sent,e.next=9;break;case 8:o=JSON.parse(o);case 9:r("setProdutos",o);case 10:case"end":return e.stop()}}),e)})))()},getProdutoById:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){var o,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,Z.produtos.find((function(t){return parseInt(t.id)===parseInt(e)}));case 3:n=r.sent,o("setProduto",n);case 5:case"end":return r.stop()}}),r)})))()},removeProduto:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){var o,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,Z.produtos.filter((function(t){return parseInt(t.id)!==parseInt(e)}));case 3:n=r.sent,localStorage.setItem("produtos",JSON.stringify(n)),o("setProdutos",n);case 6:case"end":return r.stop()}}),r)})))()},addProduto:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:o=t.commit,e.id=Date.now(),o("addProduto",e),localStorage.setItem("produtos",JSON.stringify(Z.produtos));case 4:case"end":return r.stop()}}),r)})))()},updateProduto:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){var o,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,Z.produtos.filter((function(t){return t.id!==e.id?t:e}));case 3:n=r.sent,localStorage.setItem("produtos",JSON.stringify(Z.produtos)),o("setProdutos",n);case 6:case"end":return r.stop()}}),r)})))()},filtrarProduto:function(t,e){return Object(D["a"])(regeneratorRuntime.mark((function r(){var o,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=t.commit,r.next=3,Z.produtos.filter((function(t){return t.nome.toString().toLowerCase().indexOf(e.toString().toLowerCase())>=0}));case 3:n=r.sent,o("setProdutos",n);case 5:case"end":return r.stop()}}),r)})))()}},ot={state:Z,getters:tt,mutations:et,actions:rt};o["a"].use(P["a"]);var nt=new P["a"].Store({state:{sub_view:""},getters:{sub_view:function(t){return t.sub_view}},mutations:{setSubview:function(t,e){return t.sub_view=e}},actions:{},modules:{produtos:ot}}),at=r("1dce"),it=r.n(at),st=r("1881"),ut=r.n(st);o["a"].use(it.a),o["a"].use(B.a,{precision:4}),o["a"].use(ut.a),o["a"].config.productionTip=!1,new o["a"]({router:W,store:nt,render:function(t){return t(c)}}).$mount("#app")},"70a0":function(t,e,r){"use strict";r("fe5f")},"85ec":function(t,e,r){},"8c8c":function(t,e,r){},eca1:function(t,e,r){},fe5f:function(t,e,r){}});
//# sourceMappingURL=app.ff770a0f.js.map