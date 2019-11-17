interface AnimalType {
  type: string
}

class Animal {
  private type: string;
  static staticName: string;
  constructor({ type }: AnimalType) {
    this.type = type;
    Animal.staticName = type
  }

  getType(): string {
    return this.type;
  }

  public setType(type: string) {
    this.type = type
  }

  static filterType() {
    return '--' + Animal.staticName
  }
}

const cat = new Animal({ type: 'cat' })

// 在 vs 中写了 cat 都不提示 type 这个属性，只提示 getType 和 setType 这两个方法
console.log(cat.getType()) // cat
console.log(cat.setType('dog'))
console.log(cat.getType()) // dog

export default Animal
