/// 1. Copy and paste your prototype in here and refactor into class syntax.

class ClassCuboidMaker{
    constructor(att){
        this.length = att.length;
        this.width = att.width;
        this.height = att.height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 *(this.length * this.width + this.length * this.height + this.width * this.height);
    }
};


const classCuboid = new ClassCuboidMaker ({
  'length': 4,
  'width': 5,
  'height': 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(`Class Volume: ${classCuboid.volume()}`); // 100
console.log(`Class Surface Area: ${classCuboid.surfaceArea()}`); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends ClassCuboidMaker{
    constructor(cubeAtt){
        super(cubeAtt)
    }
    cubeVolume(){
        return this.length * this.length * this.length;
    }
    cubeSurfaceArea(){
        return (6 * this.length * this.length);
    }
}

const cube  = new CubeMaker ({
    'length': 4,
    'width': 4,
    'height': 4
})

console.log(`Cube Volume: ${cube.cubeVolume()}`); // 64
console.log(`Cube Surface Area: ${cube.cubeSurfaceArea()}`); // 96