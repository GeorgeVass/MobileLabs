class CoordinateNL {
    constructor(deg = 0, min = 0, sec = 0, dir) {
      this.deg = deg;
      this.sec = sec;
      this.min = min;
      this.dir = dir;
    }
    Direction = {
      longitude: 1,
      lattitude: 0,
    };
  
    checker() {
      if (this.sec < 0 || this.sec > 59) {
        throw "error";
      }
      if (this.min < 0 || this.min > 59) {
        throw "error";
      }
      if (this.dir === this.Direction.longitude) {
        if (this.deg < -90 || this.deg > 90) {
          throw "error";
        }
      } else {
        if (this.deg < -180 || this.deg > 180) {
          throw "error";
        }
      }
    }
    stringer() {
      let way;
      if (this.dir === this.Direction.longitude) {
         this.deg <= 90 && this.deg >= 0 ? way = "N" : way = "S";
      } else {
        this.deg <= 180 && this.deg >= 0 ? way = "E" : way = "W";
      }
      return `${Math.abs(this.deg)}°:${this.min}‘:${this.sec}” ${way}`;
    }
    decimal() {
      let way;
      let decimal = (this.deg * 3600 + this.min * 60 + this.sec) / 3600;
      if (this.dir === this.Direction.longitude) {
        (this.deg <= 90 && this.deg >= 0) ? (way = "N") : (way = "S");
      } else {
        this.deg <= 180 && this.deg >= 0 ? (way = "E") : (way = "W");
      }
      return `${Math.abs(decimal)}° ${way}`;
    }
    static midCor(obj1, obj2) {
      if (obj1.dir != obj2.dir) {
        return null;
      } else {
        let midDeg, midMin, midSec, newDir;
        midDeg = Math.round((obj1.deg + obj2.deg) / 2);
        midMin = Math.abs((obj1.min + obj2.min) / 2);
        midSec = Math.abs((obj1.sec + obj2.sec) / 2);
        obj1.dir === 1 ? (newDir = "longitude") : "lattitude";
        return new CoordinateNL(midDeg, midMin, midSec, newDir);
      }
    }
    middleCor(deg, min, sec, dir) {
      if (sec < 0 || sec > 59) {
        throw "error";
      }
      if (min < 0 || min > 59) {
        throw "error";
      }
      if (dir != this.dir) {
        throw "different ways entered";
      }
      if (dir === this.Direction.longitude) {
        if (deg < -90 || deg > 90) {
          throw "error";
        }
      } else {
        if (deg < -180 || deg > 180) {
          throw "error";
        }
      }
      let newDir;
      dir === 1 ? (newDir = "longitude") : (newDir = "lattitude");
      let midDeg = Math.round((this.deg + deg) / 2);
      let midMin = Math.round((this.min + min) / 2);
      let midSec = Math.round((this.sec + sec) / 2);
      return new CoordinateNL(midDeg, midMin, midSec, newDir);
    }
  }
  let cor = new CoordinateNL(-12, 31, 43, 0);
  console.log(cor.checker());
  console.log(cor.stringer());
  console.log(cor.decimal());
  console.dir(cor.middleCor(85, 40, 50, 0));
  let cor1 = new CoordinateNL (12, 31, 43, 0);
  console.log(cor1)
  
 