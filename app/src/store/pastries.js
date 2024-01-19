import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from '../components/Toast';

const initialState = { pastries: [] };

export const fetchAllPastriesAsync = createAsyncThunk(
  'pastries/fetchAllPastriesAsync',
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

export const addPastry = createAsyncThunk(
  'pastries/addPastry',
  async (newPastry) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/pastrie`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPastry),
      }
    );
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("L'ajout de la pâtisserie a échoué ⚠️");
    }
  }
);

export const updatePastry = createAsyncThunk(
  'pastries/updatePastry',
  async ([selectedPastryId, updatedPastry]) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/pastrie/${selectedPastryId}`,
      {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPastry),
      }
    );
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('La modification de la pâtisserie a échoué ⚠️');
    }
  }
);

export const deletePastry = createAsyncThunk(
  'pastries/deletePastry',
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
      throw new Error('La suppression de la pâtisserie a échoué ⚠️');
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
    builder.addCase(fetchAllPastriesAsync.rejected, (_, action) => {
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
    builder.addCase(addPastry.rejected, (_, action) => {
      console.log(action.error.message);
      toastError("L'ajout de la pâtisserie a échoué ⚠️");
    });
    builder.addCase(addPastry.fulfilled, (state, action) => {
      console.log('Pâtisserie ajoutée avec succès ✅ !', action.payload);
      state.pastries.push(action.payload);
      toastSuccess('Pâtisserie ajoutée avec succès ✅ !');
    });

    // updatePastry
    builder.addCase(updatePastry.pending, () => {
      console.log('Modification de la pâtisserie en cours...');
    });
    builder.addCase(updatePastry.rejected, (_, action) => {
      console.log(action.error.message);
      toastError('La modification de la pâtisserie a échouée ⚠️');
    });
    builder.addCase(updatePastry.fulfilled, (state, action) => {
      console.log('Pâtisserie modifiée avec succès ✅ !', action.payload);
      toastSuccess('Pâtisserie modifiée avec succès ✅ !');

      const updatedPastries = state.pastries.map((pastry) => {
        if (pastry.id === action.payload.id) {
          return { ...pastry, ...action.payload };
        } else {
          return pastry;
        }
      });

      state.pastries = updatedPastries;
    });

    // deletePastry
    builder.addCase(deletePastry.pending, () => {
      console.log('Suppression de la pâtisserie en cours...');
    });
    builder.addCase(deletePastry.rejected, (_, action) => {
      console.log(action.error.message);
      toastError('La suppression de la pâtisserie a échouée ⚠️');
    });
    builder.addCase(deletePastry.fulfilled, (state, action) => {
      console.log('Pâtisserie supprimée avec succès ✅ !', action.payload);
      state.pastries = action.payload;
      toastSuccess('Pâtisserie supprimée avec succès ✅ !');
    });
  },
});

export const { addPastries } = pastriesSlice.actions;
