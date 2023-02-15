function Car(name, color, speed, price, make) {
    this.make = make;
    this.color = color;
    this.price = price;
    this.speed = speed;
    this.speednow = 0;
  }
  
  // Get Data   
  Car.prototype.getSpeed = function() {
    return `${this.speed}km/jam` 
  };

  Car.prototype.getSpeedNow = function() {
    return this.speednow
  };

  Car.prototype.getColor = function() {
    return this.color
  };

  Car.prototype.getBrand = function() {
    return this.make
  };

  Car.prototype.getPrice = function() {
    return `${this.price}jt` 
  };

  Car.prototype.getAllDataCar = function() {
      return {
          brand : this.make,
          color: this.color,
          price: `${this.price}jt`,
          speed: `${this.speed}km/jam` 
      }
  }

  // Method  
  Car.prototype.accelerate = function() {
    this.speednow += 10;
  };
  
  Car.prototype.brake = function() {
    this.speednow -= 10;
  };

  Car.prototype.changeColor = function(color) {
      this.color = color
  }
  
  
// Instantiate a new car object
const myCar = new Car("Mobil A", "Merah", 120, 300, "Toyota");

console.log(myCar.getSpeed()); // Logs 10
console.log(myCar.getColor()); 
console.log(myCar.getBrand()); 
console.log(myCar.getPrice()); 
console.log(myCar.getAllDataCar());


// method color
console.log('Warna Sebelumnya :', myCar.getColor()); 
myCar.changeColor('Blue')
console.log('Warna Sesudahnya :', myCar.getColor()); 


// method speed
console.log('speed :', myCar.getSpeedNow()); 
myCar.accelerate()
console.log('speed :', myCar.getSpeedNow());
myCar.accelerate()
console.log('speed :', myCar.getSpeedNow());
myCar.accelerate()
console.log('speed :', myCar.getSpeedNow()); 
myCar.brake()
console.log('rem')
console.log('speed :', myCar.getSpeedNow()); 