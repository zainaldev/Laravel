/***************************************
*String search
*/
function carikata(){
	var str = document.getElementById("p1").value;
	var masuk = document.getElementById("msk").value;
	var banding = '';
	var hit = 0;
	var masuk1='';
	var hitu = '';
	var cck =[];
	var klr ='';
	for(var 1=0; i< str.length; i++;){
		banding= '';
		for (var j = i; j<i +masuk.length; j++){
			banding=banding+str[j];
		}
		if(masuk == banding){
			hit++;
			hitu = hitu + ';'+i;
			cck.push(i);
		}
		}
	}
}
