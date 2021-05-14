let List=[
  {
      City:"Москва",
      Temperature:20,
      pressure:763,
      weather:"sunny",
      wind:5
  },
  {
      City:"Калининград",
      Temperature:21,
      pressure:752,
      weather:"PartlyCloudy",
      wind:4
  },
  {
      City:"Омск",
      Temperature:15,
      pressure:764,
      weather:"Сloudy",
      wind:4
  },
  {
      City:"Санкт-Петербург",
      Temperature:22,
      pressure:759,
      weather:"PartlyCloudy",
      wind:6
  },
  {
      City:"Екатеринбург",
      Temperature:28,
      pressure:768,
      weather:"sunny",
      wind:6
  },
  {
      City:"Улан-Удэ",
      Temperature:9,
      pressure:759,
      weather:"PartlyCloudy",
      wind:6
  },
  {
      City:"Новосибирск",
      Temperature:18,
      pressure:1012,
      weather:"PartlyCloudy",
      wind:7
  }
]

console.log(List);
CreateSelectList();
document.getElementById('AddButton').onclick = AddCity;

function CreateSelectList(){
    for(let i = 0; i < List.length; i++) {
        SelectList.insertAdjacentHTML('beforeend', `<option value="${i}">${List[i].City}</option>`);
        console.log(List[i]);
    };
}
let number=0;
function AddCity(){
  let div = document.createElement('div');
  let CityIndex = document.getElementById('SelectList').value;
  div.className = "MiniCity";
  div.id=number;
  console.log(CityIndex);
  div.innerHTML =`<div ><input class="close" type="button" value="x"></div>`
  div.innerHTML += `<p>Город:${List[CityIndex].City}<br>Температура:${List[CityIndex].Temperature}<br>Давление:${List[CityIndex].pressure}<br>Скорость ветра:${List[CityIndex].wind}<br> Облачность:${List[CityIndex].weather}`;
  document.body.append(div);
  document.getElementById(number).onclick = CloseCity;
  number+=1;
}
function CloseCity(){
  this.remove();
}