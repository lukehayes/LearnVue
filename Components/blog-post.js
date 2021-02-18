
Vue.component('blog-content', {

    props: ['content'],

    data: function()
    {
        return {
        }
    },

    template: '<p>This is the blog content</p>'

})

Vue.component('blog-post', {

    props: ['title'],

    data: function()
    {
        return {
            count: 0
        }
    },

    template: '<h3> <blog-content></blog-content>{{ title }}, <button v-on:click="count++"> {{ count }} </button></h3>'

})
