const UpvoteApp = {
  data() {
    return {
      submissions: window.Seed.submissions
    }
  }
}

Vue.createApp(UpvoteApp).mount('#app');
