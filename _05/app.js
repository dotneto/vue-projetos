new Vue({
    el: '#app',
    data: {
        aluno: {
            firstName: '',
            lastName: '',
            address: '',
            email: '',
            password: '',
            retypePassword: '',
            phone: ''
        },
        errors: []
    },
    methods: {
        checkStudent: function () {

            this.errors = [];

            if (this.aluno.firstName === '') {
                this.errors.push('Please, put your first name')
            }

            if (this.aluno.email === '') {
                this.errors.push('Please, put your email')
            }

            if (this.aluno.password === '') {
                this.errors.push('Please, put your password')
            } else {
                if (this.aluno.password !== this.aluno.retypePassword) {
                    this.errors.push('The passwords don\'t match');
                }
            }
        }
    }
});