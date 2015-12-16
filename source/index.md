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
    "arrangements": [
        {
            "id": 38718265,
            "name": "animi voluptatem soluta at nulla"
        },
        {
            "name": "nihil quaerat",
            "id": 60951525
        },
        {
            "id": 24989615
        },
        {}
    ],
    "next": 86796268,
    "previous": 53006148
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
    "arrangements": [
        {
            "id": 24705756
        },
        {
            "name": "in aut vero rerum",
            "id": 16587284
        },
        {}
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

## Authenticate



```shell
curl "https://api.imuze.io/authenticate"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X PUT -d '{
    "email": "temporibus ut eos dicta occaecati",
    "password": "amet odit"
}'
```

```json
{
    "email": "temporibus ut eos dicta occaecati",
    "password": "amet odit"
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
    "token": "fuga"
}
```

This endpoint permits a registered user to authenticate.

### HTTP Request

`PUT https://api.imuze.io/authenticate`

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
curl "https://api.imuze.io/oauth"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X PUT -d '{
    "provider": "twitter",
    "provider_token": "qui beatae est",
    "uuid": "incidunt perspiciatis"
}'
```

```json
{
    "provider": "twitter",
    "provider_token": "qui beatae est",
    "uuid": "incidunt perspiciatis"
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
    "user_id": 84858003
}
```

This endpoint permits to authenticate with an external provider (OAuth).

### HTTP Request

`PUT https://api.imuze.io/oauth`

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
curl "https://api.imuze.io/songs"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "text_seed": "ut dolorum asperiores qui et",
    "musical_mode": "Lydian",
    "arrangement_id": 74822509,
    "tags": [
        "labore minus molestiae unde ex",
        "quisquam omnis magnam odit ea"
    ]
}'
```

```json
{
    "text_seed": "ut dolorum asperiores qui et",
    "musical_mode": "Lydian",
    "arrangement_id": 74822509,
    "tags": [
        "labore minus molestiae unde ex",
        "quisquam omnis magnam odit ea"
    ]
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
    "text_seed": "inventore dolorum",
    "musical_mode": "Phrygian",
    "arrangement_id": 67720832,
    "timeline": {
        "amplitude": 65837679,
        "lowest": -76879246,
        "keys": [
            {
                "duration": 65341202,
                "time": -4987263,
                "value": 46136557,
                "letter": "quia dolor accusamus"
            },
            {
                "duration": 74000395,
                "time": 94109139,
                "value": 67341762
            },
            {
                "duration": 61251097,
                "time": -64275627,
                "value": 17445174,
                "letter": "a sed eaque consequatur ex"
            }
        ]
    },
    "mp3": "qui voluptatibus voluptatem alias",
    "status_channel": "eius ut mollitia aspernatur"
}
```

This endpoint create a song.

### HTTP Request

`POST https://api.imuze.io/songs`

### Query Parameters

Parameter | Type
--------- | -----------
text_seed | string
musical_mode | 
arrangement_id | 
tags | array


<aside class="notice">
Required properties are : text_seed,musical_mode,arrangement_id
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
## Delete a song



```shell
curl "https://api.imuze.io/songs/:id"
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
    "id": 54585030
}
```

This endpoint deletes a song.

### HTTP Request

`DELETE https://api.imuze.io/songs/:id`

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
    "previous": 31621457,
    "songs": [
        {},
        {
            "name": "illum",
            "id": 77713620
        },
        {}
    ],
    "count": 14898359
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
{}
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
# Tags

## Index tags



```shell
curl "https://api.imuze.io/tags"
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

`GET https://api.imuze.io/tags`

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
curl "https://api.imuze.io/users"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "email": "alias quia similique qui quia",
    "password": "delectus doloremque illo ex",
    "birthdate": 79653608,
    "name": "rem"
}'
```

```json
{
    "email": "alias quia similique qui quia",
    "password": "delectus doloremque illo ex",
    "birthdate": 79653608,
    "name": "rem"
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
    "email": "sint",
    "id": 92215378,
    "token": "veritatis quis"
}
```

This endpoint creates an user.

### HTTP Request

`POST https://api.imuze.io/users`

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
curl "https://api.imuze.io/users/:id"
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
    "id": 65643539
}
```

This endpoint deletes a user.

### HTTP Request

`DELETE https://api.imuze.io/users/:id`

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
curl "https://api.imuze.io/users/:id"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X PUT -d '{
    "name": "quis reiciendis quam illo",
    "email": "sit odit",
    "password": "necessitatibus",
    "birthdate": -98044577
}'
```

```json
{
    "name": "quis reiciendis quam illo",
    "email": "sit odit",
    "password": "necessitatibus",
    "birthdate": -98044577
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
    "id": 96810989,
    "email": "commodi quia doloribus amet praesentium",
    "name": "accusamus ut nam eligendi dolor",
    "birthdate": -40915481
}
```

This endpoint updates a user.

### HTTP Request

`PUT https://api.imuze.io/users/:id`

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
