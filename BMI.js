/*class BMI{
    
    constructor(mass,height) {
        this.mass= mass;
        this.height = height;
    }
    getBMI() {
        return this.mass*Math.pow(this.height,2);
    }

}
var mark=new BMI(80,188);
var john=new BMI(95,185);

var markbmi=mark.getBMI();
var johnbmi=john.getBMI();

var b=Boolean(markbmi>johnbmi);
console.log('Is Mark BMI higher than Johan? '+ b);
*/
function getBMI(mass,height){
    return mass*Math.pow(height,2);
}

var mark={
    mass:80,
    height:188
}

var john={
    mass:95,
    height:185
}

var markBmi=getBMI(mark.mass,mark.height);
var johnBmi=getBMI(john.mass,john.height);

var b=Boolean(markBmi>johnBmi);
console.log('Is Mark BMI higher than Johan? '+ b);
