let x = 0
let y = 0
let coord : number[] = []
let direction = 0
let offset = 0
function dirCoord(distance: number, offset: number, direction: number): number[] {
    
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

function plotCoord(coord: number[], mode: boolean = true) {
    if (mode) {
        led.plot(coord[0], coord[1])
    } else {
        led.unplot(coord[0], coord[1])
    }
    
}

function shoot() {
    let coord1: number[];
    let coord: number[];
    
    direction = randint(0, 3)
    offset = randint(0, 4)
    for (let distance = 0; distance < 6; distance++) {
        coord1 = dirCoord(distance - 1, offset, direction)
        plotCoord(coord1, false)
        coord = dirCoord(distance, offset, direction)
        plotCoord(coord)
        basic.pause(100)
    }
}

basic.forever(function on_forever() {
    shoot()
})
