<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> 
</head>
<body>

<div id="app">
<input type="text" v-model="n">
{{n}}
    <ul>
        <todo-item v-for="todo in todos" v-bind:todo="todo">{{todo}}</todo-item>
    </ul>
</div>

<script charset="utf-8" src="basic/todo.js"></script>
<!--<script charset="utf-8" src="main.js"></script> -->
</body>
</html>
