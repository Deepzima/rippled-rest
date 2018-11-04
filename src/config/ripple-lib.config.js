'use strict';

/** Third Party **/
const { RippleAPI } = require('ripple-lib');

/** Env **/
import { ENV } from './env.config'

export let Ripple 

Ripple = new RippleAPI({
  server: ENV.RIPPLE_SERVER
});
