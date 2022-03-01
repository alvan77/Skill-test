var jumlah = [];
var lagi = true;

while(lagi){
	var x = prompt('masukkan angka :');
	if(x<100 || x >= 1000){
		x = 'null';
	}else{
		jumlah.push(x);
	}	

	function perbandingan(a, b){
		return b-a;
	}
	jumlah.sort(perbandingan);

lagi = confirm('masukkan angka lagi : ');
}
document.write(jumlah.join(' '));
