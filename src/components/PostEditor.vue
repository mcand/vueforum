<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea v-model="text" name="" id="" cols="30" rows="10" class="form-input"/>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const post = {
        text: this.text,
        publishedAt: Math.floor(Date.now()) / 1000,
        userId: 'FsCDAk9w8NeXEceLV87arpsXjnQ2'
      }
      this.$emit('save', { post })
      // this.posts.push(post)
      // this.thread.posts.push(postId)

      this.text = ''
    }
  }
}
</script>

<style scoped>

</style>
