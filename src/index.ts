import {
  addMinutes,
  setTime,
  setLeading,
  setTrailing,
  setViewport,
  setDefaultViewport,
  setLightSettings,
  setMovesBase,
  setDepotsBase,
  setAnimatePause,
  setAnimateReverse,
  setSecPerHour,
  setClicked,
  setRoutePaths,
  setDefaultZoom,
  setDefaultPitch,
  setMovesOptionFunc,
  setDepotsOptionFunc,
  setLoading,
  increaseTime,
  decreaseTime,
  setFrameTimestamp,
  setTimeStamp,
  setLinemapData,
  setInputFilename,
  updateMovesBase
} from './actions';

import {
  BasedState,
  BasedProps,
  Bounds,
  ClickedObject,
  Depotsbase,
  DepotsData,
  LightSettings,
  MovedData,
  Movesbase,
  MovesbaseOperation,
  RoutePaths,
  Viewport,
  LineMapData,
  ActionsInterface,
  Position,
  Radius,
  DataOption,
  LineData,
  EventInfo
} from './types';

import MovesInput from './components/moves-input';
import DepotsInput from './components/depots-input';
import LinemapInput from './components/linemap-input';
import LoadingIcon from './components/loading-icon';
import AddMinutesButton from './components/addminutes-button';
import ElapsedTimeRange from './components/elapsedtime-range';
import ElapsedTimeValue from './components/elapsedtime-value';
import PlayButton from './components/play-button';
import PauseButton from './components/pause-button';
import ReverseButton from './components/reverse-button';
import ForwardButton from './components/forward-button';
import SimulationDateTime from './components/simulation-date-time';
import SpeedRange from './components/speed-range';
import SpeedValue from './components/speed-value';
import HarmoVisLayers from './components/harmovislayers';
import NavigationButton from './components/navigation-button';
import FpsDisplay from './components/fps-display';
import MovesLayer from './layers/moves-layer';
import DepotsLayer from './layers/depots-layer';
import LineMapLayer from './layers/line-map-layer';
import * as settings from './constants/settings';
import Container from './containers';
import reducer from './reducers';
import { connectToHarmowareVis, getContainerProp, getCombinedReducer } from './library';

const Actions: ActionsInterface = {
  addMinutes,
  setTime,
  setLeading,
  setTrailing,
  setViewport,
  setDefaultViewport,
  setLightSettings,
  setMovesBase,
  setDepotsBase,
  setAnimatePause,
  setAnimateReverse,
  setSecPerHour,
  setClicked,
  setRoutePaths,
  setDefaultZoom,
  setDefaultPitch,
  setMovesOptionFunc,
  setDepotsOptionFunc,
  setLoading,
  increaseTime,
  decreaseTime,
  setFrameTimestamp,
  setTimeStamp,
  setLinemapData,
  setInputFilename,
  updateMovesBase
};

export {
  // actions
  Actions,
  // components
  MovesInput,
  DepotsInput,
  LinemapInput,
  LoadingIcon,
  AddMinutesButton,
  PlayButton,
  PauseButton,
  ForwardButton,
  ReverseButton,
  ElapsedTimeRange,
  ElapsedTimeValue,
  SpeedRange,
  SpeedValue,
  SimulationDateTime,
  HarmoVisLayers,
  NavigationButton,
  FpsDisplay,
  // constants
  settings,
  // container
  Container,
  // layers
  MovesLayer,
  DepotsLayer,
  LineMapLayer,
  // library
  getContainerProp,
  connectToHarmowareVis,
  getCombinedReducer,
  // reducer
  reducer,
  // types
  BasedState,
  BasedProps,
  Bounds,
  ClickedObject,
  Depotsbase,
  DepotsData,
  LightSettings,
  MovedData,
  MovesbaseOperation,
  Movesbase,
  RoutePaths,
  Viewport,
  LineMapData,
  ActionsInterface,
  Position,
  Radius,
  DataOption,
  LineData,
  EventInfo
};