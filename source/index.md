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
    "count": 3009025,
    "response": [
        {
            "id": 99064806,
            "name": "dicta beatae"
        },
        {
            "id": 94224493,
            "name": "minima necessitatibus distinctio sint"
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
    "description": "laudantium quis recusandae",
    "image_url": null,
    "id": 37342977,
    "genre_list": [
        "nesciunt explicabo et deleniti omnis",
        "aperiam optio ullam"
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
        "email": "non ullam consectetur",
        "password": "a sed vero"
    }
}'
```

```json
{
    "token": {
        "email": "non ullam consectetur",
        "password": "a sed vero"
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
    "response": "in"
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
    "title": "PxnrAQrJdIZshHKOxcHaLOmwuxJbJrMhuAuF oRWDudSnCPdlyPBlQei ArWYpZuV",
    "arrangement_id": 14135045,
    "tags": [
        "reprehenderit eius",
        "dicta sed",
        "expedita natus in",
        "nemo",
        "sed"
    ],
    "desired_length": 19404922
}'
```

```json
{
    "title": "PxnrAQrJdIZshHKOxcHaLOmwuxJbJrMhuAuF oRWDudSnCPdlyPBlQei ArWYpZuV",
    "arrangement_id": 14135045,
    "tags": [
        "reprehenderit eius",
        "dicta sed",
        "expedita natus in",
        "nemo",
        "sed"
    ],
    "desired_length": 19404922
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
    "title": "fugiat mollitia",
    "musical_mode": "Phrygian",
    "arrangement_id": null,
    "timeline_url": "nemo est ut quia consequatur",
    "mp3": "omnis nostrum adipisci",
    "status_channel": "quidem"
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
    "count": 45771285,
    "response": [
        {
            "id": 49965776,
            "title": "adipisci et",
            "status": "ready",
            "mp3_url": "voluptas earum voluptatem consequatur",
            "arrangement_name": "laboriosam atque cumque"
        },
        {
            "id": 64010685,
            "title": "quas",
            "status": "processing",
            "mp3_url": "ab",
            "arrangement_name": "ut"
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
    "id": 61641500,
    "title": "ex quis voluptas nulla",
    "status": "processing",
    "mp3_url": null,
    "arrangement_name": "consequatur repellendus non dolore voluptatem"
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
