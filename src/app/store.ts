import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { isModalReducer, isNextReducer, playerNameReducer, squareReducer } from '../features/Reducers';



export const store = configureStore({
  reducer: {
    squares: squareReducer,
    isNext: isNextReducer,
    isModal: isModalReducer,
    playerName: playerNameReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
