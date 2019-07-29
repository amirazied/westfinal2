
function calculate() {
		var myBox1 = document.getElementById('box1').value; //assign ID to first textbox
		var myBox2 = 0.18396; //assign ID/value to second textbox
		var result = document.getElementById('result'); //assign ID to result, the third textbox
		var myResult = myBox1 * myBox2; //multiplying the IDs
		result.value = myResult; //print result //natural gas

		var myBox3 = document.getElementById('box3').value; //electricity
		var myBox4 = 0.28307;
		var result1 = document.getElementById('result1');
		var myResult1 = myBox3 * myBox4;
		result1.value = myResult1;

		var myBox5 = document.getElementById('box5').value; //average petrol car
		var myBox6 = 0.29561;
		var result2 = document.getElementById('result2');
		var myResult2 = myBox5 * myBox6;
		result2.value = myResult2;

		var myBox7 = document.getElementById('box7').value; //large petrol car
		var myBox8 = 0.45723;
		var result3 = document.getElementById('result3');
		var myResult3 = myBox7 * myBox8;
		result3.value = myResult3;

		var myBox9 = document.getElementById('box9').value; //medium petrol car
		var myBox10 = 0.312;
		var result4 = document.getElementById('result4');
		var myResult4 = myBox9 * myBox10;
		result4.value = myResult4;

		var myBox11 = document.getElementById('box11').value; //small petrol car
		var myBox12 = 0.25049;
		var result5 = document.getElementById('result5');
		var myResult5 = myBox11 * myBox12;
		result5.value = myResult5;

		var myBox13 = document.getElementById('box13').value; //average diesel car
		var myBox14 =  0.28572;
		var result6 = document.getElementById('result6');
		var myResult6 = myBox13 * myBox14;
		result6.value = myResult6;

		var myBox15 = document.getElementById('box15').value; //large diesel car
		var myBox16 =  0.34634;
		var result7 = document.getElementById('result7');
		var myResult7 = myBox15 * myBox16;
		result7.value = myResult7;

		var myBox17 = document.getElementById('box17').value; //medium diesel car
		var myBox18 =  0.27927;
		var result8 = document.getElementById('result8');
		var myResult8 = myBox17 * myBox18;
		result8.value = myResult8;

		var myBox19 = document.getElementById('box19').value; //small diesel car
		var myBox20 = 0.23389;
		var result9 = document.getElementById('result9');
		var myResult9 = myBox19 * myBox20;
		result9.value = myResult9;

		var myBox21 = document.getElementById('box21').value; //tram
		var myBox22 = 0.03967;
		var result10 = document.getElementById('result10');
		var myResult10 = myBox21 * myBox22;
		result10.value = myResult10;

		var myBox23 = document.getElementById('box23').value; //national rail
		var myBox24 = 0.04424;
		var result11 = document.getElementById('result11');
		var myResult11 = myBox23 * myBox24;
		result11.value = myResult11;

		var myBox25 = document.getElementById('box25').value; //international average flight
		var myBox26 = 0.18277;
		var result12 = document.getElementById('result12');
		var myResult12 = myBox25 * myBox26;
		result12.value = myResult12;

		var myBox27 = document.getElementById('box27').value; //international economy flight
		var myBox28 = 0.139965;
		var result13 = document.getElementById('result13');
		var myResult13 = myBox27 * myBox28;
		result13.value = myResult13;

		var myBox29 = document.getElementById('box29').value; //international premium economy flight
		var myBox30 = 0.22395;
		var result14 = document.getElementById('result14');
		var myResult14 = myBox29 * myBox30;
		result14.value = myResult14;

		var myBox31 = document.getElementById('box31').value; //international business flight
		var myBox32 = 0.4059;
		var result15 = document.getElementById('result15');
		var myResult15 = myBox31 * myBox32;
		result15.value = myResult15;

		var myBox33 = document.getElementById('box33').value; //international first class flight
		var myBox34 = 0.55987;
		var result16 = document.getElementById('result16');
		var myResult16 = myBox33 * myBox34;
		result16.value = myResult16;

		var myBox35 = document.getElementById('box35').value; //long-haul average flight
		var myBox36 = 0.21256;
		var result17 = document.getElementById('result17');
		var myResult17 = myBox35 * myBox36;
		result17.value = myResult17;

		var myBox37 = document.getElementById('box37').value; //long-haul economy flight
		var myBox38 = 0.21256;
		var result18 = document.getElementById('result18');
		var myResult18 = myBox37 * myBox38;
		result18.value = myResult18;

		var myBox39 = document.getElementById('box39').value; //long-haul premium economy flight
		var myBox40 = 0.26046;
		var result19 = document.getElementById('result19');
		var myResult19 = myBox39 * myBox40;
		result19.value = myResult19;

		var myBox41 = document.getElementById('box41').value; //long-haul business flight
		var myBox42 = 0.47208;
		var result20 = document.getElementById('result20');
		var myResult20 = myBox41 * myBox42;
		result20.value = myResult20;

		var myBox43 = document.getElementById('box43').value; //long-haul first class flight
		var myBox44 = 0.65115;
		var result21 = document.getElementById('result21');
		var myResult21 = myBox43 * myBox44;
		result21.value = myResult21;

		var myBox45 = document.getElementById('box45').value; //short haul average flight
		var myBox46 = 0.16236;
		var result22 = document.getElementById('result22');
		var myResult22 = myBox45 * myBox46;
		result22.value = myResult22;

		var myBox47 = document.getElementById('box47').value; //short haul economy flight
		var myBox48 = 0.1597;
		var result23 = document.getElementById('result23');
		var myResult23 = myBox47 * myBox48;
		result23.value = myResult23;

		var myBox49 = document.getElementById('box49').value; //short haul business flight
		var myBox50 = 0.23955;
		var result24 = document.getElementById('result24');
		var myResult24 = myBox49 * myBox50;
		result24.value = myResult24;

		var myBox51 = document.getElementById('box51').value; //domestic average flight
		var myBox52 = 0.29832;
		var result25 = document.getElementById('result25');
		var myResult25 = myBox51 * myBox52;
		result25.value = myResult25;

		var myBox53 = document.getElementById('box53').value; //water supply
		var myBox54 = 0.344;
		var result26 = document.getElementById('result26');
		var myResult26 = myBox53 * myBox54;
		result26.value = myResult26;

		var myBox55 = document.getElementById('box55').value; //waste landfill paper
		var myBox56 = 1041.9017;
		var result27 = document.getElementById('result27');
		var myResult27 = myBox55 * myBox56;
		result27.value = myResult27;

		var myBox57 = document.getElementById('box57').value; //waste landfill plastic
		var myBox58 = 9;
		var result28 = document.getElementById('result28');
		var myResult28 = myBox57 * myBox58;
		result28.value = myResult28;

		var myBox59 = document.getElementById('box59').value; //waste recycling plastic
		var myBox60 = 21.3842;
		var result29 = document.getElementById('result29');
		var myResult29 = myBox59 * myBox60;
		result29.value = myResult29;

		var myBox61 = document.getElementById('box61').value; //waste recycling paper
		var myBox62 = 21.3842;
		var result30 = document.getElementById('result30');
		var myResult30 = myBox61 * myBox62;
		result30.value = myResult30;

		var Total = myResult + myResult1 + myResult2 + myResult3 + myResult4 + myResult5 + myResult6 + myResult7 + myResult8 + myResult9 + myResult10 + myResult11 + myResult12 + myResult13 + myResult14 + myResult15 + myResult16 + myResult17 + myResult18 + myResult19 + myResult20 + myResult21 + myResult22 + myResult23 + myResult24 + myResult25 + myResult26 + myResult27 + myResult28 + myResult29 + myResult30; //adding all the final results to show the total value
		total.value = Total; //print total

		var Tonnes = Total * 0.272;
		tonnes.value = Tonnes;

		var Employee = document.getElementbyID('employee'). value;
		var PerPerson = Total / Employee;
		per.value = PerPerson;

	}
