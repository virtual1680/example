#!/bin/bash 

echo "打包文件"
yarn build
echo "传输文件"
scp -r ./dist/** root@10.10.1.12:/home/app/pages/community/admin
echo "部署成功"