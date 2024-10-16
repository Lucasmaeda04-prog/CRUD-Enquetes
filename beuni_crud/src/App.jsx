import React, { useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, Typography, CircularProgress, Modal } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { CriarEnquete } from './components/criarEnquete';
import { Enquete } from './components/enquete';
import { api } from './api/axiosConfig';
import { Snackbar, Alert } from '@mui/material';

function App() {
  const [enquetes, setEnquetes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [enqueteToSave, setenqueteToSave] = useState(null); // Enquete que será editada
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    const fetchEnquetes = async () => {
      try {
        const response = await api.get('/enquete');
        setEnquetes(response.data);
      } catch (error) {
        console.log('Erro ao buscar enquetes:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEnquetes();
  }, []);

  const handleCreateEnquete = async (titulo, respostas, id_enquete) => {
    let novaEnquete = {titulo, respostas, id_enquete}

    try {
      delete novaEnquete.id_enquete; 
      const response = await api.post('/enquete', novaEnquete);
      novaEnquete = {...novaEnquete, id_enquete:response.data.id_enquete};
      setEnquetes((prevEnquetes) => [...prevEnquetes, novaEnquete]);
      setSnackbarMessage(`Enquete: '${novaEnquete.titulo}' criada com sucesso`); // Mensagem de sucesso
      setSnackbarOpen(true); // Abre o Snackbar
    } catch (error) {
      console.error('erro', error);
    }
  };

  const handleRemoveEnquete = async (id) => {
    try {
      const response = await api.delete(`/enquete/${id}`);
      setEnquetes((prevEnquetes) => prevEnquetes.filter(enquete => enquete.id_enquete !== id));
      setSnackbarMessage(`Enquete apagada com sucesso`); // Mensagem de sucesso
      setSnackbarOpen(true); // Abre o Snackbar
    } catch (error) {
      console.error('erro', error);
    }
  };

  const handleEditEnquete = (enquete) => {
    setenqueteToSave(enquete); // Define qual enquete será editada
    setIsEditModalOpen(true); // Abre o modal de edição
  };

  const handleUpdateEnquete = async (titulo, respostas, id_enquete) => {
    try {
      const enqueteAtualizada = {titulo, respostas, id_enquete}
      const response = await api.patch(`/enquete/${enqueteAtualizada.id_enquete}`, enqueteAtualizada);
      setEnquetes((prevEnquetes) =>
        prevEnquetes.map((enquete) =>
          enquete.id_enquete === enqueteAtualizada.id_enquete ? enqueteAtualizada : enquete
        )
      );
      setIsEditModalOpen(false); // Fecha o modal após a atualização
      setSnackbarMessage(`Enquete atualizada com sucesso`); // Mensagem de sucesso
      setSnackbarOpen(true); // Abre o Snackbar
    } catch (error) {
      console.error('erro', error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Gerenciador de Enquetes</Typography>
        </Toolbar>
      </AppBar>

      <Grid container  spacing={2} sx={{ marginTop: 4 }}>
        <Grid item size={3}>
          <CriarEnquete onSave={handleCreateEnquete} enquete={enqueteToSave} />
        </Grid>

        <Grid  container size={9}>
          {loading ? (
            <CircularProgress />
          ) : (
            enquetes.length === 0 ? (
              <Typography variant="h6" align="center"  sx={{ color: 'text.secondary' }}>
                Não há enquetes disponíveis.
              </Typography>
            ) : (
              enquetes.map((enquete) => (
                <Grid item size = {4}>
                <Enquete 
                  key={enquete.id_enquete} 
                  enquete={enquete} 
                  onRemove={handleRemoveEnquete} 
                  onEdit={handleEditEnquete} // Passa a função de editar
                  />
                </Grid>
              ))
            )
          )}
        </Grid>
      </Grid>

      {/* Modal de Edição */}
      <Modal open={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <Box sx={{ maxWidth: 600, margin: 'auto', marginTop: 4, padding: 2 }}>
          {enqueteToSave && (
            <CriarEnquete
              onSave={handleUpdateEnquete} // Reutiliza a lógica de criar para editar
              enquete={enqueteToSave} // Passa a enquete para edição
            />
          )}
        </Box>
      </Modal>
         {/* Snackbar para mensagens */}
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000} // Duração em milissegundos antes de fechar
            onClose={() => setSnackbarOpen(false)} // Fecha o snackbar
          >
            <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
    </Box>

 
  );
}

export default App;
