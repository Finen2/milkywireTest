<template lang="html">
  <div class="">
    <ModalImpacter ref="modalImpacterComponent" :postId="post.id" :impacter="impacter" />
    <b-modal class="modalPost" ref="post-modal" hide-footer :title="impacter.name">
      <div class="flex-spaceEvenly modalPost__btns">
        <b-icon class="modalPost__btns__singleBtn" icon="arrow-left-short" variant="primary" font-scale="3" @click="previousPost"></b-icon>
        <b-icon class="modalPost__btns__singleBtn" icon="arrow-right-short" variant="primary" font-scale="3" @click="nextPost"></b-icon>
      </div>
      <b-img :src="image" fluid-grow ></b-img>
      <div class="d-block text-center">
        <h3>{{post.description}}</h3>
      </div>
      <div class="flex-default modalPost__btns">
        <b-icon icon="person-fill" class="modalPost__btns__singleBtn" font-scale="2" variant="dark" v-b-toggle.accordion-1 block></b-icon>
        <b-icon icon="pencil" class="modalPost__btns__singleBtn" font-scale="2" variant="dark" v-b-toggle.accordion-2 block></b-icon>
        <b-icon icon="trash" class="modalPost__btns__singleBtn" font-scale="2" variant="danger" v-b-toggle.accordion-3 block></b-icon>
      </div>

      <b-card no-body class="mb-1">
        <b-collapse id="accordion-1" accordion="my-accordion" >
          <b-card-body class="collapseCard">
            <div class="flex-spaceEvenly-center collapseCard__bio">
              <h4 class="collapseCard__bio__userName" @click="showChildModal">{{ impacter.name }}</h4>
              <b-img class="collapseCard__bio__profileImage" :src="impacter.profile_image" rounded="circle" :alt="impacter.name"></b-img>
            </div>
            <b-card-text>{{ impacter.bio }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-collapse id="accordion-2" label="Post Description" accordion="my-accordion" >
          <b-form class="formContainer" @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Post Description" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="editPost.description"
                required
                placeholder="Post Description"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Image Description" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="editPost.data.media[0].description"
                required
                placeholder="Image Description"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Image:" label-for="input-3">
              <b-form-file
                v-model="file"
                :state="Boolean(file)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                accept=".jpg, .png, .gif"
              ></b-form-file>
              <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
            </b-form-group>

            <b-button class="formContainer__btn" type="submit" variant="primary">Submit</b-button>
            <b-button class="formContainer__btn" type="reset" variant="danger">Reset</b-button>
          </b-form>
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
  </div>
</template>

<script lang="ts" src="./ModalPost.ts"></script>
<style lang="sass" src="./ModalPost.sass"></style>
