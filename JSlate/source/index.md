---
title: API Reference

language_tabs:
  - shell
  - ruby
  - python

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='http://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true
---

# Introduction
# Songs

## createSongInput

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```shell
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```

> The above command returns JSON structured like this:

```json
{
    "text_seed": "qui inventore quia ut pariatur",
    "musical_mode": "Locrian",
    "arrangement_id": null,
    "timeline": {
        "amplitude": 35441137,
        "lowest": 48263636,
        "keys": [
            {
                "duration": 78169625,
                "time": -47974585,
                "value": -93138875
            },
            {
                "duration": 78391640,
                "time": 38296866,
                "value": 59761311
            },
            {
                "duration": -96229664,
                "time": -98596491,
                "value": 23810297
            }
        ]
    },
    "mp3": "aspernatur fugit officiis animi",
    "status_channel": "sunt",
    "id": 68722262
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
# Users

## createUserInput

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```shell
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```

> The above command returns JSON structured like this:

```json
{
    "email": "quia temporibus numquam illum impedit",
    "id": -74110817,
    "token": "dolore est aut"
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
