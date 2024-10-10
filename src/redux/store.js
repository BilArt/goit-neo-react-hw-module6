import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';
import filtersReducer from './filterSlice';
import { combineReducers } from 'redux';

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items'],
}

const rootReducer = combineReducers({
    constacts: persistReducer(contactsPersistConfig, contactsReducer),
    filters: filtersReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);