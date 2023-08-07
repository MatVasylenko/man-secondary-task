import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";
import { MOCK_COMPANY_DATA } from "../staticData";
import { ICompany } from "../model";

type TInitialState = {
  items: ICompany[];
}

const initialState: TInitialState = {
  items: MOCK_COMPANY_DATA,
}

const companySlice = createSlice({
  initialState,
  name: 'companySlice',
  reducers: {
  }
});

export const selectCompanies = (state: RootState) => state.companySlice.items;

export default companySlice.reducer;