console.log('Your starting point. Enjoy the ride!');
new Vue({
  el: '#app',
  data: {
    submissions: window.Seed.submissions
  },
  methods: {
    voteFor: function(submission) {
      ++submission.votes;
    }
  }
});
