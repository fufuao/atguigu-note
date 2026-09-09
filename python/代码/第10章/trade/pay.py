# 支付超时时间
timeout = 1800

# 微信支付
def wechat_pay():
    print('我是微信支付！')

# 支付宝支付
def ali_pay():
    print('我是支付宝支付！')

# 提示函数
def show_info():
    print('我是来自【支付】模块的提示！')

# print('我是pay模块打印的内容', __name__)

#     wechat_pay()
#     ali_pay()

# 测试代码【模块文件 直接运行的这个文件 怎样写不影响其他引入的操作调用】
# if __name__ == '__main__':
#     wechat_pay()
#     ali_pay()