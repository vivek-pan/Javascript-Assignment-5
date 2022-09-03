//Create classes for volumes for each geometric shape which returns the output using the getVolume() method.

class Cylinder{
    getVolume(r, h){
        let result = Number(3.1415*r*r*h,4).toFixed(4);

        return result;
    }
}

class Sphere{
    getVolume(r){
        let result = Number(4/3*r*r*r).toFixed(4);

        return result;

    }
}

class Cone{
    getVolume(r, h){
        let result = Number(3.1415*r*r*h/3).toFixed(4);

        return result;
    }
}

let radius = 10;
let height = 10;

let cylinder= new Cylinder(radius,height);
console.log("Volume of Cylinder is :")
console.log(cylinder.getVolume(radius,height));


let sphere= new Sphere(radius,height);
console.log("Volume of Sphere is :")
console.log(sphere.getVolume(radius));


let cone= new Cone(radius,height);
console.log("Volume of Cone is :")
console.log(cone.getVolume(radius,height));