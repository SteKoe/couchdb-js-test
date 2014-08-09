var StringUtils = {
  isBlank: function(str) {
    if(!str) {
      return true;
    }
    var str = str.trim();
    if(str.length == 0) {
      return true;
    }

    return false;
  },
  isNotBlank: function(str) {
    return !isBlank(str);
  }
};
