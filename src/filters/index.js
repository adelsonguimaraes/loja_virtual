import Vue from 'vue'

Vue.filter('moeda', (input) => {
    input = new Intl.NumberFormat(['pt-BR'], { style: 'currency', currency: 'BRL' }).format(input);
    return input;
});

Vue.filter('normal', (input) => {
    input = input[0]+input.substring(1).toLowerCase();
    return input;
});