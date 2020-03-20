  
import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {
        developer:{}
    };
  },
  actions:{
    deleteDeveloper(developer) {
        let self = this;
        this.get('store').findRecord('developer', developer.id).then(function (developer) {
          developer.destroyRecord().then(()=> self.transitionTo('developers'));
        });
    },
  }
});