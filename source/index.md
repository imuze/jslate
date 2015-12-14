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
            "id": 31540481,
            "name": "quisquam qui rerum quos"
        },
        {
            "id": 32352646
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
Remember — Results may vary according to your authentication scope !
</aside>
## Show an arrangement



```shell
curl "https://imuze.io/arrangements/:id"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X GET -d '{
    "id": 17601693
}'
```

```json
{
    "id": 17601693
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
    "arrangements": [
        {},
        {
            "name": "soluta consequatur",
            "id": -39529905
        },
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
Remember — Results may vary according to your authentication scope !
</aside>
# Songs

## Createa a song



```shell
curl "https://imuze.io/songs"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "text_seed": "in laborum explicabo molestias inventore",
    "musical_mode": "Mixolydia",
    "arrangement_id": null
}'
```

```json
{
    "text_seed": "in laborum explicabo molestias inventore",
    "musical_mode": "Mixolydia",
    "arrangement_id": null
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
    "text_seed": "doloribus",
    "musical_mode": "Ionian",
    "arrangement_id": -85512468,
    "timeline": {
        "amplitude": -936035,
        "lowest": -87342209,
        "keys": [
            {
                "duration": 91552196,
                "time": 90598574,
                "value": -17710514,
                "letter": "id fugiat molestiae magni voluptatum"
            }
        ]
    },
    "mp3": "nihil modi sit inventore",
    "status_channel": "reprehenderit dolores sunt",
    "id": -86518723
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
Remember — Results may vary according to your authentication scope !
</aside>
## Delete a song



```shell
curl "https://imuze.io/songs/:id"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X DELETE -d '{}'
```

```json
{}
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
    "id": -27581073
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
Remember — Results may vary according to your authentication scope !
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
    "count": 77755893,
    "previous": -48928398,
    "next": 372282,
    "songs": [
        {},
        {
            "name": "ex eum laborum blanditiis ea",
            "id": -8046785
        },
        {
            "name": "vel dolores consequatur",
            "id": 73301593
        },
        {
            "name": "dicta et",
            "id": 58373263
        },
        {
            "id": -70857743
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
Remember — Results may vary according to your authentication scope !
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
    "timeline": {
        "amplitude": -24232272,
        "lowest": -31298316,
        "keys": [
            {
                "duration": -88921890,
                "time": -96258299,
                "value": -6207572,
                "letter": "laboriosam"
            },
            {
                "duration": 93728195,
                "time": 20413783,
                "value": 66301015
            },
            {
                "duration": -43306233,
                "time": 14974049,
                "value": -59875189
            }
        ]
    },
    "mp3": "magni expedita eos tenetur nemo"
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
Remember — Results may vary according to your authentication scope !
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
{
    "count": 67723897,
    "tags": [
        {
            "id": 33834886
        }
    ]
}
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
Remember — Results may vary according to your authentication scope !
</aside>
# Users

## Create a user



```shell
curl "https://imuze.io/users"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "email": "corrupti quo atque",
    "password": "impedit omnis",
    "birthdate": 8827362,
    "name": "aut"
}'
```

```json
{
    "email": "corrupti quo atque",
    "password": "impedit omnis",
    "birthdate": 8827362,
    "name": "aut"
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
    "email": "ipsa qui iure",
    "id": -88028629,
    "token": "quo autem"
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
Remember — Results may vary according to your authentication scope !
</aside>
## Delete a user



```shell
curl "https://imuze.io/users/:id"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X DELETE -d '{
    "id": 92257450
}'
```

```json
{
    "id": 92257450
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
    "id": 3895408
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
Remember — Results may vary according to your authentication scope !
</aside>
## Update a user



```shell
curl "https://imuze.io/users/:id"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X PUT -d '{
    "password": "consequatur deleniti eveniet",
    "name": "optio",
    "email": "beatae"
}'
```

```json
{
    "password": "consequatur deleniti eveniet",
    "name": "optio",
    "email": "beatae"
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
    "id": -26518312,
    "email": "incidunt cupiditate error",
    "name": "pariatur sint commodi",
    "birthdate": 7725103
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
Remember — Results may vary according to your authentication scope !
</aside>
