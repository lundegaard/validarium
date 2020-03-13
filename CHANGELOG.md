## Unreleased

### Fixes
- [Missing export](https://github.com/lundegaard/validarium/pull/64)

## v0.7.0 - 2020-03-13

### Added
- [`isRequiredNumber`](https://github.com/lundegaard/validarium/pull/63)

## v0.6.1 - 2020-03-02

### Added

- [CDN bundling of validarium](https://github.com/lundegaard/validarium/pull/58)

## v0.6.0 - 2020-03-01

### Added

- [Docs](https://github.com/lundegaard/validarium/pull/42)

## v0.5.0 - 2019-07-09

### Added

- `hasNoWhiteSpace` validation
- `isTrimmed` validation
- `isTrimmedLeft` validation
- `isTrimmedRight` validation
 

## v0.4.0 - 2019-03-21

### Added

- Breaking change - Moved validation functions from package `intl` to validations.
- Breaking change - Removed intl dependency from package `core` and move translation into package `intl`.
- Breaking change - Renamed `createMainValidate` to `combineValidate`.
- Breaking change - Every validation is now optional and null-safe. Use `isRequired` validation to mark field as required.
- Breaking change - Removed `createOptionalValidation` since it does not make sense to have it anymore.

### Changed

- Improved documentation [#16](https://github.com/lundegaard/validarium/pull/16)

