<template>
    <div :id="name">
        <h3>Name: {{name}}</h3>
        <p>{{name}} is wearing
            <span v-for="(shield, index) in shields" :key="index">{{shield.name}},
            </span>
        </p>
        <p>
            <strong>{{name}}</strong> has
            <span v-for="(weapon, index) in weapons" :key="index">
                {{weapon.name}}
            </span>
        </p>
    </div>
</template>

<script lang="ts" src="../service/WarriorService.ts"></script>
