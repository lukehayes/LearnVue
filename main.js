
Vue.config.performance = true;
Vue.config.warnHandler = function(msg, vm, trace)
{
    console.debug("ERROR! See, warnHandler callback function.");
}

let app = new Vue({
    el: '#app',
    data: {
        text: 'Application Instance',
        users: null,
        show: true
    },

    methods: {
        request: function()
        {

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => this.users = json);
            //let request = new XMLHttpRequest();
            //request.open('https://jsonplaceholder.typicode.com/posts/1');
            //request.send();

            //console.debug(request);

        }
    },

    mounted: function()
    {
        console.log(this.request());
    }

});

