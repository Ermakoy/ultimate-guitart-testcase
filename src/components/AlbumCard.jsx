import * as React from "react";
import styled from "styled-components";
import {
  Card,
  CardAreaMain,
  CardMedia,
  CardHeaderPrimary,
  CardActions,
  CardActionsMain,
  Button,
  CardContent,
  CardContentText
} from "reactackle";

const Wrapper = styled.div`
  margin: 15px;
  width: 250px;
`;

const Image = styled.img`
  width: 250px;
`;

export const AlbumCard = ({album, addAlbum, deleteAlbum}) => (
  <Wrapper>
    <Card>
      <CardAreaMain>
        <CardMedia
          mediaElement={
            <Image
              src={`http://coverartarchive.org/release/${() => {
                console.log(album);
                return album.id;
              }}/front`}
            />
          }
        />
        <CardHeaderPrimary
          first
          title={album.title}
          subtitle={album["artist-credit"][0].artist.name}
        />
        <CardActions>
          <CardActionsMain>
            <Button onPress={addAlbum} text="Добавить"/>
            <Button onPress={deleteAlbum} text="Удалить"/>
          </CardActionsMain>
        </CardActions>
      </CardAreaMain>
    </Card>
  </Wrapper>
);
