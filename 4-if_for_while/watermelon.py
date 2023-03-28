# 0: NO
# 1: NO
# 2: NO
# 3: NO
# 4: YES
# 5: NO
# 6: YES
# 7: NO
# 8: YES

nummer = int(input())
if nummer >= 4:
    if nummer % 2 == 0:
        print("YES")
    else:
        print("NO")
else:
    print("NO")