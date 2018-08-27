new Vue({
    el: '#app',
    data: {
        valor: '',
        valores: []
    },
    watch: {
        valor: function (newNumber) {
            for(let i = 1; i <= 10; i++){
                this.valores[i] = newNumber * i;
            }
        }
    }
});