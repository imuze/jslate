---
title: API Reference

language_tabs:

  - shell

  - json

  - python

  - ruby


toc_footers:
  - <a href="mailto:developers@imuze.io?Subject=Request a Developer Key" target="_top">Request a Developer Key</a>

includes:
  - errors

search: true
---

# Introduction

This is an alpha version of the iMuze API. The iMuze API lets you generate songs on demand. A song is based on a melody. A melody is unique. Melodies can be interpreted by any iMuze arrangements, classical, rock, hip-hop etc ... </br> You can access existing arrangements either by ids (after listing them) or by tags. You will need to register as a developer before using the API.</br> <h1>Step By Step Instructions</h1> <ul><li>Authenticate : get your token</li><li>List the arrangements</li><li>Create a song with your parameters</li><li>Wait until the status is 'ready' on song#show</li><li>Then get the mp3 url</li><li>Download the mp3</li><li>Listen and enjoy</li></ul> 

# Arrangements

## Index arrangements



```shell
curl "https://api.imuze.io/api/4/arrangements"
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
    "count": 74444134,
    "response": [
        {
            "id": 823127,
            "name": "quos deserunt tenetur"
        },
        {
            "id": 33498342,
            "name": "necessitatibus accusamus saepe veniam omnis"
        }
    ]
}
```

This endpoint retrieves a list of arrangements.

### HTTP Request

`GET https://api.imuze.io/api/4/arrangements`

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
curl "https://api.imuze.io/api/4/arrangements/:id"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X GET -d '{
    "id": 78020492
}'
```

```json
{
    "id": 78020492
}
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
    "description": "omnis",
    "image_url": null,
    "id": 14171879,
    "genre_list": [
        "iste quidem est",
        "ullam vitae quia",
        "consequatur voluptatem similique"
    ]
}
```

This endpoint shows an arrangement.

### HTTP Request

`GET https://api.imuze.io/api/4/arrangements/:id`

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
curl "https://api.imuze.io/api/4/tokens"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "token": {
        "email": "itaque esse",
        "password": "ut sint sit aliquid"
    }
}'
```

```json
{
    "token": {
        "email": "itaque esse",
        "password": "ut sint sit aliquid"
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
    "response": "et"
}
```

This endpoint permits a registered user to authenticate.

### HTTP Request

`POST https://api.imuze.io/api/4/tokens`

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
curl "https://api.imuze.io/api/4/songs"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "title": "HQdHoqjcPXpSJiHSOogxrSJIxoCvWxIGrmab zQRWfkccwSQinqnqrnZYUdJmduYQW zbiqRnXBG",
    "arrangement_id": 54430261,
    "tags": [
        "voluptatem numquam sint",
        "in id sed",
        "veniam voluptatem architecto"
    ],
    "desired_length": 93304488
}'
```

```json
{
    "title": "HQdHoqjcPXpSJiHSOogxrSJIxoCvWxIGrmab zQRWfkccwSQinqnqrnZYUdJmduYQW zbiqRnXBG",
    "arrangement_id": 54430261,
    "tags": [
        "voluptatem numquam sint",
        "in id sed",
        "veniam voluptatem architecto"
    ],
    "desired_length": 93304488
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
    "title": "dicta eum",
    "musical_mode": "Locrian",
    "arrangement_id": 86293133,
    "timeline_url": "ullam velit omnis",
    "mp3": "accusantium aliquid",
    "status_channel": "sunt quo",
    "id": 9765394
}
```

This endpoint create a song.

### HTTP Request

`POST https://api.imuze.io/api/4/songs`

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
curl "https://api.imuze.io/api/4/songs"
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
    "count": 58887924,
    "response": [
        {
            "id": 94262179,
            "title": "voluptas non dignissimos",
            "status": "processing",
            "mp3_url": "id cupiditate molestias quo numquam",
            "arrangement_name": "voluptas eum voluptatum"
        },
        {
            "id": 65386972,
            "title": "facilis non est consectetur in",
            "status": "processing",
            "mp3_url": "sunt quibusdam vitae aliquam qui",
            "arrangement_name": "qui"
        }
    ]
}
```

This endpoint retrieves a list of songs.

### HTTP Request

`GET https://api.imuze.io/api/4/songs`

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
curl "https://api.imuze.io/api/4/songs/:id"
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
    "id": 6866063,
    "title": "nisi illo et",
    "status": "processing",
    "mp3_url": "sequi",
    "arrangement_name": "laboriosam fuga aut dolores non",
    "timeline_url": "soluta"
}
```

This endpoint shows a song.

### HTTP Request

`GET https://api.imuze.io/api/4/songs/:id`

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
