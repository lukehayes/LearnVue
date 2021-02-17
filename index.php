<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>App</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> 
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">

</head>
<body>

<h3>Users</h3>

<div id="app">
    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th v-if="show">Website</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="user in users">
  <button class="button" v-on:click="show = !show">
    Toggle
  </button>
                <td>{{ user.name }}</td>
                <td>{{ user.username }}</td>
                <transition name="fade">
                    <td v-if="show">{{ user.website }}</td>
                </transition>
                
            </tr>
        </tbody>
    </table>
    <ul>
    </ul>
</div>
    
<!-- <script charset="utf-8" src="basic/todo/todo.js" type="module"></script> -->
<script charset="utf-8" src="main.js"></script>
</body>
</html>
