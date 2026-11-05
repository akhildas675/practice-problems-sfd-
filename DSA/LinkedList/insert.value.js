class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class LinkedList{
  constructor() {
    this.head=null;
    this.tail=null;
    this.size=0
  }

  isEmpty(){
    return this.size===0
  }

  append(value){
    let newNode = new Node(value);

    if(this.isEmpty()){
      this.head=this.tail=newNode;
    }else{
      this.tail.next = newNode;
      this.tail=newNode;
    }
    this.size++
  }

  insert(index,value){
    if(index<0 || index>this.size){
      console.log("Enter correct index value")
    }

    let newNode = new Node(value);;
    if(index===0){
      newNode.next = this.head;
      this.head=newNode;
    }else{
      let curr = this.head;
      for(let i =0;i<index-1;i++){
        curr= curr.next;
      }
      newNode.next = curr.next;
      curr.next = newNode;
    }
    this.size++
  }

  printList(){
    let listValues = " ";
    let curr = this.head;
    while(curr){
      listValues+=`${curr.value} -> `;
      curr=curr.next;
    }
    console.log(listValues)
  }
}


const list  = new LinkedList()


list.append(10)
list.append(11)
list.append(12)
list.append(13)
list.append(14)
list.append(15)


list.insert(3,20)

list.printList()