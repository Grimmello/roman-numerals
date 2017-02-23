var ones = [0,"I","II","III","IV","V","VI","VII","VIII","IX"];
var tens = [0,"X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
var hundreds = [0,"C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
var thousands = [0,"M","MM","MMM"];
var output = [];
var thousand = 0;
var hundred = 0;
var ten = 0;
var one = 0;

$(function(){
  $("form#roman").submit(function(event) {
    event.preventDefault();
    var input1 = parseInt($("input#input").val());
    if ((input1 < 1)||(input1 > 3999)) {
      alert("Roman numerals cannot articulate 0 or above 3999. Please enter a number within the accepted range.")
    } else {
    var number = input1
    var test = parseInt("500");
    var inputSplit = (""+number).split('').map(Number);
    for (var i = inputSplit.length; i <=3; i++) {
      inputSplit.unshift(0);
    }
    if (inputSplit.length === 4) {
        thousand = inputSplit[0];
        hundred = inputSplit[1];
        ten = inputSplit[2];
        one = inputSplit[3];
      }
      thousand = thousands[thousand];
      hundred = hundreds[hundred];
      ten = tens[ten];
      one = ones[one];
      var check = [thousand,hundred,ten,one];
      check.forEach(function checker(checked) {
        if (isNaN(checked) === true){
          output.push(checked);
        }
      });
      var output2 = output.join('');
      $("#output").text(output2).show();
    }
  });
});
