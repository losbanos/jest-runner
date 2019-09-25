<template>
    <div id="auto_complete">
        <label for="inp_search">검색</label>
        <input type="search" id="inp_search" ref="inp_search" placeholder="검색하고 싶은 사용자 아이디 입력" />
        <ul id="result_list" class="result-list">
            <li v-for="(result, index) in results" :key="Math.random() * index">
                <h3>Name : {{result.name}}</h3>
                <span>Height : {{result.height}}</span>
                <span>Gender : {{result.gender}}</span>
            </li>
        </ul>
        <a v-if="isProgress" class="button is-loading" id="loading_bar">Loading</a>
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
        margin-right: 20px;
        font-weight: bold;
    }
    .button.is-loading{
        border: 0 none;
    }
</style>
