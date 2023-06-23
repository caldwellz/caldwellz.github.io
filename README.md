# caldwellz.github.io

This is the source code for the Gatsby-based iteration of my software development portfolio. For the original version (pure HTML/CSS/JS), see the ["classic" subfolder](https://github.com/caldwellz/caldwellz.github.io/tree/classic).

##  Development Quick Start

To run the site in developer mode:

```shell
git clone https://github.com/caldwellz/caldwellz.github.io
cd caldwellz.github.io
yarn install
yarn run develop
```

The site should now locally available at [http://localhost:8000/](http://localhost:8000/).
When finished making changes, simply commit them and the on-commit hooks will automatically lint, rebuild, and add the built production files (in public/) to the commit.
If the linting or build fails, the commit will be undone - just fix the issues and try committing again.
