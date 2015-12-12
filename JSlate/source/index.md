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



```shell
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```



curl "https://imuze.io/songs"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "text_seed": "nemo ex occaecati voluptatum",
    "musical_mode": "Locrian",
    "arrangement_id": null
}'


```python
import imusdk

api = imusdk.authorize("API_KEY_EXAMPLE")
api.songs.post()
```



> The above command returns JSON structured like this:

```json
{
    "text_seed": "voluptatibus eum tempora sint",
    "musical_mode": "Mixolydia",
    "arrangement_id": null,
    "timeline": {
        "amplitude": -36394963,
        "lowest": 93609569,
        "keys": [
            {
                "duration": -37919773,
                "time": -81584326,
                "value": 46715301,
                "letter": "dignissimos nostrum quidem"
            },
            {
                "duration": 30478829,
                "time": -37483854,
                "value": -59688143,
                "letter": "libero animi adipisci"
            },
            {
                "duration": 43488924,
                "time": -50040619,
                "value": 87898484
            },
            {
                "duration": 72524900,
                "time": -38733577,
                "value": -95020167
            }
        ]
    },
    "mp3": "saepe",
    "status_channel": "ducimus recusandae consequatur quia culpa",
    "id": -98532048
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



```shell
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```



curl "https://imuze.io/users"
  -H "Content-Type: application/json"
  -H "Authorization: API_KEY_EXAMPLE"
  -X POST -d '{
    "email": "dolorem magnam dolores quidem",
    "password": "ipsam et qui corrupti",
    "birthdate": -41138792
}'


```python
import imusdk

api = imusdk.authorize("API_KEY_EXAMPLE")
api.users.post()
```



> The above command returns JSON structured like this:

```json
{
    "email": "non",
    "id": -53153211,
    "token": "eum"
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
