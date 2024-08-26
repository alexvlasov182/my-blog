import {useSelector, useDispatch, TypedUseSelectorHook} from "react-redux";
import type {RootState, AppDispatch} from "../redux/store.ts";

// Use these typed versions throughout the app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
