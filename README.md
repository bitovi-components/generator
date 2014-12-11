Yeoman generator for component library repos.

## Getting Started

### Install Yeoman

```bash
npm install -g yo
```

### Install Bitovi Components Generator (locally)

```bash
git clone git@github.com:bitovi-components/generator.git
cd generator
npm link
```

### Initiate the Generator

```bash
yo bitovi-component `<component-name>`
```

This will create all the files you'd expect in a repository (Gruntfile, package.json, bower.json). The generator will also create a `<name>` component in the root folder.

### Create sub-components

```bash
yo bitovi-component:component `<component-name>`
```

This will create a `<component-name>` sub-folder and place the base files of a component inside.

### TODO

Make each component have a demo & test (in the case of a multi-component repo)

## License

MIT
