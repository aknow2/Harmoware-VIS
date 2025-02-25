import * as React from 'react';
import { InteractiveMap } from 'react-map-gl';
import { Layer } from '@deck.gl/core';
import DeckGL from '@deck.gl/react';
import { ActionTypes, Viewport } from '../types';

interface thisViewport extends Viewport {
  width: number,
  height: number,
}

interface Props {
  visible?: boolean,
  viewport : Viewport,
  mapboxApiAccessToken: string,
  mapStyle?: string,
  actions: ActionTypes,
  onViewportChange?(viewport: Viewport): void,
  layers: Layer[],
  mapGlComponents?: any
  mapboxAddLayerValue?: mapboxgl.Layer[],
}

class MapGl extends InteractiveMap {
  static mapboxAddLayerValue: mapboxgl.Layer[];

  componentDidMount() {
    super.componentDidMount();
    if(!MapGl.mapboxAddLayerValue) return;
    const map = super.getMap();
    const LayerValuemap = MapGl.mapboxAddLayerValue;
    map.on('load', function() {
      for(let i=0; LayerValuemap.length > i; i+=1){
        map.addLayer(LayerValuemap[i]);
      }
    });
  }
  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>) {
    if(prevProps.mapStyle !== this.props.mapStyle && prevProps.mapStyle === '') {
      if(!MapGl.mapboxAddLayerValue) return;
      const map = super.getMap();
      const LayerValuemap = MapGl.mapboxAddLayerValue;
      map.on('styledata', function() {
        for(let i=0; LayerValuemap.length > i; i+=1){
          map.addLayer(LayerValuemap[i]);
        }
      });
    }
  }
}

export default class HarmoVisLayers extends React.Component<Props> {
  static defaultProps = {
    visible: true,
    mapStyle: 'mapbox://styles/mapbox/dark-v8',
    mapGlComponents: null,
    mapboxAddLayerValue: [{
      "id": '3d-buildings',
      "source": 'composite',
      "source-layer": 'building',
      "filter": ['==', 'extrude', 'true'],
      "type": 'fill-extrusion',
      "paint": {
          "fill-extrusion-color": '#888',
          "fill-extrusion-height": [
              "interpolate", ["linear"], ["zoom"],
              5, 0, 5.05, ["get", "height"] ],
          "fill-extrusion-base": [
              "interpolate", ["linear"], ["zoom"],
              5, 0, 5.05, ["get", "min_height"] ],
          "fill-extrusion-opacity": .6
      }
    }]
  }
  constructor(props: Props){
    super(props);
    MapGl.mapboxAddLayerValue = props.mapboxAddLayerValue;
  }

  initialize(gl: WebGLRenderingContext) {
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
  }

  render() {
    const { visible, viewport, mapStyle, actions, mapboxApiAccessToken, layers, mapGlComponents } = this.props;
    const onViewportChange = this.props.onViewportChange || actions.setViewport;

    return (
      <MapGl
        {...(viewport as thisViewport)} mapStyle={mapStyle}
        onViewportChange={onViewportChange}
        mapboxApiAccessToken={mapboxApiAccessToken}
        visible={visible}
      >
        { mapGlComponents }
        <DeckGL {...viewport} layers={layers} onWebGLInitialized={this.initialize} />
      </MapGl>
    );
  }
}
