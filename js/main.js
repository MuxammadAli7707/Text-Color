const area = document.getElementById("area");

area.addEventListener("keyup", (e) => {
  if(area.value.includes("#")){
    area.style.color = "blue";
    console.log(area.value);
  }
});