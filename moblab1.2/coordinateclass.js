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
        return `${this.degrees}°${this.minutes}′${this.seconds}″ ${route}`
    }

    toDecimal = () => {
        let route;
        this.direction === 'latitude' 
        ? (this.degrees >= 0 ? route = "N" : route = "S") 
        : (this.degrees >= 0 ? route = "E" : route = "W");
        return `${this.degrees + this.minutes / 60 + this.seconds / 3600}″ ${route}`
    }

    middleCoordinate = ({ direction, degrees, minutes, seconds }) =>
        this.direction === direction 
        ? CoordinateGV.customValues(
            direction,
            eval((this.degrees + degrees)/2),
            eval((this.minutes + minutes)/2),
            eval((this.seconds + seconds)/2),
            )
        : null
}

const coord0 = new CoordinateGV
const coord1 = CoordinateGV.customValues("latitude", 23, 37, 20);
const coord2 = CoordinateGV.customValues("latitude", 70, 59, 10);
const coord3 = coord1.middleCoordinate(coord2);
console.log("'First coordinate:'",coord1.toDecimal(), coord1.toString())
console.log("'Second coordinate:'",coord2.toDecimal(), coord2.toString())
console.log('Middle coordinate:',coord3)
console.log(coord0.toString())

