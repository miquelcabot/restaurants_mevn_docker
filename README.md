# restaurants_mevn_docker
Web de restaurants amb MEVN sobre Docker.

## Quick Start

```bash
# Run in Docker
docker-compose up
# use -d flag to run in background

# Tear down
docker-compose down

# To re-build
docker-compose build
```

## MongoDB
Executar MongoDB i Mongo-Express
```
docker-compose up -d
```
Per accedir a Mongo-Express:
[http://localhost:8081](http://localhost:8081)
- Usuari: ```restaurants```
- Password: ```restaurants```

Per accedir a consola de Mongo:
```
docker exec -it restaurants_mongo mongo --username restaurants --password restaurants
help
show dbs
use restaurants
show collections
db.tags.find()
```