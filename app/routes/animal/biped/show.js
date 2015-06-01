import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: {
    linkable: false
  },

  model(params) {
    const hoomans = this.modelFor('animal.biped');
    const lastName = params.last_name.capitalize()
    return hoomans.findBy('lastName', lastName);
  },

  afterModel(model) {
    const breadCrumb = Ember.get(this, 'breadCrumb');
    const isOneTrueGod = Ember.get(model, 'lastName') === 'Cage';
    if (isOneTrueGod) {
      const newBreadCrumb = Ember.merge(breadCrumb, {
        title: 'One True God'
      });

      Ember.set(this, 'breadCrumb', newBreadCrumb);
    } else {
      const newBreadCrumb = Ember.merge(breadCrumb, {
        title: `${Ember.get(model, 'firstName')} ${Ember.get(model, 'lastName')}`
      });

      Ember.set(this, 'breadCrumb', newBreadCrumb);
    }
  }
});
