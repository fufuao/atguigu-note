# 使用递归打印n次“你好啊”（从大到小）
def welcome(n  ):
    print(f'你好啊{n}') # 【先打印后递归（先打印再下潜）】
    if n > 1:
        welcome(n - 1)
# 调用函数
welcome(5)

# 使用递归打印n次“你好啊”（从小到大）
def welcome(n):
    if n > 1:
        welcome(n - 1)
    print(f'你好啊{n}') # 【先递归后打印（先下潜再打印）】
# 调用函数
welcome(5)