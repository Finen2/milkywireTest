<template lang="html">
  <div class="">
    <b-modal ref="impacterModal" hide-footer title="Impacter Info">
      <b-icon class="iconBtn" icon="arrow-left-short" variant="dark" font-scale="2" @click="returnToPostModal"></b-icon>
      <div class="d-block text-center profileInfo">
        {{ impacter.name }}
        {{ impacter.bio }}
        {{ impacter.profile_image }}
      </div>
      <div class="d-block text-center postsList" v-for="post in impacterPosts" :key="post.id" >
        <SinglePost :data="post" />
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts" src="./ModalImpacter.ts"></script>
<style lang="sass" src="./ModalImpacter.sass"></style>
