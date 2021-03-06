/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @Author: JB (jb@codecorsair.com)
 * @Date: 2016-09-06 17:39:21
 * @Last Modified by: JB (jb@codecorsair.com)
 * @Last Modified time: 2016-09-06 17:45:25
 */

import {BaseAction, defaultAction, merge} from '../../lib/reduxUtils';

const localStorageKey = 'cse-patcher-sounds-v2';

const MUTE_SOUNDS = 'cse-patcher/sounds/MUTE_SOUNDS';
const UNMUTE_SOUNDS = 'cse-patcher/sounds/UNMUTE_SOUNDS';
const MUTE_MUSIC = 'cse-patcher/sounds/MUTE_MUSIC';
const UNMUTE_MUSIC = 'cse-patcher/sounds/UNMUTE_MUSIC';

export interface SoundsAction extends BaseAction {}

export function muteSounds(): SoundsAction {
  localStorage.setItem(localStorageKey, JSON.stringify(true));
  return {
    type: MUTE_SOUNDS,
    when: new Date(),
  };
}

export function unMuteSounds(): SoundsAction {
  localStorage.setItem(localStorageKey, JSON.stringify(false));
  return {
    type: UNMUTE_SOUNDS,
    when: new Date(),
  };
}

export function muteMusic(): SoundsAction {
  localStorage.setItem(localStorageKey, JSON.stringify(true));
  return {
    type: MUTE_MUSIC,
    when: new Date(),
  };
}

export function unMuteMusic(): SoundsAction {
  localStorage.setItem(localStorageKey, JSON.stringify(false));
  return {
    type: UNMUTE_MUSIC,
    when: new Date(),
  };
}

export interface SoundsState {
  playMusic: boolean;
  playSound: boolean;
}

function getInitialState() {
  return {
    playMusic: true,
    playSound: true,
  };
}

const initialState = JSON.parse(localStorage.getItem(localStorageKey)) || false;

export default function reducer(state: SoundsState = getInitialState(), action: SoundsAction = defaultAction): SoundsState {
  switch(action.type) {
    default: return state;
    case MUTE_SOUNDS:
      return merge(state, {playSound: false});
    case UNMUTE_SOUNDS:
      return merge(state, {playSound: true});
    case MUTE_MUSIC:
      return merge(state, {playMusic: false});
    case UNMUTE_MUSIC:
      return merge(state, {playMusic: true});
  }
}
