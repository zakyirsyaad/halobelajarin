import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const initializeAuthState = createAsyncThunk('initializeAuthState', async () => {
    try {
        const user = JSON.parse(localStorage.getItem('user')) || "";
        const accessToken = localStorage.getItem('accessToken') || "";
        const img = localStorage.getItem('foto') || "";
        const uid = localStorage.getItem('uid') || "";

        return { user, accessToken, img, uid };
    } catch (error) {
        throw new Error("Error initializing auth state: " + error.message);
    }
});


export const signUpUser = createAsyncThunk('signupuser', async (body) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signup`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        const data = await res.json();

        if (res.ok) {
            return data;
        } else {
            throw new Error(data.error);
        }
    } catch (error) {
        throw new Error("Network error: " + error.message);
    }
});

export const signInUser = createAsyncThunk('signInUser', async (body) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        const data = await res.json();

        if (res.ok) {
            return data;
        } else {
            throw new Error(data.error);
        }
    } catch (error) {
        throw new Error("Network error: " + error.message);
    }
});

export const logoutUser = createAsyncThunk('logoutUser', async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/logout`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
        });
        const data = await res.json();

        if (res.ok) {
            return data;
        } else {
            throw new Error(data.error || "Logout failed");
        }
    } catch (error) {
        throw new Error("Network error: " + error.message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: "",
        accessToken: "",
        loading: false,
        error: "",
        img: "",
        uid: "",
        // isLoggedIn: false
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload || "";
        },
        addToken: (state, action) => {
            state.accessToken = action.payload || "";
        },
        logout: (state, action) => {
            state.accessToken = null;
            localStorage.clear();
            window.location.pathname = '/'
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(initializeAuthState.fulfilled, (state, { payload }) => {
                // state.msg = payload.msg;
                state.user = payload.user;
                state.img = payload.img;
                state.accessToken = payload.accessToken;
                state.uid = payload.uid;

            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                toast.loading('Pending', {
                    position: 'top-right',
                    autoClose: false, // Sesuaikan dengan kebutuhan Anda
                });
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.accessToken = null;
                // state.isLoggedIn = false;
                localStorage.clear();
                window.location.pathname = '/'

            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = "Logout rejected: " + action.error.message;
                console.error(action.error);
            })
            .addCase(signInUser.pending, (state) => {
                state.loading = true, toast.loading("pending")
            })
            .addCase(signInUser.fulfilled, (state, { payload }) => {
                state.loading = false;
                const { error, accessToken, user, img, uid } = payload;
                if (error) {
                    state.error = error;
                } else {
                    state.accessToken = accessToken;
                    state.user = user;
                    state.img = img;
                    state.uid = uid;
                    toast.success('Successfully toasted!')

                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('foto', img);
                    localStorage.setItem('uid', uid);
                    return window.location.pathname = `/member/${uid}`;
                }
            })

            .addCase(signInUser.rejected, (state, action) => {
                state.loading = false;
                state.error = "Request rejected: " + action.error.message;
                console.error(action.error);
                toast.error("Rejected")
            })
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
                state.error = ""

            })
            .addCase(signUpUser.fulfilled, (state, { payload: { error, msg } }) => {
                state.loading = false
                if (error) {
                    state.error = error;
                } else {
                    toast.success('Successfully toasted!')
                    window.location.pathname = 'Login'
                }
            })
            .addCase(signUpUser.rejected, (state) => {
                state.loading = false;
                state.error = "Request rejected";
                toast.error("Rejected")
            })

    }
})


export const { addToken, addUser, logout } = authSlice.actions
export default authSlice.reducer;