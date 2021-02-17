<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>App</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> 
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
</head>
<body>

<div id="app">
    <div class="post">
        <h4 class="title" v-for="post in posts">{{ post.title }}</h4>
    </div>
</div>
    
<!-- <script charset="utf-8" src="basic/todo/todo.js" type="module"></script> -->
<script charset="utf-8" src="main.js"></script>
</body>
</html>
