x = 0
y = 0
coord: List[number] = []
direction = 0
offset = 0
def dirCoord(distance: number, offset: number, direction: number):
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
def plotCoord(coord, mode = True):
    if mode:  led.plot(coord[0], coord[1])
    else:  led.unplot(coord[0], coord[1])
def shoot():
    global direction, offset
    direction = randint(0, 3)
    offset = randint(0, 4)
    for distance in range(6):
        coord1 = dirCoord(distance - 1, offset, direction)
        plotCoord(coord1, False)
        coord = dirCoord(distance, offset, direction)
        plotCoord(coord)
        basic.pause(100)

def on_forever():
    shoot()
basic.forever(on_forever)
