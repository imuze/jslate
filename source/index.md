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

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

# Arrangements

## Index arrangements



```shell
curl "https://imuze.io/arrangements"
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
    "arrangements": [
        {
            "name": "ut sunt ut nisi asperiores",
            "id": -58833527
        },
        {
            "name": "qui quo numquam ab similique"
        },
        {
            "id": -66499429
        },
        {
            "id": -87381292,
            "name": "at eos voluptate"
        }
    ]
}
```

This endpoint retrieves a list of arrangements.

### HTTP Request

`GET https://imuze.io/arrangements`

### Query Parameters

Parameter | Type
--------- | -----------


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — a happy kitten is an iMuze kitten!
</aside>
## Show an arrangement



```shell
curl "https://imuze.io/arrangements/:id"
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
    "arrangements": [
        {
            "id": -535590
        },
        {},
        {}
    ]
}
```

This endpoint shows an arrangement.

### HTTP Request

`GET https://imuze.io/arrangements/:id`

### Query Parameters

Parameter | Type
--------- | -----------
id | integer


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — a happy kitten is an iMuze kitten!
</aside>
# Songs

## createSongInput



```shell
curl "https://imuze.io/songs"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "text_seed": "magnam reprehenderit explicabo ipsum incidunt",
    "musical_mode": "Ionian",
    "arrangement_id": 15970227
}'
```

```json
{
    "text_seed": "magnam reprehenderit explicabo ipsum incidunt",
    "musical_mode": "Ionian",
    "arrangement_id": 15970227
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
    "text_seed": "numquam eum dolorem iste est",
    "musical_mode": "Mixolydia",
    "arrangement_id": null,
    "timeline": {
        "amplitude": -39272541,
        "lowest": -58557802,
        "keys": [
            {
                "duration": -54766220,
                "time": 3264738,
                "value": 21114115
            },
            {
                "duration": -69879021,
                "time": 82132032,
                "value": 69271583
            },
            {
                "duration": -61634673,
                "time": -77396819,
                "value": -13306298,
                "letter": "vero optio quos"
            },
            {
                "duration": -19633404,
                "time": 81843948,
                "value": -46099330
            },
            {
                "duration": 28255809,
                "time": 80030669,
                "value": -32983445,
                "letter": "vero aut"
            }
        ]
    },
    "mp3": "impedit",
    "status_channel": "minima esse doloremque illo",
    "id": 28828415
}
```

This endpoint create a song.

### HTTP Request

`POST https://imuze.io/songs`

### Query Parameters

Parameter | Type
--------- | -----------
text_seed | string
musical_mode | 
arrangement_id | 


<aside class="notice">
Required properties are : text_seed,musical_mode,arrangement_id
</aside>

<aside class="success">
Remember — a happy kitten is an iMuze kitten!
</aside>
## Delete a song



```shell
curl "https://imuze.io/songs/:id"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X DELETE -d '{
    "id": 10240623
}'
```

```json
{
    "id": 10240623
}
```

```python
import imuze

api = imuze.authorize("API_KEY_EXAMPLE")
api.songs.delete()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('API_KEY_EXAMPLE')
api.songs.delete
```



> The above command returns JSON structured like this:

```moonscript
{
    "id": -4298484
}
```

This endpoint deletes a song.

### HTTP Request

`DELETE https://imuze.io/songs/:id`

### Query Parameters

Parameter | Type
--------- | -----------
id | integer


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — a happy kitten is an iMuze kitten!
</aside>
## Index songs



```shell
curl "https://imuze.io/songs"
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
    "next": 29433177,
    "count": -66772087,
    "songs": [
        {
            "id": 87246354
        }
    ]
}
```

This endpoint retrieves a list of songs.

### HTTP Request

`GET https://imuze.io/songs`

### Query Parameters

Parameter | Type
--------- | -----------


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — a happy kitten is an iMuze kitten!
</aside>
## Show a song



```shell
curl "https://imuze.io/songs/:id"
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
    "id": 85224553,
    "title": "suscipit labore",
    "timeline": {
        "amplitude": -16969861,
        "lowest": 43199947,
        "keys": [
            {
                "duration": 99263196,
                "time": -36443261,
                "value": 37863815
            },
            {
                "duration": -38219842,
                "time": -76355172,
                "value": -32450595
            },
            {
                "duration": 66896300,
                "time": -37624619,
                "value": 87419094
            },
            {
                "duration": 26177789,
                "time": -8772643,
                "value": 22457401
            }
        ]
    }
}
```

This endpoint shows a song.

### HTTP Request

`GET https://imuze.io/songs/:id`

### Query Parameters

Parameter | Type
--------- | -----------
id | integer


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — a happy kitten is an iMuze kitten!
</aside>
# Tags

## Index tags



```shell
curl "https://imuze.io/tags"
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
api.tags.get()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('API_KEY_EXAMPLE')
api.tags.get
```



> The above command returns JSON structured like this:

```moonscript
{}
```

This endpoint retrieves a list of tags.

### HTTP Request

`GET https://imuze.io/tags`

### Query Parameters

Parameter | Type
--------- | -----------


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — a happy kitten is an iMuze kitten!
</aside>
# Users

## Create a user



```shell
curl "https://imuze.io/users"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "email": "voluptatum aliquam dolor esse debitis",
    "password": "recusandae vel",
    "birthdate": -47732115
}'
```

```json
{
    "email": "voluptatum aliquam dolor esse debitis",
    "password": "recusandae vel",
    "birthdate": -47732115
}
```

```python
import imuze

api = imuze.authorize("API_KEY_EXAMPLE")
api.users.post()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('API_KEY_EXAMPLE')
api.users.post
```



> The above command returns JSON structured like this:

```moonscript
{
    "email": "recusandae quibusdam optio repudiandae maxime",
    "id": 58647909,
    "token": "aspernatur"
}
```

This endpoint creates an user.

### HTTP Request

`POST https://imuze.io/users`

### Query Parameters

Parameter | Type
--------- | -----------
email | string
password | string
name | string
birthdate | integer


<aside class="notice">
Required properties are : email,password,birthdate
</aside>

<aside class="success">
Remember — a happy kitten is an iMuze kitten!
</aside>
## Delete a user



```shell
curl "https://imuze.io/users/:id"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X DELETE -d '{
    "id": 81646224
}'
```

```json
{
    "id": 81646224
}
```

```python
import imuze

api = imuze.authorize("API_KEY_EXAMPLE")
api.users.delete()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('API_KEY_EXAMPLE')
api.users.delete
```



> The above command returns JSON structured like this:

```moonscript
{
    "id": 38000603
}
```

This endpoint deletes a user.

### HTTP Request

`DELETE https://imuze.io/users/:id`

### Query Parameters

Parameter | Type
--------- | -----------
id | integer


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — a happy kitten is an iMuze kitten!
</aside>
## Create a user



```shell
curl "https://imuze.io/users/:id"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X PUT -d '{
    "name": "qui adipisci dolores et"
}'
```

```json
{
    "name": "qui adipisci dolores et"
}
```

```python
import imuze

api = imuze.authorize("API_KEY_EXAMPLE")
api.users.put()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('API_KEY_EXAMPLE')
api.users.put
```



> The above command returns JSON structured like this:

```moonscript
{
    "id": -39933344,
    "email": "accusantium neque maxime minus",
    "name": "ea voluptatem iusto",
    "birthdate": 50323479
}
```

This endpoint updates a user.

### HTTP Request

`PUT https://imuze.io/users/:id`

### Query Parameters

Parameter | Type
--------- | -----------
email | string
password | string
name | string
birthdate | integer


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — a happy kitten is an iMuze kitten!
</aside>
