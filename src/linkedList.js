// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(!list.head){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    if(list.head){
      currentHead = list.head;
      list.head = list.head.next;
      return currentHead.value;
    }
  };

  list.contains = function(value){
    var currentHead = list.head;
    while(currentHead){
      if(currentHead.value === value){
        return true;
      } else {
        currentHead = currentHead.next;
      }
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};