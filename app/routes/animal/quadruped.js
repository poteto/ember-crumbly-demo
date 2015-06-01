import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: {
    title: '4 legged friends'
  },

  model() {
    return Ember.A([
      { firstName: 'Byron', type: 'Cow', age: 5, says: 'moo', url: 'http://i.imgur.com/30WhKUT.jpg' },
      { firstName: 'Gary', type: 'Dog', age: 1, says: 'HELLO THIS IS DOG', url: 'http://i.imgur.com/4NL4gCe.png' },
      { firstName: 'Mr Meowington', type: 'Cat', age: 3, says: 'meow', url: 'https://placekitten.com/g/500/500' }
    ]);
  }
});
