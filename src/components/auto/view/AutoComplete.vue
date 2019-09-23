<template>
    <div id="auto_complete">
        <label for="inp_search">검색</label>
        <input type="search" id="inp_search" ref="inp_search" placeholder="검색하고 싶은 사용자 아이디 입력" />
        <ul id="result_list" class="result-list">
            <li v-for="(result, index) in results" :key="Math.random() * index">
                <h3>{{result.name}}</h3>
                <span><strong>Height</strong>{{result.height}}</span>
                <span><strong></strong></span>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" src="./AutoComplete.ts"></script>
<style scoped>
    .result-list li {
        border-bottom: 1px solid palevioletred;
        padding: 5px 10px;
    }
    .result-list li h3{
        display: inline-block;
    }
</style>
