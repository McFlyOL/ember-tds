import DS from 'ember-data';

export default DS.Model.extend({
  identity:DS.attr(),
  projects:DS.hasMany('project'),
  stories:DS.hasMany('story')
});