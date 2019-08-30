<template>
    <div id="samurai">
        <h2>Samurai</h2>
        <p>{{ shieldName }}is wering</p>
        <ul>
            <li v-for="(item, index) in shields" :key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script lang="ts" src="../service/SamuraiService.ts"></script>
