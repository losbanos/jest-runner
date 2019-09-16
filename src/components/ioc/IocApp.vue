<template>
    <div id="ioc">
        <ninja></ninja>
        <p>{{ message }}</p>
        <samurai :shields="shields"></samurai>
        <ul id="users">

        </ul>
    </div>
</template>

<script lang="ts" src="./service/IocAppService.ts"></script>
