
# Appone API

This is a new api I have made that give the stars associated
 with the name you give in the request there is only get 
request currently in the api but i will add more as i go forward




## Documentation

Our api website goes like 
```http
    https://newherorohit.herokuapp.com/
```

You can make calls using this url.

## API Reference

#### Get all items
You can write the name of the member and get the stars associated with
it. if someone is not avialable with the name then the output will
be no data found

```http
  GET /name
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | the name should be in the data set |



### For Example
```http
    https://newherorohit.herokuapp.com/solth
```

#### The response will be 
{"name":5}
