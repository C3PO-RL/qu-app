import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import appServices from "../../services/appServices";
import { Planet } from "../../DTOs/planetTypes";

export const getPlanets = createAsyncThunk(
  "planet/getPlanets",
  async (_, { rejectWithValue }) => {
    try {
      const response: Planet[] = await appServices.getPlanets();

      return response;
    } catch (error: unknown) {
      const message: string = (error as Error).message;
      return rejectWithValue(message as string);
    }
  }
);

interface IinitialState {
  planets: Planet[];
  isloading: boolean;
  error: {
    isError: boolean;
    message: string;
  };
  planetDetail: object;
}

const initialState: IinitialState = {
  planets: [],
  isloading: false,
  error: {
    isError: false,
    message: "",
  },
  planetDetail: {},
};

const planetSlice = createSlice({
  name: "planet",
  initialState,
  reducers: {
    setSorted: (state, action) => {
      const key = action.payload as string;
      return {
        ...state,
        planets: [...state.planets].sort((a, b) => {
          const aValue = a[key];
          const bValue = b[key];
          if (Number(aValue) && Number(bValue)) {
            return Number(aValue) - Number(bValue);
          }
          if (typeof aValue === "string" && typeof bValue === "string") {
            return aValue.localeCompare(bValue);
          }
          return 0;
        }),
      };
    },
    filterByPlanet: (state, action) => {
      return {
        ...state,
        planetDetail: state.planets.filter(
          (planet) => planet.name === action.payload
        )[0],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlanets.pending, (state) => {
        return {
          ...state,
          isloading: true,
          error: { isError: false, message: "" },
        };
      })
      .addCase(getPlanets.fulfilled, (state, action) => {
        return {
          ...state,
          planets: action.payload,
          isloading: false,
          error: { isError: false, message: "" },
        };
      })
      .addCase(getPlanets.rejected, (state, action) => {
        const { payload } = action;
        const errorMessage = payload as string;
        return {
          ...state,
          error: { isError: true, message: errorMessage },
          isloading: false,
        };
      });
  },
});

export const { setSorted, filterByPlanet } = planetSlice.actions;
export default planetSlice.reducer;
