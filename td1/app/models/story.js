import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('string'),
  descriptif: DS.attr('string'),
  project: DS.belongsTo('project'),
  tags: DS.hasMany('tag'),
  step: DS.hasMany('step'),
  developer: DS.belongsTo('developer')
});