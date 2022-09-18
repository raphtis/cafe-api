
# Chicago Cafe API

Contains API of cafes in Chicago with some detailed info.
## Languages

- Node.Js




## API Reference

{
  "cafes":[
      {
        "id": 9,
        "name": "cafe name",
        "location": "address(es)",
        "phone": 555-555-5555,
        "hours": "of operation",
        "website": "Url",
        "food": "No"
      }
  ]
}
#### Get all items

```http
  GET /api/cafes
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. None

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |





