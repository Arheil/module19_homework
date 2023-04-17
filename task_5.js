class Electrick {
  constructor(voltage, enable, secInHour){
  this.voltage = voltage;
  this.enable = enable;
  this.secInHour = secInHour;
  }
    turnOn(voltage){
      this.enable = true;
      this.voltage = voltage;
  }
    turnOff(voltage){
    this.enable = false;
    voltage = 0;
  }
   getUsePower(secInHour){
    if(this.enable === false){
      return 0;
    }else{
       let kW = this.voltage * secInHour;
       return kW;
    }
   
  } 
}

class TV extends Electrick {
  constructor(voltage, enable, secInHour){
    super(voltage, enable, secInHour);
  }
}

let tv = new TV(30,true,760);

console.log(tv.getUsePower(760));

class Lamp extends Electrick {
  constructor(voltage, enable, secInHour){
    super(voltage, enable, secInHour);
  }
}

let lamp = new Lamp(20,true,1000);

class ElectrickStove extends Electrick {
  constructor(voltage, enable, secInHour, hotplate){
    super(voltage, enable, secInHour);
  }
  
  turnOnHotplate(hotplate){
  return this.voltage * hotplate;
}
  
  getUsePower(secInHour, hotplate){
  if(!hotplate){
    return this.voltage * secInHour;
  }else{
    let countHotplate = this.turnOnHotplate(hotplate);
    return this.voltage * secInHour + countHotplate;
  }
}
}

let electrickStove = new ElectrickStove(100,false,760);