class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    set(item, qty) {
        const address = this._hash(item)
        if(!this.data[address]) {
          this.data[address] = []
        }
        this.data[address].push([item, qty])
        return this.data
    }

    get(item) {
      let address = this._hash(item)
      const currentBucket = this.data[address]
      if (currentBucket) {
        for (let i = 0; i < currentBucket.length; i++) {
          if (currentBucket[i][0] === item) {
            return currentBucket[i][1]
          }
        }
      }
      return undefined
    }
  }
  
  const myHashTable = new HashTable(50);
  console.log(myHashTable.set('grapes', 10000))
  console.log(myHashTable.get('grapes'))
  console.log(myHashTable.set('apples', 9))
  myHashTable.get('apples')
  