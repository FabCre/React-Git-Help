import 'typeface-roboto';
import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import SearchAppBar from './SearchAppBar';
import GitConfig from './GitConfig';
import CommandTable from './CommandTable';
import MergeVerticalLinearStepper from './Process/MergeVerticalLinearStepper';
import HotfixVerticalLinearStepper from './Process/HotfixVerticalLinearStepper';
import RebaseVerticalLinearStepper from './Process/RebaseVerticalLinearStepper';

import './App.scss';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        backgroundColor: 'darkorchid',
        color: 'white !important',
      },
    },
    MuiPaper: {
      root: {
        borderRadius: '0.3%',
      },
    },
  },
});

export type MenuCategory = 'Merge Process' | 'Rebase Process' | 'HotFix Process' | 'GitConfig' | 'Command';

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
        {category === 'GitConfig' && <GitConfig />}
        {category === 'Command' && <CommandTable searchValue={searchValue} />}
        {category === 'Rebase Process' && <RebaseVerticalLinearStepper />}
        {category === 'Merge Process' && <MergeVerticalLinearStepper />}
        {category === 'HotFix Process' && <HotfixVerticalLinearStepper />}
      </MuiThemeProvider>
    </div>
  );
};

export default App;
