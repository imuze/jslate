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
            "id": 25910535
        }
    ],
    "next": 67757261,
    "count": 15759057,
    "previous": 51001094
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
            "name": "officiis"
        },
        {
            "name": "ipsum",
            "id": 32385331
        },
        {
            "name": "consequatur commodi"
        }
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
# Authentication

# Songs

## Createa a song



```shell
curl "https://imuze.io/songs"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "text_seed": "et",
    "musical_mode": "Phrygian",
    "arrangement_id": null
}'
```

```json
{
    "text_seed": "et",
    "musical_mode": "Phrygian",
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
    "text_seed": "modi aliquam",
    "musical_mode": "Phrygian",
    "arrangement_id": 56648474,
    "timeline": {
        "amplitude": -34401747,
        "lowest": -53517154,
        "keys": [
            {
                "duration": 16377696,
                "time": 52008690,
                "value": -7305677,
                "letter": "accusamus minus"
            },
            {
                "duration": 97190438,
                "time": 78064329,
                "value": -37521834,
                "letter": "est maxime aut soluta"
            }
        ]
    },
    "mp3": "error",
    "status_channel": "nostrum reiciendis incidunt necessitatibus quidem",
    "id": 81138791
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
  -X DELETE -d '{
    "id": 11648857
}'
```

```json
{
    "id": 11648857
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
    "id": 17579371
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
    "count": 60453749,
    "previous": 21668558,
    "next": 58038033
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
  -X GET -d '{
    "id": 74069892
}'
```

```json
{
    "id": 74069892
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
    "timeline": {
        "amplitude": -73032104,
        "lowest": 69423746,
        "keys": [
            {
                "duration": 35709606,
                "time": -1666697,
                "value": 75720931,
                "letter": "D"
            },
            {
                "duration": 92235354,
                "time": 63729127,
                "value": -48174375,
                "letter": "G"
            },
            {
                "duration": -27288512,
                "time": 71667724,
                "value": -62851089,
                "letter": "k"
            },
            {
                "duration": -79049799,
                "time": -79829811,
                "value": 81228
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
Remember — Results may vary according to your authentication scope !
</aside>
# Users

## Create a user



```shell
curl "https://imuze.io/users"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "email": "ut autem",
    "password": "voluptate optio autem",
    "birthdate": 78931046,
    "name": "dolores voluptatem maiores veniam voluptatem"
}'
```

```json
{
    "email": "ut autem",
    "password": "voluptate optio autem",
    "birthdate": 78931046,
    "name": "dolores voluptatem maiores veniam voluptatem"
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
    "email": "repellendus",
    "id": 89022964,
    "token": "optio sed commodi tenetur"
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
  -X DELETE -d '{}'
```

```json
{}
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
    "id": 49547618
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
    "email": "qui",
    "password": "facilis et sit est beatae",
    "name": "quos iste dolores porro vel",
    "birthdate": 78405352
}'
```

```json
{
    "email": "qui",
    "password": "facilis et sit est beatae",
    "name": "quos iste dolores porro vel",
    "birthdate": 78405352
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
    "id": 78470998,
    "email": "dolore quo",
    "name": "quis et tempora",
    "birthdate": 30849629
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
