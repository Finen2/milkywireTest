<template lang="html">
  <div class="">
    <b-card :title="data.data.media[0].description" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" class="mb-2">
      <b-card-text>
        {{data.description}}
      </b-card-text>
      <b-button @click="triggerModal" variant="primary">Show Post</b-button>
    </b-card>
  </div>
</template>

<script lang="ts" src="./SinglePost.ts"></script>
<style lang="sass" src="./SinglePost.sass"></style>
