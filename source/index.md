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

This is an alpha version of the iMuze API. The iMuze API lets you generate songs on demand. A song is based on a melody. A melody is unique. Melodies can be interpreted by any iMuze arrangements, classical, rock, hip-hop etc ... </br> You can access existing arrangements either by ids (after listing them) or by tags. You will need to register as a developer before using the API.</br> <h1>Step By Step Instructions</h1> <ul><li>Authenticate : get your token</li><li>List the arrangements</li><li>Create a song with your parameters, using one of the arrangement from the list above</li><li>Wait until the status is 'ready' on song#show</li><li>Then get the mp3 url</li><li>Download the mp3</li><li>Listen and enjoy</li></ul> 

# Arrangements

## Index arrangements



```shell
curl "https://api.imuze.io/api/4/arrangements"\
  -H "Content-Type: application/json"\
  -H "Authorization: Token API_KEY_EXAMPLE"\
  -X GET -d '{}'
```

```json
{}
```

```python
import imuze

api = imuze.authorize("Token API_KEY_EXAMPLE")
api.arrangements.get()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('Token API_KEY_EXAMPLE')
api.arrangements.get
```



> The above command returns JSON structured like this:

```moonscript
{
    "count": 70533796,
    "response": [
        {
            "id": 62169186,
            "name": "iusto vitae ullam necessitatibus quae"
        },
        {
            "id": 13768868,
            "name": "expedita perspiciatis cum"
        },
        {
            "id": 76468977,
            "name": "sequi in suscipit ut"
        },
        {
            "id": 9202688,
            "name": "sunt dignissimos"
        }
    ]
}
```

This endpoint retrieves a list of arrangements.

### HTTP Request

`GET https://api.imuze.io/api/4/arrangements`

### Query Parameters

Parameter | Type | Description
--------- | ----------- | -----------


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
## Show an arrangement



```shell
curl "https://api.imuze.io/api/4/arrangements/:id"\
  -H "Content-Type: application/json"\
  -H "Authorization: Token API_KEY_EXAMPLE"\
  -X GET -d '{}'
```

```json
{}
```

```python
import imuze

api = imuze.authorize("Token API_KEY_EXAMPLE")
api.arrangements.get()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('Token API_KEY_EXAMPLE')
api.arrangements.get
```



> The above command returns JSON structured like this:

```moonscript
{
    "description": "aut sunt",
    "image_url": null,
    "id": 80412349,
    "genre_list": [
        "asperiores ut",
        "qui sed minus illum rerum",
        "consequatur provident dolorem ut velit",
        "ut assumenda"
    ]
}
```

This endpoint shows an arrangement.

### HTTP Request

`GET https://api.imuze.io/api/4/arrangements/:id`

### Query Parameters

Parameter | Type | Description
--------- | ----------- | -----------
id | integer | The id of the arrangement.


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
# Authentication

## Token



```shell
curl "https://api.imuze.io/api/4/tokens"\
  -H "Content-Type: application/json"\
  -H "Authorization: Token API_KEY_EXAMPLE"\
  -X POST -d '{"token":{"email":"maxime ab non et commodi","password":"ea voluptatem vero odit"}}'
```

```json
{
    "token": {
        "email": "maxime ab non et commodi",
        "password": "ea voluptatem vero odit"
    }
}
```

```python
import imuze

api = imuze.authorize("Token API_KEY_EXAMPLE")
api.authentication.post()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('Token API_KEY_EXAMPLE')
api.authentication.post
```



> The above command returns JSON structured like this:

```moonscript
{
    "response": "quia"
}
```

This endpoint permits a registered user to authenticate.

### HTTP Request

`POST https://api.imuze.io/api/4/tokens`

### Query Parameters

Parameter | Type | Description
--------- | ----------- | -----------
token |  | 


<aside class="notice">
Required properties are : token
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
# Songs

## Create a song



```shell
curl "https://api.imuze.io/api/4/songs"\
  -H "Content-Type: application/json"\
  -H "Authorization: Token API_KEY_EXAMPLE"\
  -X POST -d '{"title":"tqvDjXdleqcLftHrqYirdVBfXAdxrtLGryBNSQdRapTwOtcuGCZlDzEdGdSNSIIxA","arrangement_id":null,"tags":["illum","qui earum dolorem","et inventore soluta modi"],"desired_length":98547212}'
```

```json
{
    "title": "tqvDjXdleqcLftHrqYirdVBfXAdxrtLGryBNSQdRapTwOtcuGCZlDzEdGdSNSIIxA",
    "arrangement_id": null,
    "tags": [
        "illum",
        "qui earum dolorem",
        "et inventore soluta modi"
    ],
    "desired_length": 98547212
}
```

```python
import imuze

api = imuze.authorize("Token API_KEY_EXAMPLE")
api.songs.post()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('Token API_KEY_EXAMPLE')
api.songs.post
```



> The above command returns JSON structured like this:

```moonscript
{
    "title": "voluptas ex rerum assumenda",
    "musical_mode": "Mixolydia",
    "arrangement_id": 54224573,
    "timeline_url": "dicta aut rerum",
    "mp3": "repellendus a non voluptatem minus",
    "status_channel": "expedita"
}
```

This endpoint create a song.

### HTTP Request

`POST https://api.imuze.io/api/4/songs`

### Query Parameters

Parameter | Type | Description
--------- | ----------- | -----------
title | string | The title is the musical seed of your song.
arrangement_id |  | 
tags | array | 
desired_length | integer | The desired duration of your song in senconds.


<aside class="notice">
Required properties are : title,arrangement_id,tags,desired_length
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
## Index songs



```shell
curl "https://api.imuze.io/api/4/songs"\
  -H "Content-Type: application/json"\
  -H "Authorization: Token API_KEY_EXAMPLE"\
  -X GET -d '{}'
```

```json
{}
```

```python
import imuze

api = imuze.authorize("Token API_KEY_EXAMPLE")
api.songs.get()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('Token API_KEY_EXAMPLE')
api.songs.get
```



> The above command returns JSON structured like this:

```moonscript
{
    "count": 15029696,
    "response": [
        {
            "id": 12330239,
            "title": "velit et",
            "status": "processing",
            "mp3_url": "dicta non nihil totam",
            "arrangement_name": "praesentium"
        },
        {
            "id": 9000991,
            "title": "alias facilis quam",
            "status": "ready",
            "mp3_url": "dolores",
            "arrangement_name": "sed id"
        }
    ]
}
```

This endpoint retrieves a list of songs.

### HTTP Request

`GET https://api.imuze.io/api/4/songs`

### Query Parameters

Parameter | Type | Description
--------- | ----------- | -----------


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
## Show a song



```shell
curl "https://api.imuze.io/api/4/songs/:id"\
  -H "Content-Type: application/json"\
  -H "Authorization: Token API_KEY_EXAMPLE"\
  -X GET -d '{}'
```

```json
{}
```

```python
import imuze

api = imuze.authorize("Token API_KEY_EXAMPLE")
api.songs.get()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('Token API_KEY_EXAMPLE')
api.songs.get
```



> The above command returns JSON structured like this:

```moonscript
{
    "id": 62105905,
    "title": "natus modi quam alias magnam",
    "status": "ready",
    "mp3_url": "voluptas occaecati autem",
    "arrangement_name": "fugiat",
    "timeline_url": "dignissimos exercitationem"
}
```

This endpoint shows a song.

### HTTP Request

`GET https://api.imuze.io/api/4/songs/:id`

### Query Parameters

Parameter | Type | Description
--------- | ----------- | -----------
id | integer | The id of the song.


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
