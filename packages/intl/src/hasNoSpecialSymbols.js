import createValidation from '@validarium/core/src/createValidation';
import hasNoSpecialSymbols from '@validarium/predicates/src/hasNoSpecialSymbols';
import m from './messages';

export default createValidation(hasNoSpecialSymbols, m.hasNoSpecialSymbols);
