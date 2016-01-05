##钵钰云服务


###文档目录结构

project/                         项目名称
├── src/                         生产源码目录
│   ├── sass/
│   ├── css/
│   ├── js/
│   ├── img/
│   ├── fonts/                  font icons
│   ├── data/                   测试数据
│   ├── apps/                   一些自定义的编译配置
│   └── page                    静态文件
├── assets/                     预编译输出目录（压缩合并优化过的代码）
│   ├── css/                    
│   ├── js/                     
│   ├── img/
│   ├── data/                   测试数据
│   └── templates               静态文件
├── docs/                       文档
│   └── example/                文档中用到的例子
├── README.md                   项目文档说明
├── node_modules/               gulpjs依赖文件
├── gulpfile.js                 gulp构建脚本
├── .jshintrc                   jshint配置文件
└── bower.json                  bower置文件
