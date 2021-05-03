import {expectType} from 'tsd';
import appPath from './index.js';

expectType<Promise<string>>(appPath('Safari'));
expectType<string>(appPath.sync('Safari'));
