
it('should calculate the monthly rate correctly', function() {
    const values = {
      amount: 410000,
      years: 30,
      rate: 2.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('1684.67');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 300000,
      years: 30,
      rate: 3.9
    };
    expect(calculateMonthlyPayment(values)).toEqual('131.00');
  });
  
  /// etc
  
  
  