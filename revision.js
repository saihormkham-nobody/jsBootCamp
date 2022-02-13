const student = { name: "Sai", age: 5, sex: "male" };

const response = {
  data: [
    {
      _id: "62072d88def1ef3a0a352dbe",
      name: "Introduction to Java",
      author: "John",
      created: "2022-02-12T03:46:16.324Z",
      __v: 0,
    },
  ],
  meta: {
    total: 1,
    page: 1,
    last_page: 1,
  },
};

const { meta, data, errors } = response;

const list = [3,4,5,5,6];
const [a,b,c] = list;
const [a, ...b] = list
