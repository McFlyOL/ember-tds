import Route from '@ember/routing/route';

  export default Route.extend({
      model(){
          return{
              project:{}
          };
      },
      actions :{
        updateProject(projectUpdate) {
            this.store.findRecord('project', projectUpdate.id).then(function (project) {
                project.save();
            });
            this.transitionTo("projects")
        },
      }   

}); 