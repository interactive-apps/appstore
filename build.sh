#!/usr/bin/env bash
ng build --prod --aot --build-optimizer
# mv dist/assets/manifest.webapp dist/
# cp -r dist/* /opt/dhis/config/apps/wisnpoa/
cd dist/hisptz-apps/
#Compress the file
echo "Compressing the file..."
zip -r -D hisptz-apps.zip .
echo "Successful installed the app"
echo "Copying zip file to home directory..."
sudo cp -r hisptz-apps.zip /home/ibrahim/
cd ~
echo "Uploading file to server..."
#sudo scp -r /home/ibrahim/nsmisportal.zip ibrahmwickama@197.149.178.106:nsmisportal.zip
sudo scp -r /home/ibrahim/hisptz-apps.zip ibrahmwickama@training.hisptz.org:hisptz-apps.zip
echo "Starting connection to server..."
ssh ibrahmwickama@training.hisptz.org