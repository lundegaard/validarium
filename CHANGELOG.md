# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## Unreleased

## v0.4.0 - 2019-03-21

### Added

- Breaking change - Moved validation functions from package `intl` to validations.
- Breaking change - Removed intl dependency from package `core` and move translation into package `intl`.
- Breaking change - Renamed `createMainValidate` to `combineValidate`.
- Breaking change - Every validation is now optional and null-safe. Use `isRequired` validation to mark field as required.
- Breaking change - Removed `createOptionalValidation` since it does not make sense to have it anymore.

### Changed

- Improved documentation [#16](https://github.com/lundegaard/validarium/pull/16)
