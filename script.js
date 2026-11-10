// Theme toggle (storage may be unavailable)
var root=document.documentElement;
try{var t=localStorage.getItem("theme");if(t)root.dataset.theme=t}catch(e){}
document.getElementById("theme").onclick=function(){
 var dark=root.dataset.theme?root.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;
 root.dataset.theme=dark?"light":"dark";
 try{localStorage.setItem("theme",root.dataset.theme)}catch(e){}
};
// Typing roles
var roles=["Problem Solver","Java Developer","Full Stack Developer"],ri=0,ci=0,del=false,el=document.getElementById("typed");
if(!matchMedia("(prefers-reduced-motion:reduce)").matches){(function tick(){
 var w=roles[ri];ci+=del?-1:1;el.textContent=w.slice(0,ci);
 var d=del?40:85;
 if(!del&&ci===w.length){del=true;d=1600}else if(del&&ci===0){del=false;ri=(ri+1)%roles.length;d=300}
 setTimeout(tick,d);
})()}
// Certifications: edit here
var certs={
 "MongoDB":["Building AI-powered Search","Building RAG using MongoDB","Advanced Schema Design Patterns and Antipatterns","MongoDB Basics","Schema Design Optimization","Vector Search Performance"],
 "Infosys Springboard":["Java Foundation","Internet of Things Foundation","AI Primer","React Web Developer","Angular Web Developer","Frontend Web Developer"],
 "Cisco":["Introduction to Modern AI","Apply AI","Introduction to Data Science","Data Analytics Essentials","Networking Essentials","Cisco Packet Tracer","CCNA: Switching, Routing, Wireless Essentials"],
 "Great Learning":["AI Fundamentals"],
 "NVIDIA":["Applications of AI for Anomaly Detection"],
 "Sanfoundry":["Operating Systems","Design and Analysis of Algorithms"]
};
var box=document.getElementById("certs");
Object.keys(certs).forEach(function(k){
 var d=document.createElement("details"),s=document.createElement("summary"),u=document.createElement("ul");
 s.innerHTML="<b style='font-weight:500'></b><span>"+String(certs[k].length).padStart(2,"0")+"</span>";
 s.firstChild.textContent=k;
 certs[k].forEach(function(c){var li=document.createElement("li");li.className="chip";li.textContent=c;u.appendChild(li)});
 d.appendChild(s);d.appendChild(u);box.appendChild(d);
});
// Contact form opens the visitor's email app
document.getElementById("form").onsubmit=function(ev){
 ev.preventDefault();var f=ev.target;
 var body="From: "+f.n.value+" ("+f.e.value+")\n\n"+f.m.value;
 location.href="mailto:kit28.24bcs035@gmail.com?subject="+encodeURIComponent("Portfolio message from "+f.n.value)+"&body="+encodeURIComponent(body);
};
// Highlight current nav link
var links=document.querySelectorAll("nav a");
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id)})}})},{rootMargin:"-45% 0px -50% 0px"});
["top","about","work","journey","contact"].forEach(function(id){io.observe(document.getElementById(id))});
