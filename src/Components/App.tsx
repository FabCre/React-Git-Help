import React from 'react';
import { createTheme, MuiThemeProvider } from '@material-ui/core';

import SearchAppBar from './SearchAppBar';
import GitConfig from './GitConfig';
import CommandTable from './CommandTable';
import MergeVerticalLinearStepper from './Process/MergeVerticalLinearStepper';
import HotfixVerticalLinearStepper from './Process/HotfixVerticalLinearStepper';
import RebaseVerticalLinearStepper from './Process/RebaseVerticalLinearStepper';

import './App.scss';

const theme = createTheme({
  overrides: {
    MuiAppBar: {
      root: {
        backgroundColor: '#8a85ff',
        color: 'white !important',
      },
    },
    MuiPaper: {
      root: {
        color: 'white',
        borderRadius: '0.3%',
        backgroundColor: '#282C34',
      },
    },
    MuiStepLabel: {
      label: {
        color: 'white !important',
      },
    },
    MuiButton: {
      root: {
        color: '#adb0bb',
      },
    },
  },
});

export type MenuCategory = 'Merge Process' | 'Rebase Process' | 'HotFix Process' | 'Git config' | 'Command';

const App: React.FC = () => {
  const [category, setCategory] = React.useState<MenuCategory>('Command');

  const onCategoryChoose = (event: React.MouseEvent<HTMLLIElement>) => {
    setCategory(event.currentTarget.innerText as MenuCategory);
  };

  const [searchValue, setSearchValue] = React.useState<string | null>(null);

  const onSearchChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="root">
      <MuiThemeProvider theme={theme}>
        <SearchAppBar chooseCategory={onCategoryChoose} searchChange={onSearchChange} category={category} />
        {category === 'Git config' && <GitConfig />}
        {category === 'Command' && <CommandTable searchValue={searchValue} />}
        {category === 'Rebase Process' && <RebaseVerticalLinearStepper />}
        {category === 'Merge Process' && <MergeVerticalLinearStepper />}
        {category === 'HotFix Process' && <HotfixVerticalLinearStepper />}
      </MuiThemeProvider>
    </div>
  );
};

export default App;
