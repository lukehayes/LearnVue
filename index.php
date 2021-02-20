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

<p>Hey</p>
<p>Boo</p>
<p>Shamalam</p>

<div id="app">
    <todo-item :style="{fontSize: postFontSize + 'em'}":item="{id:1, text:'Learn Vue'}"></todo-item>
    <todo-item :style="{fontSize: postFontSize + 'em'}":item="{id:2, text:'Read The Pragmatic Programmer'}"></todo-item>
    <todo-item :style="{fontSize: postFontSize + 'em'}":item="{id:3, text:'Build A Startup'}"></todo-item>
</div>

<script src="components/todo/todo-item.js"></script>
<script src="components/todo/todo-list.js"></script>
</body>
</html>
