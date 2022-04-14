#!/bin/bash

echo "[+] Executing sql initialization sql request..."
sudo mysql -u root < ./app/sql/init/creating.sql > /dev/null
echo "[+] Done"