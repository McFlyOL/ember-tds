import Route from '@ember/routing/route';
import EmberObject,{set} from '@ember/object';

  export default Route.extend({
      model(){
          return{
              project:{}
          };
      },
    actions: {
        addProject(Nproject){
            let project = this.store.createRecord('project',EmberObject.create(Nproject));
            project.save().then(set(Nproject, "Nproject",{}));
            this.transitionTo("projects");
        }
    }

}); 
