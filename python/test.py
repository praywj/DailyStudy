record = dict()


def backtrack(t):
    if t in record:  # 如果已经知道当前问题的解
        return record[t]  # 直接读取即可
    if t == 0:
        return 1
    if t < 0:  # 无效的时候没有解，所以返回0
        return 0
    tmp = 0  # tmp用于记录当前问题有多少个解
    for i in range(1, 7):  # 尝试所有的组合
        tmp += backtrack(t - i)
    record[t] = tmp  # 把解存起来，方便以后用
    return tmp


target = 4
backtrack(target)
print(record[target])
