import Button from '@mui/material/Button';

const Filter = ({ setSelectedOption }: any) => {
  return (
    <div>
      <Button onClick={() => setSelectedOption('Phrasal-Verbs')} variant="contained">
        Phrasal Verbs
      </Button>
    </div>
  );
};

export default Filter;
