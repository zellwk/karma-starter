var num = require('../js/one');

describe('Num', () => {
  it('should return 1', () => {
    assert.equal(num(), 1);
  });
});

describe('Array', () => {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));
    });
  });
});

describe('karma test with Chai', function() {
  it('should expose the Chai assert method', function() {
    assert.ok('everything', 'everything is ok');
  });

  it('should expose the Chai expect method', function() {
    expect('foo').to.not.equal('bar');
  });

  it('should expose the Chai should property', function() {
    (1).should.not.equal(2);
    should.exist(123);
  });
});
