import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import customers from "./customer.json"
let mock_adapter = new MockAdapter(axios);

mock_adapter.onGet("/customer").reply(() => {
  return [
    200,
   {
      data: customers,
    },
  ];
});
