"use strict";
function parsePoint(search){
 const q=new URLSearchParams(search);if(q.getAll("ll").length!==1||q.getAll("n").length>1)return null;
 const ll=q.get("ll").split(",");if(ll.length!==2||ll.some(x=>!x.trim()))return null;
 const numeric=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/;
 if(ll.some(x=>!numeric.test(x.trim())))return null;
 const lat=Number(ll[0]),lon=Number(ll[1]);if(!Number.isFinite(lat)||!Number.isFinite(lon)||Math.abs(lat)>90||Math.abs(lon)>180)return null;
 return {lat,lon,name:q.get("n")||"الموقع المحدد"};
}
function appLink(point,client){
 const ios=/iPhone|iPad|iPod/i.test(client.userAgent||"")||client.platform==="MacIntel"&&client.maxTouchPoints>1;
 return (ios?"mikshat-maps":"mikshat")+"://map?ll="+point.lat+","+point.lon+"&n="+encodeURIComponent(point.name);
}
if(typeof module!=="undefined")module.exports={parsePoint,appLink};
if(typeof document!=="undefined"){
 const p=parsePoint(location.search),byId=id=>document.getElementById(id);
 if(!p)byId("invalid").hidden=false;
 else{
  byId("point").hidden=false;byId("name").textContent=p.name;
  const ll=p.lat.toFixed(6)+", "+p.lon.toFixed(6);byId("coordinates").textContent=ll;
  byId("open").href=appLink(p,navigator);
  byId("copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(ll);byId("status").textContent="تم نسخ الإحداثيات";}catch(e){const selection=getSelection(),range=document.createRange();range.selectNodeContents(byId("coordinates"));selection.removeAllRanges();selection.addRange(range);byId("status").textContent="تم تحديد الإحداثيات؛ اختر نسخ.";}});
 }
}
