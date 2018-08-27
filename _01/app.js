new Vue({
    el: '#app',
    data: {
        todos: [],
        todo: {
            description: '',
            active: true
        }
    },
    methods: {
        addTodo() {

            if (this.todo.description === '') {
                alert('Coloque algo na descrição')
            } else {
                let td = {description: this.todo.description, active: this.todo.active};
                this.todos.push(td);
                this.todo.description = '';
            }
        },
        completar(index){
            alert('Você completou o todo ' + this.todos[index].description);
            this.todos[index].active = false;

            let now = new Date();

            this.todos[index].date = `${now.getHours()} : ${now.getMinutes()}`;
            console.log(this.todos[index]);
        }
    }
});