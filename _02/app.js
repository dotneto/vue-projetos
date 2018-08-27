new Vue({
    el: '#app',
    data: {
        flag1: false,
        flag2: false,
        flag3: false

    },
    mounted: function () {
    },
    methods: {
        mouseOver: function (index) {

            if(index == 1){
                this.flag1 = true;
            }

            if(index == 2){
                this.flag2 = true;
            }

            if(index == 3){
                this.flag3 = true;
            }
        },
        mouseLeave: function (index) {

            if(index == 1){
                this.flag1 = false;
            }

            if(index == 2){
                this.flag2 = false;
            }

            if(index == 3){
                this.flag3 = false;
            }
        }
    }

});