import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Flex } from "grid-styled";
import { Text } from "reactackle";
import { AlbumCard } from "./AlbumCard";
import { actions } from "../actions";

const Container = styled(Flex).attrs({
  flexDirection: "column",
  width: 1,
  p: "3%"
})`
  height: 100%;
  background: blanchedalmond;
`;

const InnerSavedTab = props => (
  <Container>
    <Text display="headline">Сохранённые</Text>
    <Flex
      alignItems={"space-around"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
    >
      {!!Object.keys(props.albums).length &&
        Object.keys(props.albums).map(id => (
          <AlbumCard
            album={props.albums[id]}
            key={id}
            addAlbum={props.addAlbum(props.albums[id])}
            deleteAlbum={props.deleteAlbum(id)}
          />
        ))}
    </Flex>
  </Container>
);

const mapStateToProps = ({ albums }) => ({ albums });

const mapDispatchToProps = dispatch => ({
  addAlbum: album => () => dispatch(actions.addAlbum(album)),
  deleteAlbum: id => () => dispatch(actions.deleteAlbum(id))
});

export const SavedTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerSavedTab);
