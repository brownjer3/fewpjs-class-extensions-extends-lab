class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((total,val) => total + val)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let [side_1, side_2, side_3] = this.sides
        return side_1 + side_2 > side_3 && side_2 + side_3 > side_1 && side_3 + side_2 > side_1
    }
}

class Square extends Polygon {
    get isValid() {
        return this.perimeter % 4 === 0 && this.countSides === 4
    }

    get area() {
        return this.sides[0]*this.sides[0]
    }
}