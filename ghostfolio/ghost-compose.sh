#!/bin/ash

docker compose --env-file /etc/docker-secrets/ghostfolio.env "$@"

