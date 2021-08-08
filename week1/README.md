# Class 1
## Setting Up Git And Your Home Directory

### Making The Home Directory

Welcome! Let’s get started by setting up the directory where your work is going to live. 
For a quick refresher, the terminal is basically a direct interface to your computer - text-based, rather than the graphical interfaces (like Finder on Mac or File Browser on Windows) that most people use. The terminal is a beautiful thing and learning to use it well will make you an extremely powerful programmer.

Some basic commands to get used to:

`cd`: change directory - enter a folder
`mkdir {directory name}`: make a new folder
touch {file name}: make a new file
`ls`: list all files in the current folder

Open the terminal and type `cd Documents`. If you have a preferred folder for classwork, go ahead and `cd` into it for the next step.

Now let’s make a directory for this class: `mkdir web-production-2``

Cd into that folder: `cd web-production-2`

Great! You’ve created the folder where all your work for this course will live.

### Getting Set Up With Git And Github

(If you run into problems in this section, more documentation can be found [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), and, as always, Googling is your friend)

Check and see if you already have git installed - `git --version`. If you’re on a Mac, it should prompt you to install it if it’s not already there.

Once it’s installed, enter `git init` to create your github repository.

To “save” all our files in git: `git add .` 
To “commit” all of them: `git commit -m “my first commit!”`
Finally, let’s rename our primary branch: `git branch -M main` (GitHub, by default, calls its primary branch `master`, which has a [loaded history](https://twitter.com/mislav/status/1270388510684598272))

Now, in the browser, go to [GitHub](github.com) and create an account if you don’t already have one. 

To interact with GitHub from the command line, you’ll need to create an SSH key and add it to GitHub - this is an annoying step, but you only have to do it once!

In the terminal, first set up your git configuration:

`
git config --global user.email “Your_email@website.com”````

In GitHub, create a new repository named web-production-2. Every time you create a repository, GitHub conveniently reminds you how to set it up, but since we’ve already made our local repository, we just need to copy the last two lines and paste them in the terminal.

Now refresh the page in GitHub and your code should be there!

Let’s go back to the terminal and get set up for today’s exercises:

`mkdir week-1-exercises`
`cd week-1-exercises`
`touch refresher.js`
`touch style.css`
`touch index.html`

Let’s commit these empty files:

`git add .`
`git commit -m “adding empty files”
`

## JavaScript, HTML, and CSS refresher
