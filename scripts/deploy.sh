#!/bin/bash

REPOSITORY_DIR=/home/ubuntu/app
APP_NAME=work-assistant-web
PID_PATH=$REPOSITORY_DIR/PID
PORT=3000

echo "change directory"

cd $REPOSITORY_DIR/$APP_NAME

# TODO: 접속할 때마다, node 버전이 바뀌는 원인 파악 후 없애기
echo "install node 16"
nvm install node 16

echo "git pull"

git pull

sudo kill $(sudo lsof -t -i:$PORT)

echo "new application deploy"

nohup npm start 0:$PORT &
