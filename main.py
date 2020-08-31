sideLength = 5
def mapCoord(distance: number, offset: number, direction: number):
    coord: List[number] = []
    if direction == 0:  # east
        coord = [distance, offset]
    elif direction == 1:  # south
        coord = [4 - offset, distance]
    elif direction == 2:  # west
        coord = [4 - distance, 4 - offset]
    elif direction == 3:  # north
        coord = [offset, 4 - distance]
    return coord
def shoot():
    direction = randint(0, 3)
    offset = randint(0, sideLength - 1)
    distance = 0
    while distance <= sideLength + 2 - 1:
        plotCoord(mapCoord(distance - 2, offset, direction), 0)
        plotCoord(mapCoord(distance - 1, offset, direction), 50)
        plotCoord(mapCoord(distance, offset, direction), 200)
        basic.pause(100)
        distance += 1
def plotCoord(coord: List[number], brightness: number = 255):
    led.plot_brightness(coord[0], coord[1], brightness)

def on_forever():
    shoot()
basic.forever(on_forever)
