import { useContext } from 'react';
import Button from '@mui/material/Button';
import { Filter } from './components';
import Modals from './components/Modals';
import useRootConfiguration from './hooks/use-root-configuration';
import { GlobalContext } from '../context';

const Root = () => {
  const { pulledStorageData, setSelectedOption } = useRootConfiguration();
  const { setIsAddFormOpen }: any = useContext(GlobalContext);

  return (
    <div>
      <Modals />
      <Filter setSelectedOption={setSelectedOption} />
      <Button onClick={() => setIsAddFormOpen((prev: any) => !prev)} variant="contained">
        Add new
      </Button>
      {JSON.stringify(pulledStorageData)}
    </div>
  );
};

export default Root;
