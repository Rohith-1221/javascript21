// var container=document.querySelector("#root");
// var card=document.createElement("div");
// card.setAttribute("id0","card");
// container.appendChild(card);
// var image=document.createElement("img");
// image.src="picture/avatar.svg";
// image.alt="male";
// image.style.width="20%";
// card.appendChild(image);
// document.write("<h1>Peddireddy venkata rohith</h1>");
// document.write("<h2>rohithpeddireddy2222@gmail.com</h2>");
// document.write("<h2>computer science engineering</h2>");
// function myfunction(){
// document.write("Successful");
//}

//*normal function*  
//function loadJSON(file,callback){
// function loadJSON(file,callback){
//     var ajax=new XMLHttpRequest();
//     ajax.overrideMimeType("application/json");
//     ajax.open("GET",file,true);
//    ajax.onreadystatechange=function(){
//         if(ajax.readyState===4 && ajax.status===200){
//             callback(ajax.responseText);
//         }
//     }
//     ajax.send();
// }
// loadJSON("js/data.json",function(text){
//     var d=JSON.parse(text);
//     console.log(d);
// });


//*array function*
var loadJSON=(file,callback)=>{
    var ajax=new XMLHttpRequest();
    ajax.overrideMimeType("application/json");
    ajax.open("GET",file,true);
   ajax.onreadystatechange=()=>{   
        if(ajax.readyState===4 && ajax.status===200){
            callback(ajax.responseText);
        }
    }
    ajax.send();
}
loadJSON("js/data.json", loadJSON=(text)=>{
    var d=JSON.parse(text);    
    detail(d.details);
    other1(d.mulData)
});
var root=document.getElementById("root");
function detail(cse){
    var h=document.createElement("h1");
    h.setAttribute("class","name");
    h.textContent=cse.name;
    root.appendChild(h);
    var r=document.createElement("p");
    r.setAttribute("class","mobile");
    r.textContent=cse.mobile;
    root.appendChild(r);
    var v=document.createElement("p");
    v.setAttribute("class","branch");
    v.textContent=cse.branch;
    root.appendChild(v);    
    var image=document.createElement("img");
    image.src="picture/avatar.svg";
    image.alt="male";
    image.style.width="20%";
    root.appendChild(image);
}
function other1(t){    
    var ul=document.createElement("ul");
    root.appendChild(ul);
    for(let i=0;i<t.length;i++){ 
        var li=document.createElement("li");
        li.textContent=t[i].name;
        ul.appendChild(li);
    }
    
}