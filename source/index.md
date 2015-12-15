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
            "name": "et qui est beatae dolor",
            "id": 55316393
        }
    ],
    "previous": 15764294,
    "count": 99520428
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
    "id": 32062045
}'
```

```json
{
    "id": 32062045
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
        {
            "name": "ut numquam",
            "id": 29696275
        },
        {
            "name": "et magni"
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
# Authentication

## Authenticate



```shell
curl "https://imuze.io/authenticate"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X PUT -d '{
    "email": "et",
    "password": "quis nisi blanditiis quas"
}'
```

```json
{
    "email": "et",
    "password": "quis nisi blanditiis quas"
}
```

```python
import imuze

api = imuze.authorize("API_KEY_EXAMPLE")
api.authentication.put()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('API_KEY_EXAMPLE')
api.authentication.put
```



> The above command returns JSON structured like this:

```moonscript
{}
```

This endpoint permits a registered user to authenticate.

### HTTP Request

`PUT https://imuze.io/authenticate`

### Query Parameters

Parameter | Type
--------- | -----------
email | string
password | string


<aside class="notice">
Required properties are : email,password
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
## OAuth



```shell
curl "https://imuze.io/oauth"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X PUT -d '{
    "provider": "facebook",
    "provider_token": "esse quo consectetur blanditiis",
    "uuid": "et voluptatem"
}'
```

```json
{
    "provider": "facebook",
    "provider_token": "esse quo consectetur blanditiis",
    "uuid": "et voluptatem"
}
```

```python
import imuze

api = imuze.authorize("API_KEY_EXAMPLE")
api.authentication.put()
```

```ruby
require 'imuze'

api = imuze::APIClient.authorize!('API_KEY_EXAMPLE')
api.authentication.put
```



> The above command returns JSON structured like this:

```moonscript
{
    "token": "et dolores et odio aut",
    "user_id": -90149151
}
```

This endpoint permits to authenticate with an external provider (OAuth).

### HTTP Request

`PUT https://imuze.io/oauth`

### Query Parameters

Parameter | Type
--------- | -----------
provider | 
provider_token | string
uuid | string


<aside class="notice">
Required properties are : provider,provider_token,uuid
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
    "text_seed": "modi",
    "musical_mode": "Ionian",
    "arrangement_id": null
}'
```

```json
{
    "text_seed": "modi",
    "musical_mode": "Ionian",
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
    "text_seed": "et",
    "musical_mode": "Lydian",
    "arrangement_id": 8278457,
    "timeline": {
        "amplitude": 57197202,
        "lowest": 93669344,
        "keys": [
            {
                "duration": -91828052,
                "time": -41395699,
                "value": -40127155,
                "letter": "quasi amet tempore et"
            },
            {
                "duration": 79750239,
                "time": 51975518,
                "value": -84273642,
                "letter": "quas est tempore"
            },
            {
                "duration": 70617740,
                "time": -74623566,
                "value": -29926190,
                "letter": "quasi facilis voluptatum et"
            },
            {
                "duration": -12581605,
                "time": -47480984,
                "value": -64784189,
                "letter": "dolorem quod nulla minus ut"
            }
        ]
    },
    "mp3": "deserunt et expedita unde consequatur",
    "status_channel": "itaque omnis error",
    "id": 22804824
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
    "id": 77478121
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
{}
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
    "mp3": "animi et",
    "timeline": {
        "amplitude": -30431350,
        "lowest": -36298723,
        "keys": [
            {
                "duration": 88555108,
                "time": 69058662,
                "value": -15524888
            },
            {
                "duration": 61803217,
                "time": 45689492,
                "value": 55676878
            },
            {
                "duration": 70290586,
                "time": -78104195,
                "value": 57653611,
                "letter": "_"
            },
            {
                "duration": 6116903,
                "time": -58962146,
                "value": 12982019,
                "letter": "|"
            },
            {
                "duration": -28238611,
                "time": -68825000,
                "value": 68947067
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
    "email": "numquam maiores",
    "password": "fuga ea quo ut",
    "birthdate": 77850985
}'
```

```json
{
    "email": "numquam maiores",
    "password": "fuga ea quo ut",
    "birthdate": 77850985
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
    "email": "minus reiciendis nihil veritatis",
    "id": 34878621,
    "token": "quia"
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
    "id": 55745052
}'
```

```json
{
    "id": 55745052
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
    "id": 40134545
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
  -X PUT -d '{}'
```

```json
{}
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
    "id": 80138105,
    "email": "ut saepe eaque",
    "name": "quas aliquid est vel vitae",
    "birthdate": 29460086
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
