export const SubmissionContent = {
  template: `
    <div class="content">
      <p>
        <strong>
          <a :href="submission.url" class="has-text-info">{{ submission.title }}</a>
          <span class="tag is-small">#{{ submission.id }}</span>
        </strong>
        <br>
        {{ submission.description }}
        <br>
        <small class="is-size-7">
          Submitted by:
          <img class="image is-24x24" :src="submission.avatar">
        </small>
      </p>
    </div>
  `,
  props: ['submission']
}
