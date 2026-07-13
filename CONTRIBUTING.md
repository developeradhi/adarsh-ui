# Contributing to Adarsh B A Portfolio

First off, thank you for considering contributing to this portfolio! It's people like you that make the open-source community such a great place to learn, inspire, and create.

## Where do I go from here?

If you've noticed a bug or have a feature request, please make sure you check if there is already an issue for it. If not, open a new issue using the provided templates in the `.github/ISSUE_TEMPLATE` directory.

## Fork & create a branch

If this is something you think you can fix, then fork the repository and create a branch with a descriptive name.

A good branch name would be (where issue #325 is the ticket you're working on):

```sh
git checkout -b 325-add-dark-mode-toggle
```

## Implementation Guidelines

* **Vanilla First:** This repository relies purely on HTML, CSS, and Vanilla JS. Please avoid importing heavy frameworks or libraries unless absolutely necessary.
* **Performance:** Ensure your changes do not impact the load time or Lighthouse score of the site.
* **Security:** Be mindful of the Content Security Policy (CSP). If your contribution requires external scripts or images, coordinate an update to the CSP in your PR.

## Make a Pull Request

At this point, you should switch back to your master branch and make sure it's up to date with the main repository:

```sh
git remote add upstream https://github.com/developeradhi/adarsh-ui.git
git checkout main
git pull upstream main
```

Then update your feature branch from your local copy of main, and push it!

```sh
git checkout 325-add-dark-mode-toggle
git rebase main
git push --set-upstream origin 325-add-dark-mode-toggle
```

Finally, go to GitHub and make a Pull Request. Please fill out the PR template completely so we can understand your changes!

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
