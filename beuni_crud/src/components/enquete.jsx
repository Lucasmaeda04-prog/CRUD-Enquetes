import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Divider, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'; // Ícone de edição

export function Enquete({ enquete, onRemove, onEdit }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Estado para controlar o modal

  const openDialog = () => {
    setIsDialogOpen(true); 
  };

  const closeDialog = () => {
    setIsDialogOpen(false); 
  };

  const confirmRemove = () => {
    handleRemove(); 
    closeDialog();
  }; 

  const handleRemove = () => {
    if (onRemove) {
      onRemove(enquete.id_enquete);
    }
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(enquete);
    }
  };

  return (
    <>
      <Card variant="outlined" sx={{ margin: 2, padding: 1 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">{enquete.titulo}</Typography>
            <Box>
              <Button
                color="warning"
                onClick={handleEdit}
                startIcon={<EditIcon />} // Ícone de edição
                sx={{ marginLeft: 1.3 }}
              >
              </Button>
              <Button
                color="info"
                onClick={openDialog}
                startIcon={<DeleteIcon />}
              >
              </Button>
            </Box> 
          </Box>
          <Divider sx={{ marginY: 2 }} />
          <Box sx={{ marginTop: 2 }}>
            {enquete.respostas.map((resposta, index) => (
              <Typography key={index} variant="body1">
                {resposta}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Modal de confirmação de remoção */}
      {enquete && (
        <Dialog open={isDialogOpen} onClose={closeDialog}>
          <DialogTitle>Confirmar Remoção</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Você tem certeza que deseja remover a enquete "{enquete.titulo}"?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog} color="primary">
              Cancelar
            </Button>
            <Button onClick={confirmRemove} color="error" autoFocus>
              Remover
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
