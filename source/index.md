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
    "count": 93988271,
    "response": [
        {
            "id": 32167519,
            "name": "amet"
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
    "description": "modi aut dolorem",
    "image_url": "dolores quas libero",
    "id": 33231671,
    "genre_list": [
        "voluptatem",
        "velit fugit perferendis et",
        "aperiam",
        "iusto culpa"
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
        "email": "aut reiciendis a",
        "password": "quibusdam deleniti consequuntur deserunt"
    }
}'
```

```json
{
    "token": {
        "email": "aut reiciendis a",
        "password": "quibusdam deleniti consequuntur deserunt"
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
    "response": "quos et officia"
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
    "title": "zZUOuTSbSyhznfGrZGkdPlFGUOvWF fhPo clp",
    "arrangement_id": null,
    "tags": [
        "et",
        "ad inventore illum dicta adipisci"
    ],
    "desired_length": 27667958
}'
```

```json
{
    "title": "zZUOuTSbSyhznfGrZGkdPlFGUOvWF fhPo clp",
    "arrangement_id": null,
    "tags": [
        "et",
        "ad inventore illum dicta adipisci"
    ],
    "desired_length": 27667958
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
    "text_seed": "eaque voluptas eveniet laboriosam asperiores",
    "musical_mode": "Dorian",
    "arrangement_id": 20004004,
    "timeline": {
        "amplitude": -83026235,
        "lowest": 70046416,
        "keys": [
            {
                "duration": -36748666,
                "time": -32370751,
                "value": -10827399
            },
            {
                "duration": -36099690,
                "time": -8751106,
                "value": 71077323,
                "letter": "et"
            },
            {
                "duration": -33739887,
                "time": -72103314,
                "value": -58781449
            },
            {
                "duration": -22048148,
                "time": -65237477,
                "value": -16537460
            }
        ]
    },
    "mp3": "saepe autem voluptatum",
    "status_channel": "debitis",
    "id": 10114447
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
    "count": 52302869,
    "response": {
        "id": 20916658,
        "title": "est",
        "status": "ready",
        "mp3_url": null,
        "arrangement_name": "voluptas"
    }
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
    "id": 71308057,
    "title": "ex et et sunt eaque",
    "status": "ready",
    "mp3_url": "qui quo repudiandae vitae temporibus",
    "arrangement_name": "vel et suscipit non"
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
