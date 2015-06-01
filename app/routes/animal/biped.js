import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: {
    title: 'Hoomans'
  },

  model() {
    return Ember.A([
      { firstName: 'Charlie', lastName: 'Sheen',  url: 'http://placesheen.com/500/500' },
      { firstName: 'Bill', lastName: 'Murray',  url: 'http://www.fillmurray.com/500/500' },
      { firstName: 'Nicholas', lastName: 'Cage',  url: 'http://www.placecage.com/gif/500/500' }
    ]);
  }
});
