describe("StringUtils", function(){
  it("should be able to detect empty string", function() {
    expect(StringUtils.isBlank("")).toBeTruthy();
  });
  it("should be able to detect null string", function() {
    expect(StringUtils.isBlank(null)).toBeTruthy();
  });
  it("should be able to detect non empty strings", function(){
    expect(StringUtils.isBlank("a")).toBeFalsy();
  });
  it("should be able to detect non empty strings having leading and trailing spaces", function(){
    expect(StringUtils.isBlank("  a     ")).toBeFalsy();
  });
});
