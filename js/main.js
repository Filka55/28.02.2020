//Task1
/*Расширьте глобальный объект Date методом getWeek, с помощью которого можно
узнать номер недели в году. А также добавьте в прототип метод getQuarter -
для получения номера годового квартала*/

/*
Date.prototype.weeks = function(getWeek){

  const data = {
    start:(new Date(date.getFullYear(), 0, 1)).getTime(),
    current:this.getTime(),
  };
  getWeek = Math.ceil((data.current - data.start)/3600000/168);
  return getWeek;

};
Date.prototype.quarter = function(getQuarter){

  const data = {
    start:(new Date(date.getFullYear(), 0, 1)).getTime(),
    current:this.getTime(),
  };
  getQuarter = Math.ceil((data.current - data.start)/3600000/2190);
  return getQuarter;

};

var date = new Date();

console.log(date.weeks());
console.log(date.quarter());
*/

//Task2
/*Добавьте в прототип конструктора Array метод, позволяющий поменять элементы
массива местами по индексам. Метод изменяет исходный массив*/

/*
Array.prototype.replace = function(replaceElem){
  var d = this[0];
  var e = this[1];
  var f = this[2];
  Array = [d, f, e];
  return Array;
};
var ar = ['a', 'b', 'c'];

console.log(ar.replace());
*/
//Task3
/*В прототипном стиле напишите класс Warrior для создания игроков “файтинга”.
 Игроки должны иметь свойство health - которое определяет базовые боевые
  возможности игрока (выносливость), и power - сила удара. Оба свойства
   определяются при создании экземпляра класса. Также игрок должен иметь
    метод hit для нанесения удара другому игроку. При нанесении удара
    “жертва” теряет энергии (health) соответственно значению power игрока,
    который наносит удар. Также все игроки имеют возможность лечиться -
    метод heal.
Добавляйте другие методы и свойства на свое усмотрение - что считаете нужным.
Создайте несколько (минимум два) экземпляров класса Warrior с
разными способностями и возможностями. И напишите пример боя,
используя соответствующие методы и свойства.*/
function Warrior (player) {
this.healInterval = null;
this.name = player;
};

Warrior.prototype.hit = function(fighter, hurt) {
	document.body.append(fighter.name + ' вы наносите удар!');
  document.body.append(hurt.name + ' вас бьют!');
  hurt.health = hurt.health - fighter.power;
  document.body.append(hurt.name + ', ваше здоровье снизилось до ' + hurt.health + '!');
};

Warrior.prototype.heal = function() {
	this.health = this.health + 5;
  document.body.append(this.name + ', вас подлечил доктор, теперь ваше здоровье ' + this.health + '!');
};


function Strong (player) {
  Warrior.call(this, player);
  this.health = 100;
  this.power = 10;
};
Object.setPrototypeOf(Strong.prototype, Warrior.prototype);

function Weak (player){
  Warrior.call(this, player);
  this.health = 100;
  this.power = 5;
};
Object.setPrototypeOf(Weak.prototype, Warrior.prototype);


let polina = new Strong('Polina');
let margo = new Weak('Margo');


polina.hit(polina, margo);
margo.heal();

polina.hit(margo, polina);
