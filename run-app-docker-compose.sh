#!/bin/bash

IP=$(hostname -I | awk '{print $1}')

sed -i "s/192.168.X.XXX/$IP/g" ./Dockerfile-reactnative
sed -i "s/192.168.X.XXX/$IP/g" ./docker-compose.yml

sed -i "s/192.168.X.XXX/$IP/g" ./server/src/controllers/ItemsControllers.ts
sed -i "s/192.168.X.XXX/$IP/g" ./server/src/controllers/PointsControllers.ts

sed -i "s/192.168.X.XXX/$IP/g" ./mobile/src/services/api.ts

echo 'IP da aplicacao alterado para: ' $IP

docker-compose up
