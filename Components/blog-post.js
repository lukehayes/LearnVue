
Vue.component('blog-post', {

    props: ['title'],

    data: function()
    {
        return {
        }
    },

    template: '<h3>{{ title }}</h3>'

})

let vm = new Vue({
    el : "#blog-posts"
});
