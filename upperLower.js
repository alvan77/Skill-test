var upper = prompt('Masukkan kata untuk jadi huruf besar : ');
var lower = prompt('Masukkan kata untuk jadi huruf kecil : ');
var firstLower = prompt('Masukkan kalimat untuk jadi huruf kecil diawal :');


document.write(upper.toUpperCase());
document.write("<br>");
document.write(lower.toLowerCase());
document.write("<br>");
document.write(Capital(firstLower));


function Capital(str)
{   
	return str.replace (/\w\S*/g, 
    	function(txt)
   		{  
      		return txt.charAt(0).toLowerCase() + txt.substr(1).toUpperCase(); 
   		} 
    );
}
