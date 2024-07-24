import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store';

type TimerState = 'idle' | 'running' | 'completed' | 'limit'

interface TimerSliceState {
    status: TimerState;
    time: string;
}

const initialState: TimerSliceState = {
    status: 'idle',
    time: '00 h: 00 m: 00 s'
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        saveTimer: (state, action: PayloadAction<TimerState>) => {
            state.status = action.payload;
        },
        addTime: (state, action:PayloadAction<string>) => {
            state.time = action.payload
        }
    },
})

export const { saveTimer,addTime } = timerSlice.actions;


export default timerSlice.reducer;
