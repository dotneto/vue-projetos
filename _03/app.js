new Vue({
    el: '#app',
    data: {
        color: '',
        css: {
            backgroundColor:  'gray'
        }
    },
    computed: {
        computedColor: function () {
            return this.color;
        }
    },
    methods: {
        changeColor: function () {
            console.log(this.color);
            this.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            console.log(this.color);
        }
    }
});