const A = [1,5,5,5,6,6,8,8,8,9,9,9,2,4,4,7,5,7,5,5];
// function frequency(A){
	
// 		let maxElement = 0;
// 		let obj = {};
		
// 	function max (A ){
// 		let maxElement = 0;
// 		let obj = {};
// 		let ans = 0;
// 		A.forEach((element)=>{
// 			obj[element] === undefined ? obj[element]=1 : obj[element]++; 
//             // maxElement = Math.max(maxElement, obj[element]);
// 			if(obj[element] > maxElement){
// 				ans=element;
// 				maxElement = obj[element];
// 			}
// 		})
// 		console.log(ans);
// 	}

// 	max(A);
// 	//console.log();
// }
// frequency(A);

function max(A){
	let ans =0;
	let maxElement = 0;
	let obj = {};

	A.forEach((element)=>{
		obj[element] === undefined ? obj[element]=1 : obj[element]++; 
		//maxElement = Math.max(maxElement, obj[element]); 
		if(obj[element] > maxElement){
			ans = element;
			maxElement = obj[element];
		}
	})
	return ans;
}

let ans = max(A);
console.log(ans);