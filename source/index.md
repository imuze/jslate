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
curl "https://imuze.io/arrangements/:id"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X GET -d '{
    "id": -70215631
}'
```

```json
{
    "id": -70215631
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
            "name": "sed optio accusamus"
        },
        {
            "name": "blanditiis consectetur accusamus id voluptatem"
        },
        {
            "id": 80304975,
            "name": "et"
        },
        {
            "name": "rem delectus temporibus maxime",
            "id": -92090732
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
Remember — a happy kitten is an iMuze kitten!
</aside>
# Songs

## createSongInput



```shell
curl "https://imuze.io/songs"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "text_seed": "ut ipsa consequatur est",
    "musical_mode": "Locrian",
    "arrangement_id": 93496724
}'
```

```json
{
    "text_seed": "ut ipsa consequatur est",
    "musical_mode": "Locrian",
    "arrangement_id": 93496724
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
    "text_seed": "alias",
    "musical_mode": "Phrygian",
    "arrangement_id": -4849518,
    "timeline": {
        "amplitude": -41517912,
        "lowest": -54139829,
        "keys": [
            {
                "duration": 24850709,
                "time": 93001721,
                "value": -84129381,
                "letter": "omnis"
            },
            {
                "duration": 68207794,
                "time": 41222504,
                "value": -90301335
            },
            {
                "duration": -69019138,
                "time": -14592787,
                "value": 95378091
            }
        ]
    },
    "mp3": "culpa consequatur voluptatem explicabo",
    "status_channel": "modi nulla ea facere quae"
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
## Show a song



```shell
curl "https://imuze.io/songs/:id"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X GET -d '{
    "id": 78316863
}'
```

```json
{
    "id": 78316863
}
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
    "title": "reiciendis libero deserunt",
    "mp3": "similique soluta",
    "id": -12953574,
    "timeline": {
        "amplitude": 62478027,
        "lowest": 57983110,
        "keys": [
            {
                "duration": -80106287,
                "time": -20781624,
                "value": -65579291
            },
            {
                "duration": -62304716,
                "time": -6745049,
                "value": 79916008,
                "letter": "quas nostrum aut vel"
            },
            {
                "duration": -15013326,
                "time": -97131027,
                "value": 80738902,
                "letter": "perferendis sed rerum quo"
            },
            {
                "duration": 75121423,
                "time": 72012826,
                "value": -35160392
            },
            {
                "duration": -96115509,
                "time": -88224309,
                "value": 85143083
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
# Users

## createUserInput



```shell
curl "https://imuze.io/users"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "email": "molestiae voluptatem quibusdam",
    "password": "voluptatem velit magnam",
    "birthdate": 89195929,
    "name": "ipsa"
}'
```

```json
{
    "email": "molestiae voluptatem quibusdam",
    "password": "voluptatem velit magnam",
    "birthdate": 89195929,
    "name": "ipsa"
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
    "email": "ut quis",
    "id": -28117867,
    "token": "ab minus perferendis nesciunt"
}
```

This endpoint create an user.

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
