import React, { Component } from "react";
import { connect } from "react-redux";
import localforage from "localforage";
import { Flex } from "grid-styled";
import { SearchTab } from "./components/SearchTab";
import { SavedTab } from "./components/SavedTab";
import { Section } from "./components/Section";
import { actions } from "./actions";

class App extends Component {
  componentDidMount() {
    localforage.getItem(
      "albums",
      (err, value) => (!err ? this.props.fetchAlbums(value.albums) : {})
    );
  }

  render() {
    return (
      <Flex justifyContent={"space-between"}>
        <Section>
          <SearchTab />
        </Section>
        <Section>
          <SavedTab />
        </Section>
      </Flex>
    );
  }
}

export default connect(
  null,
  { fetchAlbums: actions.fetchInitialAlbums }
)(App);
