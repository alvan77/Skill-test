function multiParam(a){
	var x;
	for(x=1; x<a; x++){
		if(x % 3 == 0 || x % 5 == 0){
			document.write(x);
		}else{

		}
	}
}
var a = prompt('Masukkan angka yg ingin di input :');
console.log(multiParam(a));