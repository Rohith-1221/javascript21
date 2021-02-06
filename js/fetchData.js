fetch("js/data.json")
.then(res=>{return res.json()})
.then(d=>{
    detail(d.details);
    other1(d.mulData);
})
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
        li.setAttribute("class","bg-danger");
        ul.appendChild(li);
        var li1=document.createElement("li");
        li1.textContent=t[i].mobile;
        li1.setAttribute("class","bg-light");
        ul.appendChild(li1);
    }
}
function myfunction(){
    document.write("Successful");
    }