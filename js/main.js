const area = document.getElementById("area");

area.addEventListener("keyup", (e) => {
  if(area.value.includes("#")){
    area.value.style.color = "blue";
    console.log(area.value);
  } else {
    area.style.backgroundColor = "white";
  }
});