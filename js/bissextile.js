var form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function(e) {
  var year = form.year.value; // Przypisaliśmy wartość podaną przez użytkownika do zmiennej
  e.preventDefault(); // Zapobiegamy domyślnej akcji przeglądarki, czyli przeładowania strony
  var convert = parseFloat(year);
 para.innerText =  ifIntercalary(convert);// Tutaj będziemy wywoływać funkcję i przypisywać wynik do elementu.
});
var ifIntercalary = function(num){
	if (typeof(num)==="number" && ((num%4 == 0 && num%100 != 0) || num%400 == 0)){
	return num+" rok jest rokiem przestępnym.";	
	}
	else{
		return num+" rok nie jest rokiem przestępnym.";
	}
}
var para = document.createElement('p');
document.body.appendChild(para);


var dayInYear =  function(d, m, y){
	if (typeof(d)==="number" && typeof(m)==="number" && typeof(y)==="number"){
		var months = [01,02,03,04,05,06,07,08,09,10,11,12];
		if (((y%4 == 0 && y%100 != 0) || y%400 == 0)){			
			if (months.indexOf(m) === 0){
				return d;
			}
			else if (months.indexOf(m) === 1){
				return d+31;
			}
			else if (months.indexOf(m) === 2){
				return d+60;
			}
			else if (months.indexOf(m) === 3){
				return d+91;
			}
			else if (months.indexOf(m) === 4){
				return d+121;
			}
			else if (months.indexOf(m) === 5){
				return d+152;
			}
			else if (months.indexOf(m) === 6){
				return d+182;
			}
			else if (months.indexOf(m) === 7){
				return d+213;
			}
			else if (months.indexOf(m) === 8){
				return d+244;
			}
			else if (months.indexOf(m) === 9){
				return d+274;
			}
			else if (months.indexOf(m) === 10){
				return d+305;
			}
			else if (months.indexOf(m) === 11){
				return d+336;
			}
		}
		else{
			if (months.indexOf(m) === 0){
				return d;
			}
			else if (months.indexOf(m) === 1){
				return d+31;
			}
			else if (months.indexOf(m) === 2){
				return d+60-1;
			}
			else if (months.indexOf(m) === 3){
				return d+91-1;
			}
			else if (months.indexOf(m) === 4){
				return d+121-1;
			}
			else if (months.indexOf(m) === 5){
				return d+152-1;
			}
			else if (months.indexOf(m) === 6){
				return d+182-1;
			}
			else if (months.indexOf(m) === 7){
				return d+213-1;
			}
			else if (months.indexOf(m) === 8){
				return d+244-1;
			}
			else if (months.indexOf(m) === 9){
				return d+274-1;
			}
			else if (months.indexOf(m) === 10){
				return d+305-1;
			}
			else if (months.indexOf(m) === 11){
				return d+336-1;
		}
	}
}
}