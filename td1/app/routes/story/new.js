import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(project) {
    return RSVP.hash({
      newStory : EmberObject.create(),
      newTag : EmberObject.create(),
      project: this.get('store').find('project', project.project_id),
      developer: this.get('store').findAll('developer'),
      colors: ['black','blue','green','orange','pink','purple','red','teal','yellow','positive','negative'],
      tags: this.get('store').findAll('tag')
    });
  },
  actions: {
  }
});