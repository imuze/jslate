---
title: API Reference

language_tabs:

  - shell

  - json


toc_footers:
  - <a href="mailto:developers@imuze.io?Subject=Request a Developer Key" target="_top">Request a Developer Key</a>

includes:
  - errors

search: true
---

# Introduction

iMuze is a music generation API. With the iMuze API, you can generate thousand of musics in seconds.</br> <h1>How-to</h1> <ul><li>Register: contact us to get a developer account.</li><li>Authenticate: use your credentials to get a JWT token.</li><li>List musical genres.</li><li>Generate music: pick a genre, a duration and a structure to genereate a music.</li><li>Get the mp3 and enjoy.</li></ul>

# Authentication

## Token



```shell
curl "http://joplin.imuze.io/accounts/token"\
  -H "Content-Type: application/json"\
  -X PUT -d '{"email":"veniam Excepteur ","password":"aute qui dolor"}'
```

```json
{
    "email": "veniam Excepteur ",
    "password": "aute qui dolor"
}
```



> The above command returns JSON structured like this:

```moonscript
{
    "token": "ea"
}
```

Endpoint to create a token from credentials.

### HTTP Request

`PUT http://joplin.imuze.io/accounts/token`

### Query Parameters

Parameter | Type | Description
--------- | ----------- | -----------
email | string | User email.
password | string | User password.


<aside class="notice">
Required properties are : email,password
</aside>

# Genres

## List genres



```shell
curl "http://joplin.imuze.io/genres/"\
  -H "Content-Type: application/json"\
```

```json
{
    "id": "http://json-schema.org/indexGenresInput#",
    "title": "List genres",
    "description": "Endpoint to list all musical genres and subgenres.",
    "method": "GET",
    "route": "/genres/",
    "auth": false
}
```



> The above command returns JSON structured like this:

```moonscript
{
    "genres": [
        {
            "name": "veniam officia ut",
            "subgenres": [
                "pariatur ea",
                "officia"
            ]
        },
        {
            "name": "ex incididunt magna",
            "subgenres": [
                "sed veniam consectetur",
                "reprehenderit",
                "adipisicing nostrud"
            ]
        },
        {
            "name": "Duis sint",
            "subgenres": [
                "est reprehenderit enim",
                "culp"
            ]
        }
    ]
}
```

Endpoint to list all musical genres and subgenres.

### HTTP Request

`GET http://joplin.imuze.io/genres/`

### Query Parameters

Parameter | Type | Description
--------- | ----------- | -----------


<aside class="notice">
Required properties are : 
</aside>

# Musics

## Create a music



```shell
curl "http://joplin.imuze.io/musics"\
  -H "Content-Type: application/json"\
  -H "Authorization: API_KEY_EXAMPLE"\
  -X POST -d '{"genre":"laboris paria","subgenre":"commodo veniam nis","duration_ms":29964,"structure":[{"start":0.6983029281254858,"duration":0.14079915545880795,"energy":"dynamic"},{"start":0.7808424669783562,"duration":0.7593265930190682},{"start":0.5336320374626666,"duration":0.6045300932601094,"energy":"dynamic"},{"start":0.8884022755082697,"duration":0.8417615587823093}],"voices_volume":-39}'
```

```json
{
    "genre": "laboris paria",
    "subgenre": "commodo veniam nis",
    "duration_ms": 29964,
    "structure": [
        {
            "start": 0.6983029281254858,
            "duration": 0.14079915545880795,
            "energy": "dynamic"
        },
        {
            "start": 0.7808424669783562,
            "duration": 0.7593265930190682
        },
        {
            "start": 0.5336320374626666,
            "duration": 0.6045300932601094,
            "energy": "dynamic"
        },
        {
            "start": 0.8884022755082697,
            "duration": 0.8417615587823093
        }
    ],
    "voices_volume": -39
}
```



> The above command returns JSON structured like this:

```moonscript
{
    "id": "ut eu in mollit",
    "genre": "Duis nostrud",
    "subgenre": "eu esse irure officia",
    "music_engine_version": "Duis reprehenderit magna",
    "bpm": -84422265,
    "measure": "4/4",
    "duration_ms": 293813,
    "structure": [
        {
            "start": 0.2889910754747689,
            "duration": 0.6239416964817792
        }
    ]
}
```

Endpoint to create a new music from a genre, subgenre, duration and a specific structure. A musical structure is an array of movements. Each movement has a duration and either an energy level (calm, medium, dynamic) or a type (intro, verse, refrain, ...). The movements will be played in the music following the same order they appears in the structure.

### HTTP Request

`POST http://joplin.imuze.io/musics`

### Query Parameters

Parameter | Type | Description
--------- | ----------- | -----------
genre | string | musical genre
subgenre | string | musical subgenre
duration_ms | integer | music duration in milliseconds
crop | boolean | if true, cut music at requested duration, possibly croping a measure.
fadeout_ms | integer | duration of fadeout at the end of music.
voices_volume | integer | volume of voices if any.
structure | array | list of movement that specifies structure of music.


<aside class="notice">
Required properties are : genre,subgenre,duration_ms,structure
</aside>


<aside class="success">
An authentication token is required for this route.
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
## Get a music mp3



```shell
curl "http://joplin.imuze.io/musics/:id/mp3"\
  -H "Content-Type: application/json"\
  -H "Authorization: API_KEY_EXAMPLE"\
```

```json
{
    "id": "Duis sint"
}
```



> The above command returns JSON structured like this:

```moonscript
{
    "id": "commodo fugiat"
}
```

Endpoint to a music mp3 file.

### HTTP Request

`GET http://joplin.imuze.io/musics/:id/mp3`

### Query Parameters

Parameter | Type | Description
--------- | ----------- | -----------
id | string | id of a music previously generated.


<aside class="notice">
Required properties are : id
</aside>


<aside class="success">
An authentication token is required for this route.
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
## Get a music schema



```shell
curl "http://joplin.imuze.io/musics/:id/schema"\
  -H "Content-Type: application/json"\
  -H "Authorization: API_KEY_EXAMPLE"\
```

```json
{
    "id": "Ut"
}
```



> The above command returns JSON structured like this:

```moonscript
{
    "id": "irure reprehenderit incididunt officia",
    "genre": "id nostrud labore",
    "subgenre": "in",
    "music_engine_version": "ipsum pariatur magna",
    "bpm": 23078208,
    "measure": "4/4",
    "duration_ms": 238199,
    "structure": [
        {
            "start": 0.5210838441271335,
            "duration": 0.08891168748959899
        },
        {
            "start": 0.17467262619175017,
            "duration": 0.5250085059087723,
            "energy": "dynamic"
        },
        {
            "start": 0.9661083635874093,
            "duration": 0.8867699133697897,
            "movement": "incididunt ex velit"
        },
        {
            "start": 0.4967353150714189,
            "duration": 0.4002768991049379
        }
    ]
}
```

Endpoint to get a music schema.

### HTTP Request

`GET http://joplin.imuze.io/musics/:id/schema`

### Query Parameters

Parameter | Type | Description
--------- | ----------- | -----------
id | string | id of a music previously generated.


<aside class="notice">
Required properties are : id
</aside>


<aside class="success">
An authentication token is required for this route.
</aside>

<aside class="success">
Remember — Results may vary according to your authentication scope !
</aside>
