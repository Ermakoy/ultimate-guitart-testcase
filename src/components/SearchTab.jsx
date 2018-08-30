import * as React from "react";
import styled from "styled-components";
import {Box, Flex} from "grid-styled";
import {Text, RadioGroup, TextField, Button} from "reactackle";
import {Form, State, Compose} from "react-powerplug";
import {getAlbumsById, getAlbumsByName} from "../api";
import {AlbumCard} from "./AlbumCard";
import {actions} from "../actions";
import {connect} from "react-redux";

const Container = styled(Flex).attrs({
  flexDirection: "column",
  width: 1,
  p: "3%"
})`
  height: 100%;
  background: cornsilk;
`;

const options = [
  {text: "По названию", value: "name"},
  {text: "По ID", value: "id"}
];

const getInitialState = () => ({loading: false, fetchState: {data: []}});

const getErrorState = () => ({
  loading: false,
  fetchState: {type: "error", data: "Произошла ошибка"}
});

const getSuccessState = data => ({
  loading: false,
  fetchState: {type: "success", data}
});

const searchBy = {
  name: getAlbumsByName,
  id: getAlbumsById
};

export const InnerSearchTab = props => (
  <Container>
    <Text display="headline">Поиск</Text>
    <Compose
      components={[
        <Form initial={{searchText: "", searchOption: ""}}/>,
        <State initial={getInitialState()}/>
      ]}
    >
      {({input, values}, {state, setState}) => {
        const onClick = () => {
          searchBy[values.searchOption](values.searchText).then(data =>
            setState(getSuccessState(data))
          );
        };
        const setValue = fieldName => ({value}) =>
          input(fieldName).set(value);
        return (
          <React.Fragment>
            <Flex mt={30} mb={70}>
              <Box width={1} mx={"5px"}>
                <TextField
                  placeholder="Начните вводить строку поиска"
                  label="Поиск"
                  labelPosition="top"
                  fullWidth
                  value={values.searchText}
                  onChange={setValue("searchText")}
                />
              </Box>
              <Box mx={15}>
                <RadioGroup
                  options={options}
                  value={values.searchOption}
                  onChange={setValue("searchOption")}
                />
              </Box>
              <Button
                text="Поиск"
                colorScheme="info"
                size="normal"
                onPress={onClick}
              />
            </Flex>
            <Flex/>
            <Flex
              alignItems={"space-around"}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
            >
              {state.fetchState.data.length &&
              state.fetchState.data.map(album => (
                <AlbumCard
                  album={album}
                  key={album.id}
                  addAlbum={props.addAlbum(album)}
                  deleteAlbum={props.deleteAlbum(album.id)}
                />
              ))}
            </Flex>
          </React.Fragment>
        );
      }}
    </Compose>
  </Container>
);

const mapDispatchToProps = dispatch => ({
  addAlbum: album => () => dispatch(actions.addAlbum(album)),
  deleteAlbum: id => () => dispatch(actions.deleteAlbum(id))
});

export const SearchTab = connect(
  null,
  mapDispatchToProps
)(InnerSearchTab);
