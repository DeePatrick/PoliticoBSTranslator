import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { FileInput } from "../api/types";

// Define a type for the slice state
interface FileInputState {
  fileContent?: FileInput;
}

// Define the initial state using that type
const initialState: FileInputState = {};

export const fileInputSlice = createSlice({
  name: "fileInput",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setFileContent: (state, value) => {
      state.fileContent = value.payload;
    },
  },
});

export const { setFileContent } = fileInputSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFileContent = (state: RootState) => state.fileInput;

export default fileInputSlice.reducer;
