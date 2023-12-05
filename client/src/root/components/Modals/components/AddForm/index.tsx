import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { GlobalContext } from '../../../../../context';

const style = {
  position: 'absolute' as const,
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const AddForm = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const { isAddFormOpen, setIsAddFormOpen }: any = useContext(GlobalContext);
  return (
    <div style={{ color: 'red' }}>
      <Modal
        open={isAddFormOpen}
        onClose={() => setIsAddFormOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography style={{ color: 'black' }} id="modal-modal-title" variant="h6" component="h2">
            Add new {age}
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="Phrasal Verb">Phrasal Verb</MenuItem>
              <MenuItem value="Word">Word</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Original" variant="outlined" />
          <TextField label="Translation" variant="outlined" />
          <TextField label="Example" variant="outlined" />
          <TextField label="Example Translation" variant="outlined" />
          <Button variant="contained">Add to the storage</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddForm;
