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
aim = 0

# iterating over list of lists to get the direction and and magnitude of position change
for i in range(0, len(control_list)):
    control = control_list[i]
    if control[0] == "forward":
        x += int(control[1])
        y += aim * int(control[1])
    if control[0] == "up":
        aim -= int(control[1])
    if control[0] == "down":
        aim += int(control[1])

# calculating final position
print(x*y)
