// import { configureStore } from '@reduxjs/toolkit';
// import professorReducer from './Slices/professorSlice';
// import darkModeReducer from './Slices/darkModeSlice';
// import userStutusReducer from './Slices/userSlice';
// export const store = configureStore({
//   reducer: {
//     user: userStutusReducer,
//     theme: darkModeReducer,
//     professor: professorReducer,
//   },
// });
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
