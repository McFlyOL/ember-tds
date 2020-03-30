import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model(project)
    {
      return RSVP.hash({
        project : this.get('store').findRecord('project',project.project_id),
        story: this.get('store').query('story', {
          filter: {
            project: project.project_id
          }})
      });
    }
});