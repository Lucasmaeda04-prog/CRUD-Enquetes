import {React, useState}  from 'react';
import { Card, CardContent, Typography, Button, TextField, Box, Divider } from '@mui/material';

export function CriarEnquete({ onSave, enquete }) {
  const [titulo, setTitulo] = useState(enquete ? enquete.titulo : '');
  const [respostas, setRespostas] = useState(enquete ? enquete.respostas : ['']);
  const [id_enquete, setId] = useState(enquete ? enquete.id_enquete : '');
  
  // Estado para controlar erros
  const [tituloErro, setTituloErro] = useState(false);
  const [respostasErro, setRespostasErro] = useState([]);

  const handleTituloChange = (e) => {
    setTitulo(e.target.value);
  };
  
  const handleRespostaChange = (index, value) => {
    const novasRespostas = [...respostas];
    novasRespostas[index] = value;
    setRespostas(novasRespostas);
  };

  const adicionarResposta = () => {
    setRespostas([...respostas, '']);
  };

  const handleSubmit = () => {
    let valid = true;

    // Verifica se o título está vazio
    if (!titulo.trim()) {
      setTituloErro(true);
      valid = false;
    } else {
      setTituloErro(false);
    }

    // Verifica se as respostas estão vazias
    const novasRespostasErro = respostas.map((resposta) => !resposta.trim());
    setRespostasErro(novasRespostasErro);

    if (novasRespostasErro.includes(true)) {
      valid = false;
    }

    // Se tudo estiver válido, prossegue com a criação/edição da enquete
    if (valid) {
      onSave(titulo, respostas, id_enquete); // Chama a função de criação no componente App
      setTitulo(''); // Limpa o formulário
      setRespostas(['']);
    }
  };

  return (
    <Card variant="outlined" sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h6">{enquete ? 'Editar Enquete' : 'Criar Nova Enquete'}</Typography>
        
        {/* Campo de título com validação de erro */}
        <TextField
          label="Título da Enquete"
          value={titulo}
          onChange={handleTituloChange}
          fullWidth
          margin="normal"
          error={tituloErro} // Exibe erro visual se o título estiver vazio
          helperText={tituloErro ? 'O título não pode estar vazio' : ''}
        />
        
        <Divider sx={{ marginY: 2 }} />

        <Box
          sx={{
            maxHeight: 200, // Limita a altura máxima do box
            overflowY: 'auto', // Adiciona scroll vertical quando necessário
          }}
        >
          {respostas.map((resposta, index) => (
            <TextField
              key={index}
              label={`Resposta ${index + 1}`}
              value={resposta}
              onChange={(e) => handleRespostaChange(index, e.target.value)}
              fullWidth
              margin="normal"
              error={respostasErro[index]} // Exibe erro visual se a resposta estiver vazia
              helperText={respostasErro[index] ? 'A resposta não pode estar vazia' : ''}
            />
          ))}
        </Box>

        <Button onClick={adicionarResposta} variant="outlined" sx={{ marginTop: 2 }}>
          Adicionar Resposta
        </Button>

        <Box sx={{ marginTop: 2 }}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            fullWidth
          >
            Salvar
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
