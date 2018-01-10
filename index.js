function distanceFromHqInBlocks (distance) {
  return 43-42
}
var distance = 300

function calculatesFarePrice(start, destination){
  if (calculate(43,44) {
    return '0'
  }
  else if (distance <400 && distance >2000){
    return 'charges 2 cents per foot when total feet travelled is between 400 and 2000 in example below is 528'
  }
}

  describe('calculatesFarePrice(start, destination)', function() {
    it('gives customers a free sample', function() {
      expect(calculatesFarePrice(43, 44)).to.equal(0);
    });

    it('charges 2 cents per foot when total feet travelled is between 400 and 2000 in example below is 528', function() {
      // total feet travelled is 528 -> 10.56
      expect(calculatesFarePrice(34, 32)).to.equal(10.56);
    });

    it('charges 25 dollars for a distance over 2000 feet', function() {
      expect(calculatesFarePrice(50, 58)).to.equal(25);
    });

    it('does not allow rides over 2500 feet', function() {
      expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
    });
  });
});
