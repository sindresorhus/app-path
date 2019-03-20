import {expectType} from 'tsd-check';
import appPath from '.';

expectType<Promise<string>>(appPath('Safari'));
expectType<string>(appPath.sync('Safari'));
