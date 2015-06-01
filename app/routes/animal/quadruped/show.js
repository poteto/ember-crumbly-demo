import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: {
    linkable: false
  },

  model(params) {
    const type = params.type;
    const furryFriends = this.modelFor('animal.quadruped');
    return furryFriends.findBy('type', type);
  },

  afterModel(model) {
    const breadCrumb = Ember.get(this, 'breadCrumb');
    const newBreadCrumb = Ember.merge(breadCrumb, {
      title: Ember.get(model, 'firstName'),
      type: Ember.get(model, 'type'),
      age: Ember.get(model, 'age'),
      says: Ember.get(model, 'says')
    });

    Ember.set(this, 'breadCrumb', newBreadCrumb);
  }
});
