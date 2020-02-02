<template lang="html">
  <div class="">
    <b-modal ref="impacterModal" hide-footer title="Impacter Info">
      <b-icon class="iconBtn" icon="arrow-left-short" variant="dark" font-scale="2" @click="returnToPostModal"></b-icon>
      <div class="d-block text-center profileInfo">
        <b-card no-body class="mb-1">
          <b-card-body class="card">
            <div class="flex-spaceEvenly-center card__bio">
              <h4 class="card__bio__userName">{{ impacter.name }}</h4>
              <b-img class="card__bio__profileImage" :src="impacter.profile_image" rounded="circle" :alt="impacter.name"></b-img>
            </div>
            <b-card-text>{{ impacter.bio }}</b-card-text>
          </b-card-body>
        </b-card>
      </div>
      <h5>Impacters posts:</h5>
      <div class="d-block text-center postsList" v-for="post in impacterPosts" :key="post.id" >
        <b-card :title="post.data.media[0].description" :img-src="post.data.media[0].image" img-alt="Image" img-top tag="article" class="mb-2">
          <b-card-text>
            {{ post.description }}
          </b-card-text>
          <b-button variant="primary" @click="showModal(post.id)">Display post</b-button>
        </b-card>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts" src="./ModalImpacter.ts"></script>
<style lang="sass" src="./ModalImpacter.sass"></style>
