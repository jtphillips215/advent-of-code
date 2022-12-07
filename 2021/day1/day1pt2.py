# creating list
depth_list = []

# importing the data set
file = open("day1.txt", "r")

# iterating over data set to add to list
for line in file:
    depth = int(line)
    depth_list.append(depth)

# setting our variables
depth = None
prev_depth = None
two_back_depth = None
range_sum = 0
prev_sum = 0
increased = 0

# iterating over depth list, tracking sliding sum, and counting increases
for i in range(0, len(depth_list)):
    if i < 2:
        continue
    elif i == 2:
        depth = depth_list[i]
        prev_depth = depth_list[i - 1]
        two_back_depth = depth_list[i - 2]
        range_sum = depth + prev_depth + two_back_depth
    else:
        prev_sum = range_sum
        depth = depth_list[i]
        prev_depth = depth_list[i - 1]
        two_back_depth = depth_list[i - 2]
        range_sum = depth + prev_depth + two_back_depth

    if i > 2 and range_sum > prev_sum:
        increased += 1

print(increased)
