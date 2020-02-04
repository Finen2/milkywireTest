<template lang="html">
  <div class="">
    <b-card :title="data.data.media[0].description" :img-src="image" img-alt="Image" img-top tag="article" class="mb-2">
      <b-card-text>
        {{data.description}}
      </b-card-text>
      <b-button @click="triggerModal" variant="primary">Show Post</b-button>
    </b-card>
  </div>
</template>

<script lang="ts" src="./SinglePost.ts"></script>
<style lang="sass" src="./SinglePost.sass"></style>
