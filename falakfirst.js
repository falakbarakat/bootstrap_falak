/* var MarkMass, MarkHeight, JohnMass, JohnHeight;
MarkMass = 120;
MarkHeight = 180;
JohnMass = 130;
JohnHeight = 190;
var BMI_Mark, BMI_John;
BMI_Mark = MarkMass / (MarkHeight * MarkHeight);
BMI_John = JohnMass / (JohnHeight * JohnHeight);
console.log(BMI_Mark, BMI_John);
var best = BMI_Mark > BMI_John;
console.log(best);
console.log(BMI_Mark > BMI_Mark);
console.log("hello");
var x1, x2, x3, y1, y2, y3, z1, z2, z3;
x1 = 103;
x2 = 120;
x3 = 89;
y1 = 123;
y2 = 94;
y3 = 116;
z1 = 97;
z2 = 134;
z3 = 105;
var avrage1 = (x1 + x2 + x3) / 3;
var avrage2 = (y1 + y2 + y3) / 3;
var avrage3 = (z1 + z2 + z3) / 3;
console.log(
"averaga score of John\'s team IS :" + "  " +avrage1 +"  " + "average score of Mike\'s team IS:" + avrage2 
+" " +"average score of Marya\'s team IS:" +" " +avrage3);
if (avrage1 > avrage2) {
  console.log("JOHN\'s team has more scors than mike\'s team" + " " + " average scores are " + avrage1);
  console.log('John\'s team is the winner');
} else if (avrage1 < avrage2) {
  console.log("mike\'s team has more scors than John\'s team" + " " + "avrage scores is " + avrage2);
  console.log('Mike\'s team is the winner');
} else {
  console.log("Both are equals");
}
if (avrage1 > avrage2 && avrage1 > avrage3) {
  console.log("john\'s team is the winner" + " " + "avrage scores is " + avrage1);
} else if (avrage2 > avrage1 && avrage2 > avrage3) {
  console.log("Mike\'s team is the winner" + " " + "avrage scores is " + avrage2);
} else if  (avrage3 > avrage1 && avrage3 > avrage2 ) {
    console.log("Marya\'s team is the winner"+ " " + "avrage scores is " + avrage3);
  } else {
    console.log("All are equal");
  }
  function calculateAge(birthYear){
  return 2018-birthYear;
  }
  var ageAhmad=calculateAge(1993);
  var ageFalak=calculateAge(1996);
  var ageHiba=calculateAge(1992);
  console.log('****************************************');
  
  

  function yearsUntilReatirement(year,firstName){
    var age=calculateAge(year);
    var retirement=65-age;
    console.log(firstName+'   retires in   '+retirement+' years');
  }

  yearsUntilReatirement(1993,'Ahmad');
  yearsUntilReatirement(1992,'Hiba');
  yearsUntilReatirement(1966,'Falak');
console.log('**********************************');

var whatdoyoudo=function (job,name){
  switch (job){
    case 'teacher':
    return name+'    teaches kids';
    case 'driver':
    return name+'       drive cars';
    case 'doctor':
    return name+'   treats illnesses';
    default :
    return name+'  does something else';
  }
}
 console.log(whatdoyoudo('teacher','Ahmad'));
 console.log(whatdoyoudo('driver','omar'));
 console.log(whatdoyoudo('doctor','hiba'));
 */

function tipCalculate(bill) {
  var tip;
  if (bill < 50) {
    tip = (bill * 20) / 100;
  } else if (bill >= 50 && bill < 200) {
    tip = (bill * 15) / 100;
  } else {
    tip = (bill * 10) / 100;
  }
  return tip;
}
//testing
s = tipCalculate(100);
console.log(s);
var bills = [124, 48, 268];
var tips = [
  tipCalculate(bills[0]),
  tipCalculate(bills[1]),
  tipCalculate(bills[2])
];
var totalvalues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills);
console.log(totalvalues);

var mark = {
  fullName: "Mark Svensson",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    return (this.BMI = this.mass / (this.height * this.height));
  }
}

var John = {
  fullName: "John bara",
  mass: 66,
  height: 170,

  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
}
John.calcBMI();

mark.calcBMI();
console.log(mark);
console.log(John);

if (John.calcBMI() > mark.calcBMI()) {
  console.log(John.fullName + "  has the heighst  " + John.BMI);
} else if (John.BMI < mark.BMI) {
  console.log(mark.fullName + " " + "has the heigst BMI" + mark.BMI);
} else {
  console.log("both are equals");
}
