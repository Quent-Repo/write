//js for style as well as removing linkes

/*
//This can be put into the sytle tag in the html 
    <style>
        body {
            font-size: 1.4em;
            text-align: center;
            background-color: black;
            color:  white;

        }

        .pb-3{
            text-align: center;
            text-decoration-color: green;
            border : ridge;
            color : white;
        }
    </style>


*/

/*

https://www.writing.com/main/view_item/action/show_chapters/user_id/[User Name]

document.querySelector("#Content_Column_Inside > div:nth-child(7) > div:nth-child(1)").children[0].href

for(let i =0;i<20;i++){
    let c = document.querySelector("#Content_Column_Inside > div:nth-child(7) > div:nth-child("+i+")")
    console.log(c)
}


//Story
https://www.writing.com/main/interactive-story/item_id/
//The bock page does not have "norm" so an if check can be used to see if the page has loaded a black or the real thing with this code

if(document.getElementsByClassName("norm").length==0){
	console.log("This a block page reload")
}

//previous button
document.querySelector("#Content_Column_Inside > div:nth-child(7) > table > tbody > tr > td:nth-child(1) > div > table > tbody > tr:nth-child(1) > td > p > a:nth-child(1)")

//This is the path for the story text div
document.querySelector("#Content_Column_Inside > div:nth-child(7) > table > tbody > tr > td:nth-child(1) > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td.norm > div:nth-child(2)")
//This is the path to the 


//Outline page
/*-----------------
//This is for each story
document.querySelector("#captcha_content_div > div:nth-child(2)").children[1].children[0].childNodes[*NUM*]
//The link
document.querySelector("#captcha_content_div > div:nth-child(2)").children[1].children[0].childNodes[*NUM*].children[0].href


//These are each item in th eout line pace that is used in the for loop below
    console.log(document.querySelector("#captcha_content_div > div:nth-child(2)").children[1].children[0].childNodes[y].firstChild)
    console.log(document.querySelector("#captcha_content_div > div:nth-child(2)").children[1].children[0].childNodes[x].firstChild)
    console.log(document.querySelector("#captcha_content_div > div:nth-child(2)").children[1].children[0].childNodes[x].children[0].href)
    console.log( document.querySelector("#captcha_content_div > div:nth-child(2)").children[1].children[0].childNodes[x].firstChild+" "+document.querySelector("#captcha_content_div > div:nth-child(2)").children[1].children[0].childNodes[x].children[0].href)

--
//A for loop to get all urls, list of numbers i.e[1-1-2-1], and[#2]
let x = 1
let y = 0
for(i=0;i<(document.querySelector("#captcha_content_div > div:nth-child(2) > div:nth-child(2) > pre").children.length/2);i++){
    x=x+3
    y=y+3
    if(document.querySelector("#captcha_content_div > div:nth-child(2)").children[1].children[0].childNodes[x+2].firstChild.textContent=='(END)'){
    	console.log( document.querySelector("#captcha_content_div > div:nth-child(2)").children[1].children[0].childNodes[y].firstChild,document.querySelector("#captcha_content_div > div:nth-child(2)").children[1].children[0].childNodes[x].firstChild,document.querySelector("#captcha_content_div > div:nth-child(2)").children[1].children[0].childNodes[x].children[0].href)
    	y=y+5
		x=x+5
	}
    console.log( document.querySelector("#captcha_content_div > div:nth-child(2)").children[1].children[0].childNodes[y].firstChild,document.querySelector("#captcha_content_div > div:nth-child(2)").children[1].children[0].childNodes[x].firstChild,document.querySelector("#captcha_content_div > div:nth-child(2)").children[1].children[0].childNodes[x].children[0].href)
    console.log(y,x)
}
x=1
y = 0

--*

*/
while (document.getElementsByTagName('a').length!=1){
    document.getElementsByTagName('a')[0].remove()
}

let y = document.querySelectorAll('.pb-3')
for(i=0;i<y.length;i++){
	y[i].style.textAlign= 'center';
	y[i].style.border= 'ridge';
}