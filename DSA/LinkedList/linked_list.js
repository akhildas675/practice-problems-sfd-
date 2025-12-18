class Node{
  constructor(value) {
    this.value=value;
    this.next=null;
  }
}


class LinkedList{
  constructor() {
    this.head=null;
    this.tail=null;
    this.size=0;
  }

  isEmpty(){
    return this.size==0
  }


  append(value){
    let newNode = new Node(value);
    if(this.isEmpty()){
      this.head=this.tail=newNode;
    }else{
      this.tail.next=newNode;
      this.tail=newNode;
    }
    this.size++
  }

  printList(){
    let listValues='';
    let curr=this.head;
    while(curr){
      listValues+=`${curr.value} -> `;
      curr=curr.next;
    }
    console.log(listValues)
  }
}


const list = new LinkedList();


list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)

list.printList()