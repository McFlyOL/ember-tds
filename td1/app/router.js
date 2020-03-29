import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('developers', function() {
    this.route('new');
    this.route('update',{path: '/update/:developer_id'});
    this.route('delete',{path: '/delete/:developer_id'});
  });
  this.route('projects', function() {
    this.route('new');
    this.route('update',{path: '/update/:project_id'});
    this.route('delete',{path: '/delete/:project_id'});
  });
  this.route('project', {path: "/project/:project_id"}, function() {
    this.route('board');
  });

    this.route('story', function() {
      this.route('new',{path: "/new/:project_id"});
      this.route('edit',{path: "/edit/:story_id"});
    });
});
