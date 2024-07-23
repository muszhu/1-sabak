 class transport { 
    constructor(option) { 
      (this.name = option.name), 
        (this.big = option.big), 
        (this.autopilot = option.autopilot); 
    } 
  } 

  class flyTansport extends transport { 
    constructor(option) { 
      super(option); 
      this.wings = option.wings; 
      this.color = option.color; 
    } 
  } 
  const air = new flyTansport({ 
    big:true,
    name: "isterbitel", 
    age: 2, 
    autopilot: false, 
    wings: true, 
    color: "silwer",
});
console.log(air);

const vertolet = new flyTansport({ 
    name: "vertolet", 
    age: 8, 
    autopilot: false, 
    wings: false, 
    color: "green",
    big:true,
});
console.log(vertolet);

const flyBall = new flyTansport({ 
    name: "airship", 
    big: true, 
    autopilot: true, 
    wings: false, 
    color: "white",
});
console.log(flyBall);







class waterTransport extends transport { 
    constructor(option) { 
      super(option); 
      this.motor = option.motor; 
      this.color = option.color; 
    } 
  } 
  const waterShip = new waterTransport({ 
    name: "ship", 
    big: true, 
    autopilot: true, 
    motor: true, 
    color: "white",
});
console.log(waterShip);

const waterBoat = new waterTransport({ 
    name: "Boat", 
    big: false, 
    autopilot: false, 
    motor: false, 
    color: "brown",
});
console.log(waterBoat);

const underwater = new waterTransport({ 
    name: "submarina", 
    big: true, 
    autopilot: true, 
    motor: true, 
    color: "black",
});
console.log(waterShip);






class groundTransport extends transport { 
    constructor(option) { 
      super(option); 
      this.motor = option.motor; 
      this.color = option.color; 
    } 
  } 

  const railway = new groundTransport({ 
    name: "train", 
    big: true, 
    autopilot: true, 
    motor: true, 
    color: "white",
});
console.log(railway);


const sportCar = new groundTransport({ 
    name: "mcLaren", 
    big: false, 
    autopilot: false, 
    motor: true, 
    color: "white",
});
console.log(sportCar);


const rollers = new groundTransport({ 
    name: "skateboard", 
    big: false, 
    autopilot: false, 
    motor: false, 
    color: "black",
});
console.log(rollers);