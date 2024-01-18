import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from '../components/Toast';

const initialState = { pastries: [] };

export const fetchAllPastriesAsync = createAsyncThunk(
  'get/pastries',
  async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/pastries`,
      {
        credentials: 'include',
      }
    );
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('La récupération des pâtisseries a échouée ⚠️');
    }
  }
);

export const addPastry = createAsyncThunk('post/pastry', async (newPastry) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/pastrie`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPastry),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("L'ajout de la pâtisseries a échoué ⚠️");
  }
});

export const deletePastry = createAsyncThunk(
  'delete/pastry',
  async (selectedPastryId) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/pastrie/${selectedPastryId}`,
      {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.ok) {
      return response.json();
    } else {
      console.log(`DELETE FAILED : ${JSON.stringify(response)}`);
      throw new Error('La suppression de la pâtisseries a échoué ⚠️');
    }
  }
);

export const pastriesSlice = createSlice({
  name: 'pastries',
  initialState,
  reducers: {
    // TODO: insert reducer functions here
  },
  extraReducers: (builder) => {
    // fetchPastries
    builder.addCase(fetchAllPastriesAsync.pending, () => {
      console.log('Récupération des pâtisseries en cours...');
    });
    builder.addCase(fetchAllPastriesAsync.rejected, (action) => {
      console.log(action.error.message);
    });
    builder.addCase(fetchAllPastriesAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.pastries = action.payload;
    });

    // addPatry
    builder.addCase(addPastry.pending, () => {
      console.log('Ajout de la pâtisserie en cours...');
    });
    builder.addCase(addPastry.rejected, (action) => {
      console.log(action.error.message);
      toastError("L'ajout de la pâtisseries a échoué ⚠️");
    });
    builder.addCase(addPastry.fulfilled, (state, action) => {
      console.log('Pâtisserie ajoutée avec succès ✅ !', action.payload);
      state.pastries.push(action.payload);
      toastSuccess('Pâtisserie ajoutée avec succès ✅ !');
    });

    // deletePastry
    builder.addCase(deletePastry.pending, () => {
      console.log('Suppression de la pâtisserie en cours...');
    });
    builder.addCase(deletePastry.rejected, (action) => {
      console.log(action.error);
      toastError('La suppression de la pâtisseries a échouée ⚠️');
    });
    builder.addCase(deletePastry.fulfilled, (state, action) => {
      console.log('Pâtisserie supprimée avec succès ✅ !', action.payload);
      state.pastries = action.payload;
      // TODO: modifier le state
      toastSuccess('Pâtisserie supprimée avec succès ✅ !');
    });
  },
});

export const { addPastries } = pastriesSlice.actions;
