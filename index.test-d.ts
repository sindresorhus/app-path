import {expectType} from 'tsd';
import appPath = require('.');

expectType<Promise<string>>(appPath('Safari'));
expectType<string>(appPath.sync('Safari'));
