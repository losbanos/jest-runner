<template>
    <div id="ioc">
        <warrior
            :name="'ninja'"
            :shields="ninjaShields"
            :weapons="ninjaWeapons"></warrior>
        <p>{{ message }}</p>
        <warrior
            :name="'samurai'"
            :shields="samuraiShields"
            :weapons="samuraiWeapons"></warrior>
        <ul id="users">

        </ul>
    </div>
</template>

<script lang="ts" src="./service/IocAppService.ts"></script>
