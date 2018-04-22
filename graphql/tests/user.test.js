import axios from "axios";

describe("user resolvers", () => {
  test("allusers", async () => {
    const response = await axios.post("http://localhost:5001/graphql", {
      query: `
        query {
          users { 
            id
            username
            email
          }
        }
        `
    });

    const { data } = response;
    console.log(data);
  });
});
