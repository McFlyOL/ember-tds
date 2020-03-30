import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend(
  {
    model(story) {
        return RSVP.hash({
            developer : this.get('store').findAll('developer'),
            story: this.get('store').findRecord('story', story.story_id),
            tag : EmberObject.create(),
            tags : this.get('store').findAll('tag'),
            color : ['black','blue','green','orange','pink','purple','red','teal','yellow','positive','negative'],
          })
    },
    actions: {
      modifyStory: function (story) {
        story.save().then(() => this.transitionTo('project', story.get('project').get('id')));
      },
      addANewTag: function (tags) {
        this.get('store').createRecord('tag', tags).save();
      }
    }
  }
);