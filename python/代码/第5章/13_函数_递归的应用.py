# 使用递归求阶乘
def factorial(num):
    if num == 0:
        return 1
    else:
        return num * factorial(num - 1)
# 调用函数，求5的阶乘
result = factorial(6)
print(result)

# 递归思想：把一个很大的事，拆解成无数个套路一样的小事
# 压栈和出栈