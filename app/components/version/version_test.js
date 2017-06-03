'use strict';

describe('hackerNews.version module', function() {
  beforeEach(module('hackerNews.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
