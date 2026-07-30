document.addEventListener("pointerup",event=>{
  if(event.pointerType!=="touch" && event.pointerType!=="pen") return;
  const control=event.target.closest("button, summary, input, a");
  if(!control) return;
  requestAnimationFrame(()=>control.blur());
},true);
