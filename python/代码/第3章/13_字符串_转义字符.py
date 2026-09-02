# 使用 \' 输出 '
# print('在Python中，可以使用\'包裹一个字符串')

# 使用 \" 输出 "
# print("在Python中，可以使用\"包裹一个字符串")

# 使用 \n 进行换行
# print('注册会员需要以下信息：\n姓名\n年龄\n手机号')

# 使用 \\ 输出 \
# print('D:\\nice')

# 使用 \b 删除前一个字符 【hello】
# print('helloo\b')

# 使用 \r 使光标回到本行开头，覆盖输出 【68%】
# print('67%\r68%')

# 使用 \t 表示水平制表符（让光标跳转到下一个制表位）
# print('1234123412341234')
# print('ab\tcd')
# print('abc\td')
# print('abcd\ta')
# print('我是\t中文')

print('12341234123412341234')
print('姓名\t性别\t\t年龄')
print('张三\t男\t\t18')
print('李四\t女\t\t25')
print('王五\t男\t\t32')

# 练习
# .expandtabs(4) 表示制表位是4
# 占位，一个汉字占两个英文的位置
print('aa\taa'.expandtabs(4))
print('aaa\ta'.expandtabs(4))
print('a\taaa'.expandtabs(4))
