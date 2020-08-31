x = 0
y = 0
coord: List[number] = []
sideLength = 5
direction = 0
offset = 0
def mapCoord(distance: number, offset: number, direction: number):
    global x, y, coord
    # east
    if direction == 0: coord = [distance, offset]
    # south
    elif direction == 1:  coord = [4 - offset, distance]
    # west
    elif direction == 2:  coord = [4 - distance, 4 - offset]
    # north
    elif direction == 3:  coord = [offset, 4 - distance]
    return coord
def plotCoord(coord, brightness = 255):
    led.plot_brightness(coord[0], coord[1], brightness)
def shoot():
    global direction, offset, sideLength
    direction = randint(0, 3)
    offset = randint(0, sideLength - 1)
    for distance in range(sideLength + 2):
        plotCoord(mapCoord(distance - 2, offset, direction), 0)
        plotCoord(mapCoord(distance - 1, offset, direction), 50)
        plotCoord(mapCoord(distance, offset, direction), 200)
        basic.pause(100)

def on_forever():
    shoot()
basic.forever(on_forever)
