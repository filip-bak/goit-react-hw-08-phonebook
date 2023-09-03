import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/actions';

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => dispatch(setFilter(e.target.value));

  return (
    <div>
      <Paper elevation={2} sx={{ display: 'flex', alignItems: 'center' }}>
        <InputBase
          autoComplete="off"
          sx={{ ml: 1, py: 1 }}
          type="text"
          placeholder="Find Contact by Name"
          name="filter"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'searchbar', sx: { px: 1 } }}
          startAdornment={<SearchIcon />}
        />
      </Paper>
    </div>
  );
};

export default Filter;
