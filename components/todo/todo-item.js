
Vue.component('todo-item', {
    props: ['item'],
    template: '<p> {{item.id}} - {{item.text}} </p>'
})

