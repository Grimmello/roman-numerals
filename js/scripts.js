var ones = [0,"I","II","III","IV","V","VI","VII","VIII","IX"];
var tens = [0,"X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
var hundreds = [0,"C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
var thousands = [0,"M","MM","MMM"];
var output = [];
$(function(){
  $("form#roman").submit(function(event) {
    event.preventDefault();
    var input1 = ($("input#input").val());
    var number = input1
    var test = parseInt("500");
    var inputSplit = (number).split('').map(Number);

    if (inputSplit.length === 4) {
        var first = inputSplit[0];
      }
    }
    console.log(inputSplit);
  });
});
