class CoordinateGV {
    constructor(direction = 'latitude'  ) {
        this.direction = direction;
        this.degrees = 0;
        this.minutes = 0;
        this.seconds = 0;
    }

    static customValues(direction, degrees, minutes, seconds) {

        switch (direction) {
            case 'latitude':
                if (!(degrees >= -90 && degrees <= 90))
                    throw 'Entered degrees values are wrong';
                if ((degrees == 90 && minutes > 0 && seconds > 0) ||
                    (degrees == -90 && minutes > 0 && seconds > 0))
                    throw 'Entered values are wrong';
                break;

            case 'longitude':
                if (!(degrees >= -180 && degrees <= 180))
                    throw 'Entered degrees values are wrong';
                if ((degrees == 180 && minutes > 0 && seconds > 0) ||
                    (degrees == -180 && minutes > 0 && seconds > 0))
                    throw 'Entered values are wrong';
                break;

            default:
                throw "write 'longitude' or 'latitude' ";
        }

        if (!(minutes >= 0 && minutes <= 59))
            throw 'Wrong value of minutes';

        if (!(seconds >= 0 && seconds <= 59))
            throw 'Wrong value of seconds';

        const coordinate = new CoordinateGV(direction);
        coordinate.degrees = degrees;
        coordinate.minutes = minutes;
        coordinate.seconds = seconds;
        return coordinate;
    }

    toString = () => {
        let route;
        this.direction === 'latitude' 
        ? (this.degrees >= 0 ? route = "N" : route = "S") 
        : (this.degrees >= 0 ? route = "E" : route = "W");
        return `${Math.abs(this.degrees)}°${this.minutes}′${this.seconds}″ ${route}`
    }

    toDecimal = () => {
        let route;
        this.direction === 'latitude' 
        ? (this.degrees >= 0 ? route = "N" : route = "S") 
        : (this.degrees >= 0 ? route = "E" : route = "W");
        return `${Math.abs(this.degrees) + this.minutes / 60 + this.seconds / 3600}″ ${route}`
    }

    middleCoordinate = ({ direction, degrees, minutes, seconds }) =>
        this.direction === direction  ? ((this.degrees >= 0 && degrees >= 0) ?        
         CoordinateGV.customValues(
            direction,
            (this.degrees + degrees)/2,
            (this.minutes + minutes)/2,
            (this.seconds + seconds)/2
            )
         : CoordinateGV.customValues(
            direction,
            (this.degrees + degrees)/2,
            (this.minutes - minutes)/2,
            (this.seconds - seconds)/2
            ))   

        : null
}

const coord0 = new CoordinateGV
const coord1 = CoordinateGV.customValues("latitude", -35, 10, 40);
const coord2 = CoordinateGV.customValues("latitude", 20, 10, 40);
const coord3 = coord1.middleCoordinate(coord2);
console.log("'First coordinate:'",coord1.toDecimal(), coord1.toString())
console.log("'Second coordinate:'",coord2.toDecimal(), coord2.toString())
console.log('Middle coordinate:',coord3)
console.log(coord0.toString())

