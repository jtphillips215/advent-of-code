# creating list
depth_list = []

# importing the data set
file = open("day1.txt", "r")

# iterating over data set to add to list
for line in file:
    depth = int(line)
    depth_list.append(depth)

# setting a counter and previous variable
previous = None
increased = 0

# iterating over and returning the count of increased depths
for depth in depth_list:
    if not previous:
        previous = depth
        continue
    elif depth > previous:
        increased += 1
        previous = depth
    else:
        previous = depth

print(increased)
