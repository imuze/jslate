---
title: API Reference

language_tabs:

  - shell

  - json

  - python

  - ruby


toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true
---

# Introduction

This is an alpha version of the iMuze API. The iMuze API lets you generate songs on demand. A song is based on a melody. A melody is unique. Melodies can be interpreted by any iMuze arrangements, classical, rock, hip-hop etc ... </br> You can access existing arrangements either by ids (after listing them) or by tags. You will need to register as a developer before using the API.

# Arrangements

## Index arrangements



```shell
curl "https://api.imuze.io/arrangements"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X GET -d '{}'
```

```json
{}
```

```python
import imuze

api = imuze.authorize("API_KEY_EXAMPLE")
api.arrangements.get()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('API_KEY_EXAMPLE')
api.arrangements.get
```



> The above command returns JSON structured like this:

```moonscript
{
    "count": 98513059,
    "response": [
        {
            "id": 5153464,
            "name": "illo dignissimos maiores quos"
        },
        {
            "id": 68989938,
            "name": "et ab incidunt nemo"
        },
        {
            "id": 87750698,
            "name": "dolores et in nobis occaecati"
        }
    ]
}
```

This endpoint retrieves a list of arrangements.

### HTTP Request

`GET https://api.imuze.io/arrangements`

### Query Parameters

Parameter | Type
--------- | -----------


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
## Show an arrangement



```shell
curl "https://api.imuze.io/arrangements/:id"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X GET -d '{}'
```

```json
{}
```

```python
import imuze

api = imuze.authorize("API_KEY_EXAMPLE")
api.arrangements.get()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('API_KEY_EXAMPLE')
api.arrangements.get
```



> The above command returns JSON structured like this:

```moonscript
{
    "description": "mollitia maxime non dolor voluptatum",
    "image_url": "consequatur minima",
    "id": 33511861,
    "genre_list": [
        "sit ab asperiores nulla sint"
    ]
}
```

This endpoint shows an arrangement.

### HTTP Request

`GET https://api.imuze.io/arrangements/:id`

### Query Parameters

Parameter | Type
--------- | -----------
id | integer


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
# Authentication

## Token



```shell
curl "https://api.imuze.io/tokens"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "token": {
        "email": "et maiores incidunt",
        "password": "voluptas"
    }
}'
```

```json
{
    "token": {
        "email": "et maiores incidunt",
        "password": "voluptas"
    }
}
```

```python
import imuze

api = imuze.authorize("API_KEY_EXAMPLE")
api.authentication.post()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('API_KEY_EXAMPLE')
api.authentication.post
```



> The above command returns JSON structured like this:

```moonscript
{
    "response": "laudantium molestiae nemo placeat"
}
```

This endpoint permits a registered user to authenticate.

### HTTP Request

`POST https://api.imuze.io/tokens`

### Query Parameters

Parameter | Type
--------- | -----------
token | 


<aside class="notice">
Required properties are : token
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
# Songs

## Create a song



```shell
curl "https://api.imuze.io/songs"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "title": "mZTmcaGMrKMZYxphrhpsSEoc",
    "arrangement_id": 59136968,
    "tags": [
        "quasi vitae rerum dolorem eos",
        "sed",
        "et adipisci vero",
        "assumenda"
    ],
    "desired_length": 17756132
}'
```

```json
{
    "title": "mZTmcaGMrKMZYxphrhpsSEoc",
    "arrangement_id": 59136968,
    "tags": [
        "quasi vitae rerum dolorem eos",
        "sed",
        "et adipisci vero",
        "assumenda"
    ],
    "desired_length": 17756132
}
```

```python
import imuze

api = imuze.authorize("API_KEY_EXAMPLE")
api.songs.post()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('API_KEY_EXAMPLE')
api.songs.post
```



> The above command returns JSON structured like this:

```moonscript
{
    "title": "architecto sed consequatur",
    "musical_mode": "Locrian",
    "arrangement_id": 5535367,
    "timeline_url": "dolorem animi qui reiciendis maxime",
    "mp3": "animi error temporibus magni nulla",
    "status_channel": "quae aut praesentium"
}
```

This endpoint create a song.

### HTTP Request

`POST https://api.imuze.io/songs`

### Query Parameters

Parameter | Type
--------- | -----------
title | string
arrangement_id | 
tags | array
desired_length | integer


<aside class="notice">
Required properties are : title,arrangement_id,tags,desired_length
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
## Index songs



```shell
curl "https://api.imuze.io/songs"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X GET -d '{}'
```

```json
{}
```

```python
import imuze

api = imuze.authorize("API_KEY_EXAMPLE")
api.songs.get()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('API_KEY_EXAMPLE')
api.songs.get
```



> The above command returns JSON structured like this:

```moonscript
{
    "count": 59852349,
    "response": [
        {
            "id": 12547480,
            "title": "voluptate",
            "status": "processing",
            "mp3_url": null,
            "arrangement_name": "et aut aut"
        },
        {
            "id": 36836158,
            "title": "rerum",
            "status": "ready",
            "mp3_url": null,
            "arrangement_name": "hic assumenda et"
        },
        {
            "id": 66665075,
            "title": "qui",
            "status": "processing",
            "mp3_url": null,
            "arrangement_name": "inventore consequuntur"
        }
    ]
}
```

This endpoint retrieves a list of songs.

### HTTP Request

`GET https://api.imuze.io/songs`

### Query Parameters

Parameter | Type
--------- | -----------


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
## Show a song



```shell
curl "https://api.imuze.io/songs/:id"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X GET -d '{
    "id": 1958044
}'
```

```json
{
    "id": 1958044
}
```

```python
import imuze

api = imuze.authorize("API_KEY_EXAMPLE")
api.songs.get()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('API_KEY_EXAMPLE')
api.songs.get
```



> The above command returns JSON structured like this:

```moonscript
{
    "id": 53559451,
    "title": "voluptate ad aut molestiae odit",
    "status": "ready",
    "mp3_url": null,
    "arrangement_name": "eveniet illum"
}
```

This endpoint shows a song.

### HTTP Request

`GET https://api.imuze.io/songs/:id`

### Query Parameters

Parameter | Type
--------- | -----------
id | integer


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
