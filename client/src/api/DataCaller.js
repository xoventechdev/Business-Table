import {
  setBusinessList,
  setTotalBusiness,
} from "../redux/state/BusinessSlice";
import Store from "../redux/store/Store";
import axios from "axios";

const URL = "http://localhost:3030/";

export async function TableList(page, perPage, key) {
  const url = URL + page + "/" + perPage + "/" + key;
  try {
    const data = await axios.get(url);
    if (data.status == 200 && data.data.status == "success") {
      Store.dispatch(setBusinessList(data.data.response[0].data));
      Store.dispatch(setTotalBusiness(data.data.response[0].total[0].count));
    }
  } catch (error) {
    console.log(error);
    Store.dispatch(setBusinessList([]));
  }
}
