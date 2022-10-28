import { createSlice } from "@reduxjs/toolkit";

const savedItems =
  localStorage.getItem("newsData") !== null
    ? JSON.parse(localStorage.getItem("newsData"))
    : [];

const setItemFunc = (item) => {
  localStorage.setItem("newsData", JSON.stringify(item));
};

const initialState = {
  newsData: savedItems,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    // save news
    saveItem(state, action) {
      const newSaved = action.payload;
      const existingData = state.newsData.find(
        (item) => item.title === newSaved.title
      );

      if (!existingData) {
        state.newsData.push({
          imageURL: newSaved.imageURL,
          author: newSaved.author,
          name: newSaved.name,
          title: newSaved.title,
          desc: newSaved.desc,
          path: newSaved.path
        });
      } else {
        state.newsData = state.newsData.filter((item) => item.title !== newSaved.title);
      }

      setItemFunc(
        state.newsData.map((item) => item),
      );
    },

    //delete news
    deleteItem(state, action) {
        const title = action.payload;
        const existingData = state.newsData.find((item) => item.title === title);
  
        if (existingData) {
          state.newsData = state.newsData.filter((item) => item.title !== title);
        }
  
        setItemFunc(
          state.newsData.map((item) => item)
        );
      },
  },
});

export const saveActions = newsSlice.actions;
export default newsSlice.reducer;
