# 1.Python 中的模块分为三类，分别是：标准库模块、自定义模块、第三方模块。
# 2.标准库模块：随着 Python 一起安装在我们电脑上的那些模块。
# 3.有一些标准库模块是用C语言实现的，这些用C语言实现的模块，又称：【内置模块】。


import copy     # 拷贝对象（浅拷贝、深拷贝）
import os       # 操作系统相关操作（文件、文件夹、路径系统层面的操作）
import random   # 随机数相关（生成随机数、随机选择、洗牌）
# print(copy.__file__)
# print(os.__file__)
# print(random.__file__)

# 如下的这些模块，属于内置模块（无法看到具体实现，也没有__file__属性）
import time     # 时间相关操作（获取时间、延时、格式化时间等。）
import math     # 数学相关（开平方、取绝对值 等等）
import sys      # Python 解释器相关操作

# 创建一个文件夹
# os.mkdir('demo')

# 随机选择一个人
# names = ['张三', '李四', '王五', '李华']
# print(random.choice(names))

# 洗牌
# names = ['张三', '李四', '王五', '李华']
# random.shuffle(names)
# print(names)

# 休眠
# time.sleep(2)
# print('ok')

# 获取当前时间
# print(time.strftime('%H:%M:%S'))
# print(time.strftime('%p %I:%M:%S'))

# 开平方
# print(math.sqrt(4))

# 取绝对值
# print(math.fabs(-11.2))

# 获取Python解释器的版本
# print(sys.version)


# 注意：
# 虚拟环境.vevn【隔离、只可以访问全局的标准库、访问不了第三方】
# 虚拟环境访问不了全局的第三方包，只能访问自己虚拟环境的第三方包

# 清华大学 https://pypi.tuna.tsinghua.edu.cn/simple
# 阿里云 https://mirrors.aliyun.com/pypi/simple
# 中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple

# pip install pyfiglet [PyPI] 从国外拉
# pip install -i https://mirrors.aliyun.com/pypi/simple pyfiglet

# 命令                                                  说明
# pip install 包名                                      安装指定的包。
# pip install -i 镜像地址 包名                           临时使用镜像地址安装指定包。
# pip config set global.index-url 地址                  设置 pip 所使用的镜像地址。
# pip config list                                      查看当前环境的 pip 配置。
# pip config unset global.index-url                    让 pip 恢复使用官方默认的地址。
# pip list                                             列出当前环境中，已安装的所有第三方包。
# pip uninstall 包名                                    从当前环境中卸载指定的第三方包。

# 1、虚拟环境装包
# C:\Users\tianyu\Desktop\test02>cd .venv
# C:\Users\tianyu\Desktop\test02\.venv>cd Scripts
# C:\Users\tianyu\Desktop\test02\.venv\Scripts>activate
# (.venv) C:\Users\tianyu\Desktop\test02\.venv\Scripts>pip install faker
# (.venv) C: \Users\tianyu \Desktop\test02>deactivate   # 退出虚拟环境
#
# 2、直接在idea终端安装，直接就安装到虚拟环境了。
#
#
# 3、点击idea右下角 点击解释器设置
















