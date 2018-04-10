h = ['1', '2', '3', '4', '5']
k = ['54', '113', '5']
c = []
for i in h:
    for j in k:
        if int(i) + int(j) == 13:
            c.append(int(i) + int(j))
if 13 not in c:
    print('GAME OVER!'.center(100))
else:
    print('False')