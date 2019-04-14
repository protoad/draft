# npm deps

## cli

* chalk — Terminal string styling done right
* figlet — Figlet is a program for making large letters out of ordinary text
* inquirer — A collection of common interactive command line user interfaces
* shelljs — Portable Unix shell commands for Node.js

## publish

### locally

#### add to package.json

```
  "bin": {
    "creator": "./index.js"
  },

```

#### local link

Run :

```
npm link
```

#### test bin command

##### reload shell env

```
source ~/.bashrc || source ~/.zshrc
```

##### test command

```
draft ➤ creator                                                                                                                                                     git:feature/cli*
     .-') _              _ .-') _     ('-.                                      .-. .-')               .-') _                             .-')
    ( OO ) )            ( (  OO) )  _(  OO)                     .-.             \  ( OO )             ( OO ) )                           ( OO ).
,--./ ,--,'  .-'),-----. \     .'_ (,------.         ,------..-,| |,-.  .-----. ,--. ,--.  ,-.-') ,--./ ,--,'  ,----.               ,--.(_)---\_)
|   \ |  |\ ( OO'  .-.  ',`'--..._) |  .---'      ('-| _.---'_\ ' ' /_ '  .--./ |  .'   /  |  |OO)|   \ |  |\ '  .-./-')        .-')| ,|/    _ |
|    \|  | )/   |  | |  ||  |  \  ' |  |          (OO|(_\   (__     __)|  |('-. |      /,  |  |  \|    \|  | )|  |_( O- )      ( OO |(_|\  :` `.
|  .     |/ \_) |  |\|  ||  |   ' |(|  '--.       /  |  '--.  / . . \ /_) |OO  )|     ' _) |  |(_/|  .     |/ |  | .--, \      | `-'|  | '..`''.)
|  |\    |    \ |  | |  ||  |   / : |  .--'       \_)|  .--' `-'| |`-'||  |`-'| |  .   \  ,|  |_.'|  |\    | (|  | '. (_/      ,--. |  |.-._)   \
|  | \   |     `'  '-'  '|  '--'  / |  `---.        \|  |_)     `-'  (_'  '--'\ |  |\   \(_|  |   |  | \   |  |  '--'  |       |  '-'  /\       /
`--'  `--'       `-----' `-------'  `------'         `--'               `-----' `--' '--'  `--'   `--'  `--'   `------'         `-----'  `-----'
? What is the name of the file without extension? some
? What is the file extension? .js
Done! File created at /home/michaelr/projects/github/micrub/draft/some.js
draft ➤
```



