class CoordinateGV {
    constructor(direction = 'latitude'  ) {
        this.direction = direction;
        this.degrees = 0;
        this.minutes = 0;
        this.seconds = 0;
    }

    static createWithValues(direction, degrees, minutes, seconds) {

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

        // let [dir, deg] = defineDirection(this.direction, this.degrees);
        // return `${deg + this.minutes / 60 + this.seconds / 3600}° ${dir}`;
    }

    middleCoordinate = ({ direction, degrees, minutes, seconds }) =>
        this.direction === direction 
        ? CoordinateGV.createWithValues(
            direction,
            eval((this.degrees + degrees)/2),
            eval((this.minutes + minutes)/2),
            eval((this.seconds + seconds)/2),
            )
        : null

    static middleTwoCoordinate = (coord1, coord2) => coord1.middleCoordinate(coord2)
}

const coordinate1 = CoordinateGV.createWithValues("latitude", 23, 37, 20);
const coordinate2 = CoordinateGV.createWithValues("latitude", 70, 59, 10);
const coordinate3 = coordinate1.middleCoordinate(coordinate2);
// console.log("coordinate 1 : \n", coordinate1, "\n");
// console.log("coordinate 2 : \n", coordinate2, "\n");
console.log("coordinate 1 toString : \n", coordinate1.toString(), "\n");
// console.log("coordinate 2 toString : \n", coordinate2.toString(), "\n");
// console.log("coordinate 1 toDecimal : \n", coordinate1.toDecimal(), "\n");
// console.log("coordinate 2 toDecimal : \n", coordinate2.toDecimal(), "\n");
console.log("1 and 2 middleCoordinate is coordinate 3: \n", coordinate3, "\n");
console.log("2 and 3 middleTwoCoordinate : \n", CoordinateGV.middleTwoCoordinate(coordinate2, coordinate3), "\n");
console.log(coordinate1.toDecimal())
