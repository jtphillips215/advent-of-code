# creating lists to hold data
control_list = []
line_list = []

# importing the data set
file = open("day2.txt", "r")

# iterating over data set to create list of lists
for line in file:
    line = line.strip("\n")
    line_list = line.split(" ")
    control_list.append(line_list)

# x and y "coordinates" variables
x = 0
y = 0

# iterating over list of lists to get the direction and and magnitude of position change
for i in range(0, len(control_list)):
    control = control_list[i]
    direction = control[0]
    delta = int(control[1])

    if direction == "forward":
        x += delta
    elif direction == "up":
        y -= delta
    elif direction == "down":
        y += delta

# calculating final position
print(x*y)
