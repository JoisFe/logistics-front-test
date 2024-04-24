// 액션 타입 정의
import axios from "axios";
import { fetchProductsSuccess } from "../slices/receiveListReducer";

export const receiveListAll =
  (receiveCode, searchManager, selectedStartDate, selectedEndDate) => async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8888/api/receive/list", {
        params: {
          receiveCode: receiveCode,
          manager: searchManager,
          startDate: selectedStartDate,
          endDate: selectedEndDate,
        },
      });
      const products = response.data;
      // Process the response data here, update your UI, etc.
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      // Handle any errors that occur during the API call
      console.error("Error fetching data:", error);
    }
  };
