import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({

  model(project)
  {
    return RSVP.hash({
      developer : this.get('store').findAll('developer'),
      story : EmberObject.create(),
      tag : EmberObject.create(),
      tags : this.get('store').findAll('tag'),
      color : ['black','blue','green','orange','pink','purple','red','teal','yellow','positive','negative'],
      project : this.get('store').findRecord('project',project.project_id)
    })
  },
  actions:
    {
      newStory(story, project, tags){
        story.set('project',project);
        story.set('tags', tags);
        this.get('store').createRecord('story', story).save().then(()=>
        this.transitionTo('project',project.id)
        );
      },
      addANewTag(tags)
      {
          this.get('store').createRecord('tag', tags).save();
      }
    }
});