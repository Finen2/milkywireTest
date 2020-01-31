<template lang="html">
  <div class="">
    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>{{post.description}}</h3>
      </div>
      <b-button class="mt-1" variant="outline-dark" block @click="previousPost">Previous Post</b-button>
      <b-button class="mt-1" variant="outline-warning" block @click="nextPost">Next Post</b-button>
      <b-button class="mt-3" variant="outline-dark" block @click="hideModal">Close Me</b-button>
      <b-button class="mt-3" variant="outline-warning" block @click="erasePost(post.id)">Edit</b-button>
      <b-button class="mt-3" variant="outline-danger" block @click="erasePost(post.id)">Erase Post</b-button>
    </b-modal>
  </div>
</template>

<script lang="ts" src="./ModalPost.ts"></script>
<style lang="sass" src="./ModalPost.sass"></style>
