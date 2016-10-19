# Curl Web

### What is it?

Another [postman](https://www.getpostman.com/) or [paw](https://paw.cloud)

![curly-web-google](https://cloud.githubusercontent.com/assets/543507/19528112/ad94f66c-9622-11e6-9998-28fb3d1037f9.gif)

## Tasks


### Level 1

- [ ] Improve the design of the list of available queries (left side)
- [ ] Improve the design of the Query View
- [ ] Can edit the name of the queries
- [ ] Can clone queries
- [x] Persist queries on localStorage


### Level 2

- [ ] Add a global context
 - [x] Choose / manage environments (ie. default hostname)
 - [x] Persisted on localstorage
- [ ] Can lock queries (no further change on url & headers & params can be made unless you clone it)
- [ ] Create groups of queries
 - [ ] Automatically group queries by hostname
 - [ ] Create a new group manually and add queries to it
- [ ] Add Query History
 - [ ] list of recently triggered queries
 - [ ] last status of a query
- [ ] separate GET params from URL (we should be able to edit them like we do for headers)
- [ ] use flexbox instead of float-left or col-xx-n
- [ ] add tabs: ability to add new tabs to edit queries


### Level 3

- [ ] Create a query from scratch (no importer)
- [ ] Dynamic headers/params (`function(context, queries)`)
- [ ] pre-request scripts ( can trigger other queries and the result would be set in the context, useful to get a token before doing an API call )
- [ ] Oauth authentication
- [ ] shareable (via link)



### Level Hardcore

- [ ] use redux to handle queries manipulations
- [ ] ctrl-z [depends on redux]
- [ ] Create postman importer (this might require lots of internal changes to take into account most of the params)

- [x] fix the cors issue ( ie. create node/nginx proxy ) (sneaky fix: using electron)

- [ ] tests
 - [x] basic support (testing status code, content)
 - [ ] JSONschema
 - [ ] check any variable (like response time, size …)
 - [ ] full suite ( ie. run all queries and their tests in one go )


## Rules

- Should work on all modern browsers ( at least latest chrome, latest firefox )
- Only JSON. The body sent and data received are expected to be JSON only.
- Don't be shy: if you need external dependencies or if you need to refactor a large part of the code, go for it!
- Your ideas come first: if you think something should be done but is not in this list, do it!


## How to setup

```bash
git clone https://github.com/networklocum/curl-web.git
cd curl-web
npm install # this can take a while, thanks npm + electron (:
npm run build # you should run `npm run build:watch` in another tab so that your changes are taken into account.
npm start # will start an electron app
```

<img width="1438" alt="screen shot 2016-10-19 at 17 29 55" src="https://cloud.githubusercontent.com/assets/543507/19527909/ca47266e-9621-11e6-80f1-68ae25abfd05.png">



### Other commands

`npm run build:watch`
`npm test`
`npm run test:watch`
