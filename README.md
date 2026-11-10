# Gangfight: Website

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b5d751af59ed4e35907fa6f4c6f3a3d9)](https://app.codacy.com/gh/gangfight/gangfight-website/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade) [![General Workflow](https://github.com/gangfight/gangfight-website/actions/workflows/general.yml/badge.svg)](https://github.com/gangfight/gangfight-website/actions/workflows/general.yml) [![Release Workflow](https://github.com/gangfight/gangfight-website/actions/workflows/release.yml/badge.svg)](https://github.com/gangfight/gangfight-website/actions/workflows/release.yml)

The official website of Gangfight, a small static [Astro][astro] site with
teaser content in English and German. It contains no game logic and talks to no
API, just some static landing page content.

## Building

```console
npm ci

npm run lint
npm run fmt
npm run build
```

## Security

If you find a security issue please contact
[security@gangfight.eu](mailto:security@gangfight.eu) first.

## Development

We use [mise][mise] to manage all required tools and their versions. Install it
by following the [official installation instructions][mise-install], then run
the following commands inside the repository to activate mise and install all
tools defined in `mise.toml`:

```console
mise trust
mise install
```

## Contributing

Generally we are following [conventional commits][commits] when we apply
changes. That way we are able to generate proper changelogs for every release.
Please use always pull requests to integrate new functionalities or to fix
issues.

For the release process we are following [semantic versioning][semver] which
clearly indicates if a new version just resolves bugs, includes new features or
even includes breaking changes.

After installing the tools via `mise install` as described above set up the
pre-commit hooks so they run automatically on every commit:

```console
prek install --hook-type pre-commit --hook-type commit-msg
```

> `prek` is managed by mise and will be available after `mise install`.

If you have changed something on the source you should simply commit following
the mentioned conventions:

```console
git checkout -b feat/new-feature
git add --all
git commit -m 'feat: added awesome new feature'
git push --set-upstream origin feat/new-feature
```

After pushing your changes into the Git repository you should create a pull
request on GitHub. If the pull request have been merged and everything built
fine it will also create automatically a new release at least once a week.

## Authors

- [Thomas Boerger](https://github.com/tboerger)

## License

Apache-2.0

## Copyright

```console
Copyright (c) 2026 Gangfight <info@gangfight.eu>
```

[astro]: https://astro.build
[mise]: https://mise.jdx.dev/
[mise-install]: https://mise.jdx.dev/getting-started.html
[commits]: https://www.conventionalcommits.org/en/v1.0.0/
[semver]: https://semver.org/
