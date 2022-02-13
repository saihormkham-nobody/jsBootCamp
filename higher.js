let result = [3,4,5].forEach((e)=>{
    console.log(e);
})


result = [3,4,5].map((e)=>{
    return e*e;
})


console.log(result);

const response = {
    "data": [
      {
        "_id": "620757faafa233eb99259fd5",
        "name": "Swann",
        "author": "Testing",
        "created": "2022-02-12T06:47:22.362Z",
        "__v": 0,
        "finished": "2022-02-12T14:54:47.323Z"
      },
      {
        "_id": "6207738eafa233eb99259feb",
        "name": "Meow",
        "author": "Yellow Cat",
        "created": "2022-02-12T08:45:02.125Z",
        "__v": 0,
        "finished": "2022-02-12T08:45:09.953Z"
      },
      {
        "_id": "620674602b4d2272b186e577",
        "author": "Mark Twain",
        "name": "The Secret Diary of Adrian Mole",
        "created": "2022-02-10T10:29:20.961Z",
        "finished": "2022-02-15T10:29:20.961Z"
      },
      {
        "_id": "620674602b4d2272b186e576",
        "author": "Arlene EisenbergandHeidi Murkoff",
        "name": "Adventures of Huckleberry Finn",
        "created": "2022-02-10T10:29:20.961Z",
        "finished": "2022-02-15T10:29:20.961Z"
      },
      {
        "_id": "620674602b4d2272b186e575",
        "author": "Marilyn French",
        "name": "What to Expect When You're Expecting",
        "created": "2022-02-10T10:29:20.961Z",
        "finished": "2022-02-15T10:29:20.961Z"
      },
      {
        "_id": "620674602b4d2272b186e574",
        "author": "Robert Munsch",
        "name": "The Women's Room",
        "created": "2022-02-10T10:29:20.961Z",
        "finished": "2022-02-15T10:29:20.961Z"
      },
      {
        "_id": "620674602b4d2272b186e573",
        "author": "Peter Benchley",
        "name": "Love You Forever",
        "created": "2022-02-10T10:29:20.961Z",
        "finished": "2022-02-15T10:29:20.961Z"
      },
      {
        "_id": "620674602b4d2272b186e572",
        "author": "Xaviera Hollander",
        "name": "Jaws",
        "created": "2022-02-10T10:29:20.961Z",
        "finished": "2022-02-15T10:29:20.961Z"
      },
      {
        "_id": "620674602b4d2272b186e571",
        "author": "Jiang Rong",
        "name": "The Happy Hooker: My Own Story",
        "created": "2022-02-10T10:29:20.961Z",
        "finished": "2022-02-15T10:29:20.961Z"
      },
      {
        "_id": "620674602b4d2272b186e56f",
        "author": "Chinua Achebe",
        "name": "Animal Farm",
        "created": "2022-02-10T10:29:20.961Z",
        "finished": "2022-02-15T10:29:20.961Z"
      },
      {
        "_id": "620674602b4d2272b186e56e",
        "author": "Charles Berlitz",
        "name": "Things Fall Apart",
        "created": "2022-02-10T10:29:20.961Z",
        "finished": "2022-02-15T10:29:20.961Z"
      },
      {
        "_id": "620674602b4d2272b186e56d",
        "author": "Erich Maria Remarque",
        "name": "The Bermuda Triangle",
        "created": "2022-02-10T10:29:20.961Z",
        "finished": "2022-02-15T10:29:20.961Z"
      }
    ],
    "meta": {
      "total": 94,
      "page": 1,
      "last_page": 8
    }
  }

const names = response.data.map((e)=>{
    return {name: e.name, author: e.author};
});

console.log(names);