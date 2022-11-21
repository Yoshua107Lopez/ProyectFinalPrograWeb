import React from "react"
import {GoogleMap,
        withScriptjs,
        withGoogleMap} from "react-google-maps";

export const Mapa = (props) =>{
      return (
        <GoogleMap 
           defaultZoom={10}
           defaultCenter={{ lat: -341397, lng: 150.644}}
        /> 
      );
};

export default withScriptjs(
        withGoogleMap(
                Mapa
        )
)