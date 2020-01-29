<template lang="html">
  <div class="postsList">
    <ModalPost ref="modalComponent" />
    <div class="" v-for="post in posts">
      <SinglePost :data="post" :key="post.id"/>
    </div>
  </div>
</template>

<script lang="ts" src="./PostsList.ts"></script>
<style lang="sass" src="./PostsList.sass"></style>
