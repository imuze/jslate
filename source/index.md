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
    "count": 65254191,
    "response": [
        {
            "id": 69532568,
            "name": "distinctio autem deserunt commodi"
        },
        {
            "id": 45782199,
            "name": "consequatur in quis omnis ea"
        },
        {
            "id": 17921329,
            "name": "quia"
        },
        {
            "id": 19101081,
            "name": "facilis libero exercitationem"
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
An authentication token is required for this route.
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
## Show an arrangement



```shell
curl "https://api.imuze.io/api/4/arrangements/:id"\
  -H "Content-Type: application/json"\
  -H "Authorization: Token API_KEY_EXAMPLE"\

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
    "description": "quia ipsa laudantium atque praesentium",
    "image_url": null,
    "id": 92277794,
    "genre_list": [
        "nulla adipisci libero tenetur",
        "sed"
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
An authentication token is required for this route.
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
# Authentication

## Token



```shell
curl "https://api.imuze.io/api/4/tokens"\
  -H "Content-Type: application/json"\

  -X POST -d '{"token":{"email":"omnis et consectetur","password":"dicta"}}'
```

```json
{
    "token": {
        "email": "omnis et consectetur",
        "password": "dicta"
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
    "response": "vitae et pariatur"
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

# Songs

## Create a song



```shell
curl "https://api.imuze.io/api/4/songs"\
  -H "Content-Type: application/json"\
  -H "Authorization: Token API_KEY_EXAMPLE"\
  -X POST -d '{"title":"rbKrMWawjCpfNOOiZFFdIk","arrangement_id":87474901,"tags":["voluptatem eos","harum ut officia exercitationem"],"desired_length":6547829}'
```

```json
{
    "title": "rbKrMWawjCpfNOOiZFFdIk",
    "arrangement_id": 87474901,
    "tags": [
        "voluptatem eos",
        "harum ut officia exercitationem"
    ],
    "desired_length": 6547829
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
    "title": "aut",
    "musical_mode": "Mixolydia",
    "arrangement_id": 41640531,
    "timeline_url": "sed",
    "mp3": "consequatur nisi aut mollitia explicabo",
    "status_channel": "est officia cumque maxime voluptate"
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
An authentication token is required for this route.
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
## Index songs



```shell
curl "https://api.imuze.io/api/4/songs"\
  -H "Content-Type: application/json"\
  -H "Authorization: Token API_KEY_EXAMPLE"\

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
    "count": 93026263,
    "response": [
        {
            "id": 90195378,
            "title": "mollitia",
            "status": "processing",
            "mp3_url": null,
            "arrangement_name": "fuga sint corporis ullam"
        },
        {
            "id": 147943,
            "title": "tenetur eaque ad",
            "status": "ready",
            "mp3_url": null,
            "arrangement_name": "quia in voluptate possimus"
        },
        {
            "id": 47016215,
            "title": "optio",
            "status": "ready",
            "mp3_url": null,
            "arrangement_name": "quo perferendis tempora et"
        },
        {
            "id": 18052930,
            "title": "dolor corrupti autem",
            "status": "ready",
            "mp3_url": null,
            "arrangement_name": "nihil sit qui voluptas nisi"
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
An authentication token is required for this route.
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
## Show a song



```shell
curl "https://api.imuze.io/api/4/songs/:id"\
  -H "Content-Type: application/json"\
  -H "Authorization: Token API_KEY_EXAMPLE"\

```

```json
{
    "id": 22195342
}
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
    "id": 37295388,
    "title": "sint sed nihil sapiente",
    "status": "ready",
    "mp3_url": "enim",
    "arrangement_name": "ipsam praesentium cupiditate aliquid",
    "timeline_url": "quam ea"
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
An authentication token is required for this route.
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
