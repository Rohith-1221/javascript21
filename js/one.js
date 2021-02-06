var fun=document.querySelector("#parent");
var bag=document.createElement("div");
bag.setAttribute("id","bag")
fun.appendChild(bag);
var image=document.createElement("img");
image.src ="picture/flag.jpg";
image.alt="na";
image.style.width="30%";
image.style.height="20%";
fun.appendChild(image);
document.write("<h1>Friends</h1>");
 
var loadJSON=(file,callback)=>{
    var dell=new XMLHttpRequest();
    dell.overrideMimeType("application/json");
    dell.open("GET",file,true);
    dell.onreadystatechange=()=>{   
        if(dell.readyState===4 && dell.status===200){
            callback(dell.responseText);
        }
    }
    dell.send();
}
loadJSON("js/date.json", loadJSON=(text)=>{
    var d=JSON.parse(text);    
    rocky(d.perform);
    rover(d.othr);
    benz(d.othr);
});
var root=document.getElementById("parent");
function rocky(cse){
    var h=document.createElement("h1");
    h.setAttribute("class","name");
    h.textContent=cse.name;
    fun.appendChild(h);
    var r=document.createElement("p");
    r.setAttribute("class","roll");
    r.textContent=cse.roll;
    fun.appendChild(r); 
    var image=document.createElement("img");
}
function rover(t){    
    var ul=document.createElement("ul");
    fun.appendChild(ul);
    for(let i=0;i<t.length;i++){ 
        var li=document.createElement("li");
        li.textContent=t[i].name;
        ul.appendChild(li);
    }
    
}

function benz(s){    
    var ul1=document.createElement("ul");
    fun.appendChild(ul1);
    for(let j=0;j<s.length;j++){ 
        var li1=document.createElement("li");
        li1.textContent=s[j].roll;
        ul1.appendChild(li1);
    }
    
}

function rock(){
    document.write("<p>wait for a second.........<p>");
    document.write("<p>Loading.......<p>");
    document.write("<p>Loading.......<p>");
    document.write("<p>Loading.......<p>");
    document.write("<h1>#Happy friendship day.*<h1>");
}