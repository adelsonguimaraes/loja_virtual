<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  background-color: #3C3C3C;
}

#app {
  width: 100%;
  height: 100%;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.box {
    width: 100%;
    height: 100%;
}

.content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


table {
    width: 100%;
}
thead {
    font-weight: 600;
    font-size: 18px;
}
thead td {
    padding: 5px;
}
td {
    border: solid;
    border-width: .5px;
}
button, .btn {
    height: 40px;
    padding: 5px 15px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background-color: #d9d2d2;
    margin: 2px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-weight: 600;
    box-shadow: 1.2px 2.2px 3px -0.8px rgba(14, 6, 6, 0.445);
}
button:hover, .btn:hover {
    background-color: #b3b3b3;
}
.btn-table {
    font-size: 22px;
    height: 30px;
    width: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 5px 2px;
    /* padding: 2px; */
}
.btn-success {
    background-color: cadetblue;
}
.btn-error {
    background-color: brown;
}
.panel {
    width: 700px;
    background-color: whitesmoke;
    border-radius: 3px;
    box-shadow: 0px 13px 25px -2px rgba(0, 0, 0, 0.62);
}
.panel .panel-header {
    width: 100%;
    padding: 5px;
}
.panel .panel-body {
    width: inherit;
    /* background-color: whitesmoke; */
    padding: 20px;
}
.tools{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2px;
}
input[type=text], .input {
    height: 30px;
    width: 100%;
    padding: 10px;
    margin: 2px;
    border-radius: 5px;
}
.input-erro {
    border: 3px solid brown;
    outline: none;
}
.input-erro-detalhe{
    color: brown;
    padding: 2px 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.input-erro-detalhe span {
    display: block;
}
label {
    font-weight: 600;
    margin: 0px 5px;
}
.ginput {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 5px;
}
.gbutton {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 5px 0;
}
.vm--modal {
    height: fit-content !important;
}
.modal-content {
    padding: 10px;
}
.modal-title {
    font-size: 20px;
    margin: 5px;
}
</style>
