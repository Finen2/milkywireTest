<template lang="html">
  <div class="postsList">
    <ModalPost ref="modalComponent" :allPosts="posts" />
    <button @click="prevPage">Previous</button>
    <button @click="nextPage">Next</button>
    <div class="flex-spaceEvenly postsList__container">
      <div class="" v-for="post in posts" :key="post.id" >
        <SinglePost :data="post"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./PostsList.ts"></script>
<style lang="sass" src="./PostsList.sass"></style>
