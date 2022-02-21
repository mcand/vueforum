import { createStore } from 'vuex'
import sourceData from '@/data'

export default createStore({
  state: {
    ...sourceData,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  },
  getters: {
    authUser: state => {
      const user = state.users.find(user => user.id === state.authId)
      if (!user) return null
      return {
        ...user,
        get postsCount () {
          return this.posts.length
        },
        get posts () {
          return Object.values(state.posts).filter(
            post => post.userId === user.id
          )
        },
        get treadsCount () {
          return this.threads.length
        },
        get threads () {
          return Object.values(state.threads).filter(
            post => post.userId === user.id
          )
        }
      }
    }
  },
  actions: {
    createPost (context, post) {
      post.id = 'ggqq' + Math.random()
      context.commit('setPost', { post }) // set the post
      context.commit('appendPostToThread', { postId: post.id, threadId: post.threadId }) // append post to thread
    }
  },
  mutations: {
    setPost (state, { post }) {
      state.posts.push(post)
    },
    appendPostToThread (state, { postId, threadId }) {
      const thread = state.threads.find(thread => thread.id === threadId)
      thread.posts.push(postId)
    }
  }
})
