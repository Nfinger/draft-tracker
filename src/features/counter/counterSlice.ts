import { AppDispatch } from '@/state/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../state/store'

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = (amount: number) => async (dispatch: AppDispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  console.log("🚀 ~ file: counterSlice.ts ~ line 37 ~ incrementAsync ~ response", await response.json())
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer