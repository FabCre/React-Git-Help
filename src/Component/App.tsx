import React from 'react';
import './App.scss';
import 'typeface-roboto';
import SearchAppBar from './SearchAppBar';
import GitConfig from './GitConfig';
import CommandTable from './CommandTable';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import RebaseVerticalLinearStepper from './RebaseVerticalLinearStepper';
import MergeVerticalLinearStepper from './MergeVerticalLinearStepper';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        backgroundColor: 'darkorchid',
        color: 'white',
      },
    },
    MuiPaper: {
      root: {
        borderRadius: '0.3%',
      },
    },
  },
});

const App: React.FC = () => {
  const [category, setCategory] = React.useState<string>('Command');

  const onCategoryChoose = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.innerText);
  };

  const [searchValue, setSearchValue] = React.useState<string | null>(null);

  const onSearchChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="root">
      <MuiThemeProvider theme={theme}>
        <SearchAppBar
          chooseCategory={onCategoryChoose}
          searchChange={onSearchChange}
          category={category}
        />
        {category === 'GitConfig' && <GitConfig />}
        {category === 'Command' && <CommandTable searchValue={searchValue} />}
        {category === 'Rebase Process' && <RebaseVerticalLinearStepper />}
        {category === 'Merge Process' && <MergeVerticalLinearStepper />}
      </MuiThemeProvider>
    </div>
  );
};

export default App;
