window.onload = function(){
	tabla1 = document.getElementById('tabla1');
	tabla2 = document.getElementById('tabla2');
	tabla3 = document.getElementById('tabla3');
	tabla4 = document.getElementById('tabla4');
	tabla5 = document.getElementById('tabla5');
	tabla6 = document.getElementById('tabla6');
	tabla7 = document.getElementById('tabla7');
	tabla8 = document.getElementById('tabla8');
	tabla9 = document.getElementById('tabla9');
	tabla10 = document.getElementById('tabla10');
	tabla11 = document.getElementById('tabla11');
	tabla12 = document.getElementById('tabla12');
	contentBoton = document.getElementById("contentBoton");
}


function keyp(){
	if (event.code == 'Enter') {
		calcular();
	}
}

function calcular(){
	pesoNuevo = document.getElementById("pesoNuevo");
	pesoNuevo = pesoNuevo.value;
	
	tabla1.innerText=pesoNuevo*0.75+"Kg";
	tabla2.innerText=pesoNuevo*0.80+"Kg";
	tabla3.innerText=pesoNuevo*0.85+"Kg";
	tabla4.innerText=pesoNuevo*0.90+"Kg";
	tabla5.innerText=pesoNuevo*0.65+"Kg";
	tabla6.innerText=pesoNuevo+"Kg";

	tabla7.innerText=pesoNuevo*0.60+"Kg";
	tabla8.innerText=pesoNuevo*0.65+"Kg";
	tabla9.innerText=pesoNuevo*0.70+"Kg";
	tabla10.innerText=pesoNuevo*0.70+"Kg";
	tabla11.innerText=pesoNuevo*0.60+"Kg";
	tabla12.innerText=pesoNuevo*0.70+"Kg";

	contentBoton.innerHTML = `<input type="text" class="form-control border border-dark" id="pesoNuevo" value="`+pesoNuevo+`" placeholder="" onkeypress="keyp()">`;

}