# Readme.md

####Steps
In root project folder ./

`$ npm install`

In client-scr project folder ./client-src

`$ npm install`

Run docker

`$ docker-compose up`

Run angular

`$ npm start`


Create a .env File in project root
```
	#Server
	DB_DATABASE=example
	DB_USERNAME=postgres
	DB_PASSWORD=postgres
	DB_HOST=db
	
	#DataBase
	POSTGRES_USER=postgres
	POSTGRES_DB=example
	POSTGRES_PASSWORD=postgres

	NODE_PATH=/usr/src/app/lib
	PUBLIC_URL=http://localhost:3000
```


Run migrations
`$ docker-compose exec server bash`

`$ npm run migrate up`

Docs:

Migrate-db docs: https://db-migrate.readthedocs.io/en/latest/

SDK for Loopback: https://github.com/mean-expert-official/loopback-sdk-builder

Boostrap: https://bootswatch.com/darkly/

###End
