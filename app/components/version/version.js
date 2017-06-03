'use strict';

angular.module('hackerNews.version', [
  'hackerNews.version.interpolate-filter',
  'hackerNews.version.version-directive'
])

.value('version', '0.1');
