import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  router: service(),

  breadcrumbs: computed('router.currentRouteName', function() {
    let currentRouteName = this.get('router.currentRouteName');

    if (currentRouteName === 'index') return [];

    return currentRouteName.split('/').map(n => n.capitalize());
  })
});
