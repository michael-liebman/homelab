#!/bin/ash

docker compose --env-file ../../secrets/ghostfolio.env "$@"

