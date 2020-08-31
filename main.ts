let x = 0
let y = 0
let coord : number[] = []
let sideLength = 5
let direction = 0
let offset = 0
function mapCoord(distance: number, offset: number, direction: number): number[] {
    
    //  east
    if (direction == 0) {
        coord = [distance, offset]
    } else if (direction == 1) {
        coord = [4 - offset, distance]
    } else if (direction == 2) {
        coord = [4 - distance, 4 - offset]
    } else if (direction == 3) {
        coord = [offset, 4 - distance]
    }
    
    //  south
    //  west
    //  north
    return coord
}

function plotCoord(coord: number[], brightness: number = 255) {
    led.plotBrightness(coord[0], coord[1], brightness)
}

function shoot() {
    
    direction = randint(0, 3)
    offset = randint(0, sideLength - 1)
    for (let distance = 0; distance < sideLength + 2; distance++) {
        plotCoord(mapCoord(distance - 2, offset, direction), 0)
        plotCoord(mapCoord(distance - 1, offset, direction), 50)
        plotCoord(mapCoord(distance, offset, direction), 200)
        basic.pause(100)
    }
}

basic.forever(function on_forever() {
    shoot()
})
