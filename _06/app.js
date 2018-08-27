new Vue({
    el: '#app',
    data: {
        employees: [],
        actual: {},
        actualPos: {pos: 0, prev: false, next: true}
    },
    mounted: function () {
        emp1 = {
            id: 1,
            name: "Name 1",
            address: "Address 1",
            number: "1a2b3c"
        };
        emp2 = {
            id: 2,
            name: "Name 2",
            address: "Address 2",
            number: "1a2b3c"
        };
        emp3 = {
            id: 3,
            name: "Name 3",
            address: "Address 3",
            number: "1a2b3c"
        };

        this.employees.push(emp1);
        this.employees.push(emp2);
        this.employees.push(emp3);

        this.actual = emp1;
        this.actualPos.pos = this.employees.indexOf(this.actual);
    },
    methods: {
        nextEmp: function () {

            this.actualPos.pos++;
            let pos = this.actualPos.pos;

            this.actual = this.employees[pos];

            if (pos + 2 > this.employees.length) {
                this.actualPos.next = false;
            } else {
                this.actualPos.next = true;
                this.actualPos.prev = true;
            }

        },
        prevEmp: function () {

            this.actualPos.pos--;
            let pos = this.actualPos.pos;

            this.actual = this.employees[pos];

            if (pos === 0) {
                this.actualPos.prev = false;
            } else {
                this.actualPos.next = true;
                this.actualPos.prev = true;
            }


        },
        first: function () {
            this.actualPos = {pos: 0, prev: false, next: true};
            this.actual = this.employees[this.actualPos.pos];
        },
        last: function () {
            this.actualPos = {pos: this.employees.length-1, prev: true, next: false}
            this.actual = this.employees[this.employees.length-1];
        }
    }
});