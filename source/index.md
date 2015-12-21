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
    "count": 63597252,
    "response": [
        {
            "id": 99557642,
            "name": "similique atque in"
        },
        {
            "id": 71855931,
            "name": "aut eveniet ex"
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
    "description": "est amet enim et et",
    "image_url": "quia",
    "id": 63139034,
    "genre_list": [
        "quia",
        "quia repellendus",
        "aut",
        "voluptatem ea sapiente soluta et",
        "et"
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
  -X POST -d '{"token":{"email":"corporis","password":"ea quos earum quis quidem"}}'
```

```json
{
    "token": {
        "email": "corporis",
        "password": "ea quos earum quis quidem"
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
    "response": "ex exercitationem"
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
  -X POST -d '{"title":"AcrMrJBubHRiwr CXjOAfUeBaQgoKHdMrLcYrVxTePNpWsuCuiwThBoymLHKmpDQqyFun","arrangement_id":null,"tags":["consequatur eos cumque molestiae","natus praesentium ut nostrum est","sunt et quo","veritatis illum"],"desired_length":47078055}'
```

```json
{
    "title": "AcrMrJBubHRiwr CXjOAfUeBaQgoKHdMrLcYrVxTePNpWsuCuiwThBoymLHKmpDQqyFun",
    "arrangement_id": null,
    "tags": [
        "consequatur eos cumque molestiae",
        "natus praesentium ut nostrum est",
        "sunt et quo",
        "veritatis illum"
    ],
    "desired_length": 47078055
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
    "title": "culpa sint ex vitae occaecati",
    "musical_mode": "Ionian",
    "arrangement_id": 24871639,
    "timeline_url": "non inventore sed",
    "mp3": "illo similique doloribus",
    "status_channel": "eligendi"
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
    "count": 34513667,
    "response": [
        {
            "id": 25922410,
            "title": "et at et amet",
            "status": "processing",
            "mp3_url": null,
            "arrangement_name": "quidem distinctio est"
        },
        {
            "id": 85111158,
            "title": "quia eligendi",
            "status": "ready",
            "mp3_url": null,
            "arrangement_name": "maiores aut impedit adipisci"
        },
        {
            "id": 42042199,
            "title": "sint inventore",
            "status": "processing",
            "mp3_url": null,
            "arrangement_name": "explicabo sed aut vel ut"
        },
        {
            "id": 72333900,
            "title": "amet doloribus delectus fugit ea",
            "status": "processing",
            "mp3_url": null,
            "arrangement_name": "magni reiciendis maxime"
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
    "id": 96065749
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
    "id": 82796670,
    "title": "fugit eius similique",
    "status": "ready",
    "mp3_url": null,
    "arrangement_name": "consectetur accusantium unde",
    "timeline_url": "maxime dolor ea"
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
