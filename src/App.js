import React, {Component} from 'react';
import {Box, Flex} from 'grid-styled';
import {SearchTab} from "./components/SearchTab";
import {SavedTab} from './components/SavedTab';

import {Section} from "./components/Section";

class App extends Component {
  render() {
    return (
      <Flex justifyContent={'space-between'}>
        <Section>
          <SearchTab/>
        </Section>
        <Section>
          <SavedTab/>
        </Section>
      </Flex>
    );
  }
}

export default App;
