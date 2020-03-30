import Route from '@ember/routing/route';

  export default Route.extend({
      model(){
          return{
              project:{}
          };
      },
      actions :{
        deleteProject(project){
        this.get('store').findRecord('project', project.id, {reload: true}).then(function (project) {
          project.destroyRecord();
        });
        this.transitionTo("projects");
      },
      }
}); 