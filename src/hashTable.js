var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(i);
  if(!this._storage.get(i)){
    var collArr = [];
    var keyValArr = [];
    keyValArr.push(k);
    keyValArr.push(v);
    collArr.push(keyValArr);
    this._storage.set(i, collArr);
  } else {
    var collArr = this._storage.get(i);
    var keyValArr = [];
    keyValArr.push(k);
    keyValArr.push(v);
    collArr.push(keyValArr);
    this._storage.set(i, collArr);
  }
  //this._storage.set(i, v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var collArr = this._storage.get(i);
  for(var j = 0; j < collArr.length; j++){
    if(collArr[j][0] === k){
      return collArr[j][1];
    }
  }
};

HashTable.prototype.remove = function(){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var collArr = this._storage.get(i);
  for(var j = 0; j < collArr.length; j++){
    if(collArr[j][0] === k){
      collArr.splice(j, 1);
    }
  }
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you