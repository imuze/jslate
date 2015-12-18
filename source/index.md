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

This is an alpha version of the iMuze API. The iMuze API lets you generate songs on demand. A song is based on a melody. A melody is unique. Melodies can be interpreted by any iMuze arrangements, classical, rock, hip-hop etc ... </br> You can access existing arrangements either by ids (after listing them) or by tags. You will need to register as a developer before using the API.</br> <h1>How To Use</h1> <ul><li>1. Authenticate : get your token</li><li>2. List the arrangements</li><li>3. Create a song with your parameters</li><li>4. Wait until the status is 'ready' on Show song.</li><li>5. Then get the mp3 url</li><li>6. Download the mp3</li><li>7. Listen and enjoy</li></ul> 

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
    "count": 65451733,
    "response": [
        {
            "id": 8044733,
            "name": "harum nemo"
        },
        {
            "id": 51759531,
            "name": "nihil"
        },
        {
            "id": 89791761,
            "name": "quasi possimus veniam aliquam"
        },
        {
            "id": 19394728,
            "name": "aut dignissimos hic ut quaerat"
        },
        {
            "id": 26716779,
            "name": "quod molestiae"
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
    "description": "enim",
    "image_url": null,
    "id": 82429755,
    "genre_list": [
        "neque in sed",
        "reiciendis eos",
        "aut quas necessitatibus qui"
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
        "email": "soluta animi ab vitae eius",
        "password": "saepe et"
    }
}'
```

```json
{
    "token": {
        "email": "soluta animi ab vitae eius",
        "password": "saepe et"
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
    "response": "voluptate voluptatem"
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
    "title": "kEhJuRKpBEMbTQkrKYsSFntkSHNXoKcJvJXFXDxNykdAHXjsVOlpVbimFdklJOVNgBSMVGnEWDTWRXMWEqRGadnMaTwRMMA",
    "arrangement_id": null,
    "tags": [
        "veritatis tempora"
    ],
    "desired_length": 7395018
}'
```

```json
{
    "title": "kEhJuRKpBEMbTQkrKYsSFntkSHNXoKcJvJXFXDxNykdAHXjsVOlpVbimFdklJOVNgBSMVGnEWDTWRXMWEqRGadnMaTwRMMA",
    "arrangement_id": null,
    "tags": [
        "veritatis tempora"
    ],
    "desired_length": 7395018
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
    "title": "sed et temporibus",
    "musical_mode": "Locrian",
    "arrangement_id": null,
    "timeline_url": "aliquam libero et ut",
    "mp3": "molestiae ex eos incidunt",
    "status_channel": "ut cum dolor qui"
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
    "count": 19658483,
    "response": [
        {
            "id": 56601198,
            "title": "reiciendis sequi dolorem",
            "status": "processing",
            "mp3_url": null,
            "arrangement_name": "atque"
        },
        {
            "id": 76554110,
            "title": "aliquam velit",
            "status": "ready",
            "mp3_url": null,
            "arrangement_name": "totam consectetur eos et illo"
        },
        {
            "id": 68402850,
            "title": "at",
            "status": "processing",
            "mp3_url": null,
            "arrangement_name": "ratione dignissimos animi"
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
    "id": 61122506,
    "title": "est tempora et",
    "status": "processing",
    "mp3_url": null,
    "arrangement_name": "veniam architecto fugit quia",
    "timeline_url": "nobis"
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
