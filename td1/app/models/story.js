import DS from 'ember-data';

export default DS.Model.extend({
  code : DS.attr('string'),
  detail : DS.attr('string'),
  project : DS.belongsTo('project'),
  developer : DS.belongsTo('developer'),
  tags : DS.hasMany('tag')
});