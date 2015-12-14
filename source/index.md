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

## Show an arrangement



```shell
curl "https://GR.io/arrangements/:id"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X GET -d '{
    "id": -62267971
}'
```

```json
{
    "id": -62267971
}
```

```python
import imusdk

api = imusdk.authorize("API_KEY_EXAMPLE")
api.arrangements.get()
```

```ruby
require 'imusdk'

api = imusdk::APIClient.authorize!('API_KEY_EXAMPLE')
api.arrangements.get
```



> The above command returns JSON structured like this:

```moonscript
{
    "arrangements": [
        {
            "name": "quia deserunt aut"
        },
        {
            "id": 22250009
        },
        {
            "id": -69669205,
            "name": "est"
        },
        {},
        {
            "name": "vitae",
            "id": 59222289
        }
    ]
}
```

This endpoint shows an arrangement.

### HTTP Request

`GET https://GR.io/arrangements/:id`

### Query Parameters

Parameter | Type
--------- | -----------
id | integer


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — a happy kitten is an GR kitten!
</aside>
# Songs

## createSongInput



```shell
curl "https://GR.io/songs"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "text_seed": "eius",
    "musical_mode": "Phrygian",
    "arrangement_id": -718040
}'
```

```json
{
    "text_seed": "eius",
    "musical_mode": "Phrygian",
    "arrangement_id": -718040
}
```

```python
import imusdk

api = imusdk.authorize("API_KEY_EXAMPLE")
api.songs.post()
```

```ruby
require 'imusdk'

api = imusdk::APIClient.authorize!('API_KEY_EXAMPLE')
api.songs.post
```



> The above command returns JSON structured like this:

```moonscript
{
    "text_seed": "odio",
    "musical_mode": "Dorian",
    "arrangement_id": -27810638,
    "timeline": {
        "amplitude": -91357298,
        "lowest": -14455097,
        "keys": [
            {
                "duration": 90975846,
                "time": 5067926,
                "value": 76751752
            },
            {
                "duration": 16619311,
                "time": -67553730,
                "value": 68192535,
                "letter": "quia"
            },
            {
                "duration": -9968560,
                "time": -85376665,
                "value": -33126058,
                "letter": "quod"
            },
            {
                "duration": 27546855,
                "time": -24226529,
                "value": 74611580,
                "letter": "consequuntur quam incidunt est"
            },
            {
                "duration": -1404159,
                "time": 95805808,
                "value": -67037570
            }
        ]
    },
    "mp3": "praesentium voluptatem soluta sed ex",
    "status_channel": "eligendi ab",
    "id": 56160746
}
```

This endpoint create a song.

### HTTP Request

`POST https://GR.io/songs`

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
Remember — a happy kitten is an GR kitten!
</aside>
## Show a song



```shell
curl "https://GR.io/songs/:id"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X GET -d '{}'
```

```json
{}
```

```python
import imusdk

api = imusdk.authorize("API_KEY_EXAMPLE")
api.songs.get()
```

```ruby
require 'imusdk'

api = imusdk::APIClient.authorize!('API_KEY_EXAMPLE')
api.songs.get
```



> The above command returns JSON structured like this:

```moonscript
{
    "title": "cupiditate consectetur qui et amet",
    "mp3": "quia dolore"
}
```

This endpoint shows a song.

### HTTP Request

`GET https://GR.io/songs/:id`

### Query Parameters

Parameter | Type
--------- | -----------
id | integer


<aside class="notice">
Required properties are : 
</aside>

<aside class="success">
Remember — a happy kitten is an GR kitten!
</aside>
# Users

## createUserInput



```shell
curl "https://GR.io/users"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "email": "nam voluptate ea deleniti praesentium",
    "password": "praesentium quod nemo",
    "birthdate": -71763612,
    "name": "suscipit architecto est quae aliquid"
}'
```

```json
{
    "email": "nam voluptate ea deleniti praesentium",
    "password": "praesentium quod nemo",
    "birthdate": -71763612,
    "name": "suscipit architecto est quae aliquid"
}
```

```python
import imusdk

api = imusdk.authorize("API_KEY_EXAMPLE")
api.users.post()
```

```ruby
require 'imusdk'

api = imusdk::APIClient.authorize!('API_KEY_EXAMPLE')
api.users.post
```



> The above command returns JSON structured like this:

```moonscript
{
    "email": "tenetur ea veniam",
    "id": -74330620,
    "token": "quibusdam eveniet"
}
```

This endpoint create an user.

### HTTP Request

`POST https://GR.io/users`

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
Remember — a happy kitten is an GR kitten!
</aside>
