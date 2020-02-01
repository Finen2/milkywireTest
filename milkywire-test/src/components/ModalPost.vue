<template lang="html">
  <b-modal class="modalPost" ref="post-modal" hide-footer :title="impacter.name">
    <div class="flex-spaceEvenly modalPost__btns">
      <b-icon class="modalPost__btns__singleBtn" icon="arrow-left-short" variant="primary" font-scale="3" @click="previousPost"></b-icon>
      <b-icon class="modalPost__btns__singleBtn" icon="arrow-right-short" variant="primary" font-scale="3" @click="nextPost"></b-icon>
    </div>
    <b-img :src="image" fluid-grow :alt="imageDescription"></b-img>
    <div class="d-block text-center">
      <h3>{{post.description}}</h3>
    </div>
    <div class="flex-default modalPost__btns">
      <b-icon icon="person-fill" class="modalPost__btns__singleBtn" font-scale="2" variant="dark" v-b-toggle.accordion-1 block></b-icon>
      <b-icon icon="pencil" class="modalPost__btns__singleBtn" font-scale="2" variant="dark" v-b-toggle.accordion-2 block></b-icon>
      <b-icon icon="trash" class="modalPost__btns__singleBtn" font-scale="2" variant="danger" v-b-toggle.accordion-3 block>Erase Post</b-icon>
    </div>

    <b-card no-body class="mb-1">
      <b-collapse id="accordion-1" accordion="my-accordion" >
        <b-card-body class="collapseCard">
          <div class="flex-spaceEvenly-center collapseCard__bio">
            <h4 class="collapseCard__bio__userName">{{ impacter.name }}</h4>
            <b-img v-bind="mainProps" :src="impacter.profile_image" rounded="circle" :alt="impacter.name"></b-img>
          </div>
          <b-card-text>{{ impacter.bio }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-collapse id="accordion-2" accordion="my-accordion" >
        <b-card-body class="collapseCard">
          <b-card-text>Edit Post</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-collapse id="accordion-3" accordion="my-accordion" >
        <b-card-body class="flex-center collapseCard">
          <b-card-text>Erase this Post</b-card-text>
          <div class="flex-spaceEvenly collapseCard__eraseButtons">
            <b-button variant="success" v-b-toggle.accordion-3>Keep</b-button>
            <b-button variant="danger" @click="erasePost(post.id)">Erase</b-button>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>

  </b-modal>
</template>

<script lang="ts" src="./ModalPost.ts"></script>
<style lang="sass" src="./ModalPost.sass"></style>
