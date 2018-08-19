import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { thumbnailStyle, 
        headerConentStyles, 
        thumbnailContainerStyle, 
        headerTextStyle, 
        imageStyle } = styles;
    const { thumbnail_image, title, artist, image, url } = album;
    console.log(artist);
    return (
     <Card>
      <CardSection>
          <View style={thumbnailContainerStyle}>
              <Image 
              style={thumbnailStyle}
              source={{ uri: thumbnail_image }} 
              />
          </View>
          <View style={headerConentStyles}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text style={headerTextStyle}>{artist}</Text>
          </View>
        
      </CardSection>

      <CardSection>
          <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>

      
      <CardSection>
          <Button onPress={() => Linking.openURL(url)} >
           Buy Now
            </Button>
      </CardSection>

     </Card>
    );
};

const styles = {
    headerTextStyle: {
        fontSize: 18
    },
    headerConentStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        marginLeft: 10,
        alignItems: 'center'
    },
    imageStyle: {
        flex: 1,
        width: null,
        height: 300
    }
};

export default AlbumDetail;
