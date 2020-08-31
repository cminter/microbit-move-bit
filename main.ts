let sideLength = 5
function mapCoord(distance: number, offset: number, direction: number): number[] {
    let coord : number[] = []
    if (direction == 0) {
        //  east
        coord = [distance, offset]
    } else if (direction == 1) {
        //  south
        coord = [4 - offset, distance]
    } else if (direction == 2) {
        //  west
        coord = [4 - distance, 4 - offset]
    } else if (direction == 3) {
        //  north
        coord = [offset, 4 - distance]
    }
    
    return coord
}

function shoot() {
    let direction = randint(0, 3)
    let offset = randint(0, sideLength - 1)
    let distance = 0
    while (distance <= sideLength + 2 - 1) {
        plotCoord(mapCoord(distance - 2, offset, direction), 0)
        plotCoord(mapCoord(distance - 1, offset, direction), 50)
        plotCoord(mapCoord(distance, offset, direction), 200)
        basic.pause(100)
        distance += 1
    }
}

function plotCoord(coord: number[], brightness: number = 255) {
    led.plotBrightness(coord[0], coord[1], brightness)
}

basic.forever(function on_forever() {
    shoot()
})
