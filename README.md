# cassandra-web

Fork from https://github.com/orzhaha/cassandra-web with following modidications:
- Allow deploying behind reverse proxy (e.g Kong API gateway) at specific context path (e.g /cassandra-web/)
- Fix bug "could not resolve host github.com" when using Docker on MacOS
- Incorrect client dist directory
- Some style modifications
## Demo
![index](webui.gif)

## Features
* Theme Dark
* Table Row Prev Next Page
* Table Row Edit
* Table Row filter
* Table Row Delete
* Table Rown Find
* Table Definition
* Table Export
* Table Import
* CQL Query

---

## Supported Cassandra Versions
------------------

 2.1.x | 2.2.x | 3.x.x
 -------| ------| ---------
 yes | yes | yes



---

## Usage

download
```
$ wget https://github.com/orzhaha/cassandra-web/releases/download/v1.0.5/linux.tar.gz
```

unzip
```
$ tar zxvf linux.tar.gz
```

npm install 
```
$ cd client && npm i && npm run build
```

run service
```
$ ./service -c config.yaml
```

#### depend

cqlsh 

---

## Docker

```sh
docker pull nttoan26/cassandra-web
```
##### Environment

* HOST_PORT: ":80"
* CASSANDRA_HOST: cassandra
* CASSANDRA_PORT: 9042
* CASSANDRA_USERNAME: username
* CASSANDRA_PASSWORD: password

---

## API

API [Doc](./Doc.md)

