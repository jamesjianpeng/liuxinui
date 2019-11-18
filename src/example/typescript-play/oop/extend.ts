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

  public setType = (type: string) => {
    this.type = type
  }

  static filterType() {
    return '--' + Animal.staticName
  }
}

console.log(new Animal({ type: 'cat' }))

class Cat extends Animal {
  protected weight: Number
  protected Unit: String
  constructor(weight: Number) {
    super({ type: 'CatLili' })
    this.weight = weight
    this.Unit = 'kg'
  }

  protected _getWeight = (): String => {
    return this.weight.toString() + this.Unit
  }
}

console.log(new Cat(100))

