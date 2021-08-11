### Getting Set Up With Git And Github

(If you run into problems in this section, more documentation can be found [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), and, as always, Googling is your friend)

Check and see if you already have git installed - `git --version`. If you’re on a Mac, it should prompt you to install it if it’s not already there.

Once it’s installed, enter `git init` to create your github repository.

To “save” all our files in git: `git add .`
To “commit” all of them: `git commit -m “my first commit!”`
Finally, let’s rename our primary branch: `git branch -M main` (GitHub, by default, calls its primary branch `master`, which has a [loaded history](https://twitter.com/mislav/status/1270388510684598272))
