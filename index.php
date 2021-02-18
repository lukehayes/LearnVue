<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>App</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> 
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
</head>
<body>

<h3>Vue Todo App</h3>

<div id="app">
    <p v-for="todo in todos">{{ todo.item }}</p>
</div>

<script src="components/todo/todo-list.js"></script>
</body>
</html>
