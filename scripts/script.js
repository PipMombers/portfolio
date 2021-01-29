const werkItems=document.querySelector(".werk").children;

const knopEen=document.querySelector(".pagenumber1");
const knopTwee=document.querySelector(".pagenumber2");

const maxItem=6;
let index=1;

	const pagination=Math.ceil(werkItems.length/maxItem);
	console.log(pagination)

knopEen.addEventListener("click",function(){
	index--;
	check();
	showItems();
})

knopTwee.addEventListener("click",function(){
	index++;
	check();
	showItems();
})

function check(){
	if(index==pagination){
		knopTwee.classList.add("disabled");
	}
	else{
		knopTwee.classList.remove("disabled");
	}
	if(index==1){
		knopEen.classList.add("disabled");
	}
	else{
		knopEen.classList.remove("disabled");
	}
}

function showItems() {
	for(let i=0;i<werkItems.length; i++){
		werkItems[i].classList.remove("show");
		werkItems[i].classList.add("hide");

	if(i>=(index*maxItem)-maxItem && i<index*maxItem){
		werkItems[i].classList.remove("hide");
		werkItems[i].classList.add("show");
		}
	}
}

window.onload=function(){
	showItems();
	check();
}